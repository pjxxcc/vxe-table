import GlobalConfig from '../../conf'
import VXETable from '../../v-x-e-table'
import XEUtils from 'xe-utils'
import MsgQueue from './queue'
import { UtilTools, DomTools, GlobalEvent } from '../../tools'

export default {
  name: 'VxeModal',
  props: {
    value: Boolean,
    id: String,
    type: { type: String, default: 'modal' },
    loading: { type: Boolean, default: null },
    status: String,
    iconStatus: String,
    top: { type: [Number, String], default: 15 },
    title: String,
    duration: { type: [Number, String], default: () => GlobalConfig.modal.duration },
    message: [String, Function],
    lockView: { type: Boolean, default: () => GlobalConfig.modal.lockView },
    lockScroll: Boolean,
    mask: { type: Boolean, default: () => GlobalConfig.modal.mask },
    maskClosable: Boolean,
    escClosable: Boolean,
    resize: Boolean,
    showHeader: { type: Boolean, default: true },
    showFooter: Boolean,
    dblclickZoom: { type: Boolean, default: () => GlobalConfig.modal.dblclickZoom },
    width: [Number, String],
    height: [Number, String],
    minWidth: { type: [Number, String], default: () => GlobalConfig.modal.minWidth },
    minHeight: { type: [Number, String], default: () => GlobalConfig.modal.minHeight },
    zIndex: Number,
    marginSize: { type: [Number, String], default: GlobalConfig.modal.marginSize },
    fullscreen: Boolean,
    remember: { type: Boolean, default: () => GlobalConfig.modal.remember },
    destroyOnClose: Boolean,
    showTitleOverflow: { type: Boolean, default: () => GlobalConfig.modal.showTitleOverflow },
    storage: { type: Boolean, default: () => GlobalConfig.modal.storage },
    storageKey: { type: String, default: () => GlobalConfig.modal.storageKey },
    animat: { type: Boolean, default: () => GlobalConfig.modal.animat },
    size: String,
    slots: Object,
    events: Object
  },
  data () {
    return {
      visible: false,
      isLoading: false,
      contentVisible: false,
      modalTop: 0,
      modalZindex: this.zIndex || UtilTools.nextZIndex(),
      zoomLocat: null,
      inited: false
    }
  },
  computed: {
    vSize () {
      return this.size || (this.$parent && (this.$parent.size || this.$parent.vSize))
    },
    isMsg () {
      return this.type === 'message'
    }
  },
  watch: {
    width () {
      this.recalculate()
    },
    height () {
      this.recalculate()
    },
    value (visible) {
      this[visible ? 'open' : 'close']()
    },
    loading () {
      if (!this.isLoading) {
        this.isLoading = true
      }
    }
  },
  created () {
    // 是否加载过 Loading 模块
    this.isLoading = this.loading
    if (!VXETable._loading && XEUtils.isBoolean(this.loading)) {
      throw new Error(UtilTools.getLog('vxe.error.reqModule', ['Loading']))
    }
    if (this.storage && !this.id) {
      UtilTools.error('vxe.error.reqProp', ['id'])
    }
  },
  mounted () {
    let { $listeners, events = {} } = this
    if (this.value) {
      this.open()
    }
    this.recalculate()
    if (this.escClosable) {
      GlobalEvent.on(this, 'keydown', this.handleGlobalKeydownEvent)
    }
    document.body.appendChild(this.$el)
    // 触发 inserted 事件
    const params = { type: 'inserted', $modal: this }
    if ($listeners.inserted) {
      this.$emit('inserted', params)
    } else if (events.inserted) {
      events.inserted.call(this, params)
    }
  },
  beforeDestroy () {
    GlobalEvent.off(this, 'keydown')
    this.removeMsgQueue()
    this.$el.parentNode.removeChild(this.$el)
  },
  render (h) {
    let {
      $scopedSlots,
      slots = {},
      vSize,
      type,
      resize,
      animat,
      loading,
      isLoading,
      status,
      iconStatus,
      showHeader,
      showFooter,
      zoomLocat,
      modalTop,
      dblclickZoom,
      contentVisible,
      visible,
      title,
      message,
      lockScroll,
      lockView,
      mask,
      isMsg,
      showTitleOverflow,
      destroyOnClose
    } = this
    let defaultSlot = $scopedSlots.default || slots.default
    let footerSlot = $scopedSlots.footer || slots.footer
    let headerSlot = $scopedSlots.header || slots.header
    let titleSlot = $scopedSlots.title || slots.title
    let headerOns = {
      mousedown: this.mousedownEvent
    }
    if (resize && dblclickZoom && type === 'modal') {
      headerOns.dblclick = this.toggleZoomEvent
    }
    return h('div', {
      class: ['vxe-modal--wrapper', `type--${type}`, {
        [`size--${vSize}`]: vSize,
        [`status--${status}`]: status,
        'is--animat': animat,
        'lock--scroll': lockScroll,
        'lock--view': lockView,
        'is--mask': mask,
        'is--maximize': zoomLocat,
        'is--visible': contentVisible,
        'is--active': visible,
        'is--loading': loading
      }],
      style: {
        zIndex: this.modalZindex,
        top: modalTop ? `${modalTop}px` : null
      },
      on: {
        click: this.selfClickEvent
      }
    }, [
      h('div', {
        class: 'vxe-modal--box',
        on: {
          mousedown: this.updateZindex
        },
        ref: 'modalBox'
      }, [
        showHeader ? h('div', {
          class: ['vxe-modal--header', !isMsg && showTitleOverflow ? 'is--ellipsis' : ''],
          on: headerOns
        }, headerSlot ? headerSlot.call(this, { $modal: this }, h) : [
          titleSlot ? titleSlot.call(this, { $modal: this }, h) : h('span', {
            class: 'vxe-modal--title'
          }, title ? UtilTools.getFuncText(title) : GlobalConfig.i18n('vxe.alert.title')),
          resize ? h('i', {
            class: ['vxe-modal--zoom-btn', 'trigger--btn', zoomLocat ? GlobalConfig.icon.modalZoomOut : GlobalConfig.icon.modalZoomIn],
            attrs: {
              title: GlobalConfig.i18n(`vxe.modal.zoom${zoomLocat ? 'Out' : 'In'}`)
            },
            on: {
              click: this.toggleZoomEvent
            }
          }) : null,
          h('i', {
            class: ['vxe-modal--close-btn', 'trigger--btn', GlobalConfig.icon.modalClose],
            attrs: {
              title: GlobalConfig.i18n('vxe.modal.close')
            },
            on: {
              click: this.closeEvent
            }
          })
        ]) : null,
        h('div', {
          class: 'vxe-modal--body'
        }, [
          status ? h('div', {
            class: 'vxe-modal--status-wrapper'
          }, [
            h('i', {
              class: ['vxe-modal--status-icon', iconStatus || GlobalConfig.icon[`modal${status.replace(/\b(\w)/, word => word.toUpperCase())}`]]
            })
          ]) : null,
          h('div', {
            class: 'vxe-modal--content'
          }, destroyOnClose && !visible ? [] : (defaultSlot ? defaultSlot.call(this, { $modal: this }, h) : (XEUtils.isFunction(message) ? message.call(this, h) : message))),
          VXETable._loading && isLoading && !isMsg ? h('vxe-loading', {
            props: {
              visible: loading
            }
          }) : null
        ]),
        showFooter ? h('div', {
          class: 'vxe-modal--footer'
        }, destroyOnClose && !visible ? [] : (footerSlot ? footerSlot.call(this, { $modal: this }, h) : [
          type === 'confirm' ? h('vxe-button', {
            on: {
              click: this.cancelEvent
            }
          }, GlobalConfig.i18n('vxe.button.cancel')) : null,
          h('vxe-button', {
            props: {
              status: 'primary'
            },
            on: {
              click: this.confirmEvent
            }
          }, GlobalConfig.i18n('vxe.button.confirm'))
        ])) : null,
        !isMsg && resize ? h('span', {
          class: 'vxe-modal--resize'
        }, ['wl', 'wr', 'swst', 'sest', 'st', 'swlb', 'selb', 'sb'].map(type => {
          return h('span', {
            class: `${type}-resize`,
            attrs: {
              'data-type': type
            },
            on: {
              mousedown: this.dragEvent
            }
          })
        })) : null
      ])
    ])
  },
  methods: {
    recalculate () {
      let { width, height } = this
      let modalBoxElem = this.getBox()
      modalBoxElem.style.width = width ? (isNaN(width) ? width : `${width}px`) : null
      modalBoxElem.style.height = height ? (isNaN(height) ? height : `${height}px`) : null
      return this.$nextTick()
    },
    selfClickEvent (evnt) {
      if (this.maskClosable && evnt.target === this.$el) {
        let type = 'mask'
        this.close(type)
      }
    },
    updateZindex () {
      if (this.modalZindex < UtilTools.getLastZIndex()) {
        this.modalZindex = UtilTools.nextZIndex()
      }
    },
    closeEvent (evnt) {
      let type = 'close'
      this.$emit(type, { type, $modal: this }, evnt)
      this.close(type)
    },
    confirmEvent (evnt) {
      let type = 'confirm'
      this.$emit(type, { type, $modal: this }, evnt)
      this.close(type)
    },
    cancelEvent (evnt) {
      let type = 'cancel'
      this.$emit(type, { type, $modal: this }, evnt)
      this.close(type)
    },
    open () {
      let { $listeners, events = {}, duration, visible, isMsg, remember } = this
      if (!visible) {
        let params = { type: 'show', $modal: this }
        if (!remember) {
          this.recalculate()
        }
        this.visible = true
        this.contentVisible = false
        this.updateZindex()
        this.$emit('activated', params)
        setTimeout(() => {
          this.contentVisible = true
          this.$nextTick(() => {
            if (!events.show) {
              this.$emit('input', true)
              this.$emit('show', params)
            }
            if (!$listeners.show && events.show) {
              events.show.call(this, params)
            }
          })
        }, 10)
        if (isMsg) {
          this.addMsgQueue()
          setTimeout(this.close, XEUtils.toNumber(duration))
        } else {
          this.$nextTick(() => {
            let { inited, marginSize, fullscreen } = this
            if (!remember || !inited) {
              let modalBoxElem = this.getBox()
              let clientVisibleWidth = document.documentElement.clientWidth || document.body.clientWidth
              let clientVisibleHeight = document.documentElement.clientHeight || document.body.clientHeight
              modalBoxElem.style.top = ''
              modalBoxElem.style.left = `${clientVisibleWidth / 2 - modalBoxElem.offsetWidth / 2}px`
              if (modalBoxElem.offsetHeight + modalBoxElem.offsetTop + marginSize > clientVisibleHeight) {
                modalBoxElem.style.top = `${marginSize}px`
              }
            }
            if (!inited) {
              this.inited = true
              if (this.hasPosStorage()) {
                this.restorePosStorage()
              } else if (fullscreen) {
                this.$nextTick(this.maximize)
              }
            }
          })
        }
      }
    },
    addMsgQueue () {
      if (MsgQueue.indexOf(this) === -1) {
        MsgQueue.push(this)
      }
      this.updateStyle()
    },
    removeMsgQueue () {
      if (MsgQueue.indexOf(this) > -1) {
        XEUtils.remove(MsgQueue, comp => comp === this)
      }
      this.updateStyle()
    },
    updateStyle () {
      this.$nextTick(() => {
        let offsetTop = 0
        MsgQueue.forEach(comp => {
          offsetTop += XEUtils.toNumber(comp.top)
          comp.modalTop = offsetTop
          offsetTop += comp.$refs.modalBox.clientHeight
        })
      })
    },
    close (type) {
      let { events = {}, visible, isMsg } = this
      let params = { type, $modal: this }
      if (visible) {
        if (isMsg) {
          this.removeMsgQueue()
        }
        this.contentVisible = false
        if (events.hide) {
          events.hide.call(this, params)
        } else {
          this.$emit('hide', params)
        }
        setTimeout(() => {
          this.visible = false
          if (!events.hide) {
            this.$emit('input', false)
          }
          this.$emit('deactivated', params)
        }, 200)
      }
    },
    handleGlobalKeydownEvent (evnt) {
      if (evnt.keyCode === 27) {
        this.close()
      }
    },
    getBox () {
      return this.$refs.modalBox
    },
    maximize () {
      return this.$nextTick().then(() => {
        if (!this.zoomLocat) {
          let marginSize = this.marginSize
          let modalBoxElem = this.getBox()
          let { visibleHeight, visibleWidth } = DomTools.getDomNode()
          this.zoomLocat = {
            top: modalBoxElem.offsetTop,
            left: modalBoxElem.offsetLeft,
            width: modalBoxElem.offsetWidth + (modalBoxElem.style.width ? 0 : 1),
            height: modalBoxElem.offsetHeight + (modalBoxElem.style.height ? 0 : 1)
          }
          Object.assign(modalBoxElem.style, {
            top: `${marginSize}px`,
            left: `${marginSize}px`,
            width: `${visibleWidth - marginSize * 2}px`,
            height: `${visibleHeight - marginSize * 2}px`
          })
          this.savePosStorage()
        }
      })
    },
    revert () {
      return this.$nextTick().then(() => {
        let zoomLocat = this.zoomLocat
        if (zoomLocat) {
          let modalBoxElem = this.getBox()
          this.zoomLocat = null
          Object.assign(modalBoxElem.style, {
            top: `${zoomLocat.top}px`,
            left: `${zoomLocat.left}px`,
            width: `${zoomLocat.width}px`,
            height: `${zoomLocat.height}px`
          })
          this.savePosStorage()
        }
      })
    },
    toggleZoomEvent (evnt) {
      let { $listeners, zoomLocat, events = {} } = this
      let params = { type: zoomLocat ? 'min' : 'max', $modal: this }
      return this[zoomLocat ? 'revert' : 'maximize']().then(() => {
        if ($listeners.zoom) {
          this.$emit('zoom', params, evnt)
        } else if (events.zoom) {
          events.zoom.call(this, params, evnt)
        }
      })
    },
    mousedownEvent (evnt) {
      let { remember, storage, marginSize, zoomLocat } = this
      let modalBoxElem = this.getBox()
      if (!zoomLocat && evnt.button === 0 && !DomTools.getEventTargetNode(evnt, modalBoxElem, 'trigger--btn').flag) {
        evnt.preventDefault()
        let demMousemove = document.onmousemove
        let demMouseup = document.onmouseup
        let disX = evnt.clientX - modalBoxElem.offsetLeft
        let disY = evnt.clientY - modalBoxElem.offsetTop
        let { visibleHeight, visibleWidth } = DomTools.getDomNode()
        document.onmousemove = evnt => {
          evnt.preventDefault()
          let offsetWidth = modalBoxElem.offsetWidth
          let offsetHeight = modalBoxElem.offsetHeight
          let minX = marginSize
          let maxX = visibleWidth - offsetWidth - marginSize
          let minY = marginSize
          let maxY = visibleHeight - offsetHeight - marginSize
          let left = evnt.clientX - disX
          let top = evnt.clientY - disY
          if (left > maxX) {
            left = maxX
          }
          if (left < minX) {
            left = minX
          }
          if (top > maxY) {
            top = maxY
          }
          if (top < minY) {
            top = minY
          }
          modalBoxElem.style.left = `${left}px`
          modalBoxElem.style.top = `${top}px`
          modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '') + ` is--drag`
        }
        document.onmouseup = evnt => {
          document.onmousemove = demMousemove
          document.onmouseup = demMouseup
          this.$nextTick(() => {
            modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '')
            if (remember && storage) {
              this.savePosStorage()
            }
          })
        }
      }
    },
    dragEvent (evnt) {
      evnt.preventDefault()
      const { $listeners, marginSize, events = {}, remember, storage } = this
      const { visibleHeight, visibleWidth } = DomTools.getDomNode()
      const type = evnt.target.dataset.type
      const minWidth = XEUtils.toNumber(this.minWidth)
      const minHeight = XEUtils.toNumber(this.minHeight)
      const maxWidth = visibleWidth - 20
      const maxHeight = visibleHeight - 20
      const modalBoxElem = this.getBox()
      const demMousemove = document.onmousemove
      const demMouseup = document.onmouseup
      const clientWidth = modalBoxElem.clientWidth
      const clientHeight = modalBoxElem.clientHeight
      const disX = evnt.clientX
      const disY = evnt.clientY
      const offsetTop = modalBoxElem.offsetTop
      const offsetLeft = modalBoxElem.offsetLeft
      const params = { type: 'resize', $modal: this }
      document.onmousemove = evnt => {
        evnt.preventDefault()
        let dragLeft
        let dragTop
        let width
        let height
        switch (type) {
          case 'wl':
            dragLeft = disX - evnt.clientX
            width = dragLeft + clientWidth
            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                modalBoxElem.style.width = `${width < maxWidth ? width : maxWidth}px`
                modalBoxElem.style.left = `${offsetLeft - dragLeft}px`
              }
            }
            break
          case 'swst':
            dragLeft = disX - evnt.clientX
            dragTop = disY - evnt.clientY
            width = dragLeft + clientWidth
            height = dragTop + clientHeight
            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                modalBoxElem.style.width = `${width < maxWidth ? width : maxWidth}px`
                modalBoxElem.style.left = `${offsetLeft - dragLeft}px`
              }
            }
            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                modalBoxElem.style.height = `${height < maxHeight ? height : maxHeight}px`
                modalBoxElem.style.top = `${offsetTop - dragTop}px`
              }
            }
            break
          case 'swlb':
            dragLeft = disX - evnt.clientX
            dragTop = evnt.clientY - disY
            width = dragLeft + clientWidth
            height = dragTop + clientHeight
            if (offsetLeft - dragLeft > marginSize) {
              if (width > minWidth) {
                modalBoxElem.style.width = `${width < maxWidth ? width : maxWidth}px`
                modalBoxElem.style.left = `${offsetLeft - dragLeft}px`
              }
            }
            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                modalBoxElem.style.height = `${height < maxHeight ? height : maxHeight}px`
              }
            }
            break
          case 'st':
            dragTop = disY - evnt.clientY
            height = clientHeight + dragTop
            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                modalBoxElem.style.height = `${height < maxHeight ? height : maxHeight}px`
                modalBoxElem.style.top = `${offsetTop - dragTop}px`
              }
            }
            break
          case 'wr':
            dragLeft = evnt.clientX - disX
            width = dragLeft + clientWidth
            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                modalBoxElem.style.width = `${width < maxWidth ? width : maxWidth}px`
              }
            }
            break
          case 'sest':
            dragLeft = evnt.clientX - disX
            dragTop = disY - evnt.clientY
            width = dragLeft + clientWidth
            height = dragTop + clientHeight
            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                modalBoxElem.style.width = `${width < maxWidth ? width : maxWidth}px`
              }
            }
            if (offsetTop - dragTop > marginSize) {
              if (height > minHeight) {
                modalBoxElem.style.height = `${height < maxHeight ? height : maxHeight}px`
                modalBoxElem.style.top = `${offsetTop - dragTop}px`
              }
            }
            break
          case 'selb':
            dragLeft = evnt.clientX - disX
            dragTop = evnt.clientY - disY
            width = dragLeft + clientWidth
            height = dragTop + clientHeight
            if (offsetLeft + width + marginSize < visibleWidth) {
              if (width > minWidth) {
                modalBoxElem.style.width = `${width < maxWidth ? width : maxWidth}px`
              }
            }
            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                modalBoxElem.style.height = `${height < maxHeight ? height : maxHeight}px`
              }
            }
            break
          case 'sb':
            dragTop = evnt.clientY - disY
            height = dragTop + clientHeight
            if (offsetTop + height + marginSize < visibleHeight) {
              if (height > minHeight) {
                modalBoxElem.style.height = `${height < maxHeight ? height : maxHeight}px`
              }
            }
            break
        }
        modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '') + ` is--drag`
        if (remember && storage) {
          this.savePosStorage()
        }
        if ($listeners.zoom) {
          this.$emit('zoom', params, evnt)
        } else if (events.zoom) {
          events.zoom.call(this, params, evnt)
        }
      }
      document.onmouseup = evnt => {
        this.zoomLocat = null
        document.onmousemove = demMousemove
        document.onmouseup = demMouseup
        setTimeout(() => {
          modalBoxElem.className = modalBoxElem.className.replace(/\s?is--drag/, '')
        }, 50)
      }
    },
    getStorageMap (key) {
      let version = GlobalConfig.version
      let rest = XEUtils.toStringJSON(localStorage.getItem(key))
      return rest && rest._v === version ? rest : { _v: version }
    },
    hasPosStorage () {
      const { id, remember, storage, storageKey } = this
      return !!(remember && storage && this.getStorageMap(storageKey)[id])
    },
    restorePosStorage () {
      const { id, remember, storage, storageKey } = this
      if (remember && storage) {
        let posStorage = this.getStorageMap(storageKey)[id]
        if (posStorage) {
          let modalBoxElem = this.getBox()
          let [left, top, width, height, zoomLeft, zoomTop, zoomWidth, zoomHeight] = posStorage.split(',')
          if (left) {
            modalBoxElem.style.left = `${left}px`
          }
          if (top) {
            modalBoxElem.style.top = `${top}px`
          }
          if (width) {
            modalBoxElem.style.width = `${width}px`
          }
          if (height) {
            modalBoxElem.style.height = `${height}px`
          }
          if (zoomLeft && zoomTop) {
            this.zoomLocat = {
              left: zoomLeft,
              top: zoomTop,
              width: zoomWidth,
              height: zoomHeight
            }
          }
        }
      }
    },
    savePosStorage () {
      const { id, remember, storage, storageKey, zoomLocat } = this
      if (remember && storage) {
        let modalBoxElem = this.getBox()
        let posStorageMap = this.getStorageMap(storageKey)
        posStorageMap[id] = [
          modalBoxElem.style.left,
          modalBoxElem.style.top,
          modalBoxElem.style.width,
          modalBoxElem.style.height
        ].concat(zoomLocat ? [
          zoomLocat.left,
          zoomLocat.top,
          zoomLocat.width,
          zoomLocat.height
        ] : []).map(val => val ? XEUtils.toNumber(val) : '').join(',')
        localStorage.setItem(storageKey, XEUtils.toJSONString(posStorageMap))
      }
    }
  }
}
