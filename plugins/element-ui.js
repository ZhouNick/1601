import Vue from 'vue'
import Element from 'element-ui/lib/element-ui.common'
import locale from 'element-ui/lib/locale/lang/zh-CN'

Vue.prototype.$element = Element
export default () => {
  Vue.use(Element, { locale })
}