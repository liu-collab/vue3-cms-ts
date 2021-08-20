import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption,
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElDatePicker,
  ElOption

]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
