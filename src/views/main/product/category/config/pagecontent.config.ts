
const pageContentConfig = {
  tableData: [
    { prop: 'name', label: '类别名称', minWidth: '100', slotName: 'name' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '200',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '200',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handle' }
  ],
  showIndecCloum: true,
  title: '类别列表',
}

export { pageContentConfig }
