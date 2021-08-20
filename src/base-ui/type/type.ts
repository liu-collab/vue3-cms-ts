type IFormInType = 'input' | "password" | "select" | "datepicker"
interface OptionType {
  title: string,
  value: string
}
export interface IFormType {
  type: IFormInType
  label: string
  title?: string
  placeholder?: string
  rules?: any[],
  options?: OptionType[],
  otherOptions?: any
}
