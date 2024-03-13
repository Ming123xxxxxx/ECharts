//初始化echarts实例对象 echarts.init(容器对象)
var myCharts = echarts.init(document.querySelector('.pie'))

//指定配置项和数据
var option = {
    tooltip: {
      rigger: 'item'
    },
    legend: {
      bottom: '5%',
      left: 'center',
      //设置小图标的宽高
      itemWidth:15,
      itemHeight:15,
      textStyle:{
        color:'#42ad9b'
      }
    },
    series: [
        {
          name: '视频数据',
          type: 'pie',
          //radius:设置饼形图的内圆半径和外圆半径
          radius: ['50%', '70%'],
          //通过center修改饼形图在容器中的位置
          center: ['50%', '45%'],
          //是否启用防止标签重叠策略
          avoidLabelOverlap: false,
          label: {
            //不显示标签文字
            show: false,
            //标签文字显示位置
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },

          labelLine: {
            //不显示连接线
            show: false
          },
          data: [
            { value: 1048, name: '播放量' },
            { value: 735, name: '评论数' },
            { value: 580, name: '收藏量' },
            { value: 484, name: '点赞量' },
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


