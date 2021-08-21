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
  otherOptions?: any
}
interface ILayoutType {
  xs?: number,
  xm?: number,
  md?: number,
  lg?: number,
  xl?: number
}
export interface IForm {
  formItem: IFormType[],
  collLayout?: ILayoutType,
  labelWidth?: string,
  itemStyle?: any
}
