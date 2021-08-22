import { App } from 'vue'
import registerElement from './register-element'
import registerProp from './register-prop'
export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProp)
}
