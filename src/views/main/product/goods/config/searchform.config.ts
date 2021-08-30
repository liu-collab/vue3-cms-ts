import { IForm } from "@/base-ui";
export const searchFormConfig: IForm = {
  formItem: [

    {
      type: 'input',
      field: 'name',
      label: '商品名称',
      title: '商品名称',
      placeholder: '请输入商品名称'
    },

    {
      type: 'input',
      field: 'oldPrice',
      label: '原价',
      placeholder: '请输入原来价格'
    },
    {
      type: 'input',
      field: 'newPrice',
      label: '现价',
      placeholder: '请输入现价'
    },
    {
      type: 'select',
      field: 'status',
      label: '状态',
      placeholder: '请输入状态',
      options: [
        {
          title: '下架',
          value: '1'
        },
        {
          title: '上架',
          value: '0'
        }
      ]
    },
    {
      type: 'datepicker',
      field: 'createAt',
      label: '选择时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '80px',
  itemStyle: {
    padding: '10px 30px'
  }
};


