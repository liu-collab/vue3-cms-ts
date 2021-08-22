import { App } from "vue";
import formUtcTime from "@/utlis/formatUtcTime";
export default function registerProp(app: App) {
  //注册全局属性
  app.config.globalProperties.$filters = {
    //时间格式化
    formatTime(value: string) {
      return formUtcTime(value)
    }
  }
}
