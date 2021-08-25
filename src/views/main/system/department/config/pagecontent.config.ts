
const pageContentConfig = {
  tableData: [
    { prop: 'name', label: '部门名称', minWidth: '100', slotName: 'name' },
    {
      prop: 'leader',
      label: '部门领导',
      minWidth: '100',
      slotName: 'realname'
    },
    {
      prop: '"parentId"',
      label: '上级部门',
      minWidth: '100',
      slotName: 'parentId'
    },

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
  title: '部门列表',
}

export { pageContentConfig }
