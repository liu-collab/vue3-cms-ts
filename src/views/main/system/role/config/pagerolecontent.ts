export const pageContentConfig = {
  title: '角色列表',
  tableData: [
    { prop: 'name', label: '角色名', minWidth: '120', slotName: 'name' },
    { prop: 'intro', label: '权限介绍', minWidth: '120', slotName: 'intro' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120',
      slotName: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotName: 'handle' }
  ],
  showIndecCloum: true
};
