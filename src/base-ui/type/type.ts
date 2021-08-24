type IFormInType = 'input' | "password" | "select" | "datepicker"
interface OptionType {
  title: string,
  value: string
}
export interface IFormType {
  type: IFormInType
  label: string
  field: string
  title?: string
  placeholder?: string
  rules?: any[],
  options?: OptionType[],
  otherOptions?: any,
  isHidden?: boolean
}

export interface IForm {
  formItem: IFormType[],
  collLayout?: any,
  labelWidth?: string,
  itemStyle?: any
}
