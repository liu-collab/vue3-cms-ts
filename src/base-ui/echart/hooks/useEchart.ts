import * as echarts from 'echarts'

import chainaMapData from '../data/china.json'

echarts.registerMap('china', chainaMapData)


export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  //重新调整大小
  const updateResize = () => {
    echartInstance.resize()
  }


  window.addEventListener('resize', () => {
    echartInstance.resize()
  })


  //返回为对象,使用时按需使用
  //返回为数组,使用时都要使用
  return {
    echartInstance,
    setOptions,
    updateResize
  }
}
