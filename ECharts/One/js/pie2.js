//初始化echarts实例对象 echarts.init(容器对象)
var myCharts = echarts.init(document.querySelector('.pie2'))

//指定配置项和数据
var option = {
    //设置饼颜色
    color:['#ce9178','orange','yellow','green','#44c38b','blue','purple','white'],
    tooltip: {
      rigger: 'item'
    },
    series: [
        {
            name: '地区分布',
            type: 'pie',
            radius: [20, 100],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: '广州' },
              { value: 38, name: '深圳' },
              { value: 32, name: '武汉' },
              { value: 30, name: '北京' },
              { value: 28, name: '天津' },
              { value: 26, name: '南昌' },
              { value: 22, name: '上海' },
              { value: 18, name: '成都' }
            ]
        }
      ]
}

//将配置项赋予对应的echarts对象
myCharts.setOption(option)

//让图表自适应屏幕大小变化
window.addEventListener('resize',function () {
    myCharts.resize();
})


