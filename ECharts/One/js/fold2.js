//初始化echarts实例对象 echarts.init(容器对象)
var myCharts = echarts.init(document.querySelector('.fold2'))

//指定配置项和数据
var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['播放量', '点赞量'],
      textStyle:{
        color:'#4f7fd1',
        fontSize:12
      },
      top:'5px',
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        axisLabel:{
            color:'#bab8c4'
        },
        axisTick:{
        //去除刻度线
        show:false
        },
        axisLine:{
        //去除轴线
        show:false
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel:{
            color:'#bab8c4'
          },
        axisTick:{
        //去除刻度线
        show:false
        },
        axisLine:{
        //去除轴线
        show:false
        },
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        //修改填充区域样式
        areaStyle:{
            //渐变色
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(128, 255, 165)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(1, 191, 236)'
                    }
                ]
            )
        },
        //设置拐点
        symbol:'circle',
        //设置拐点大小
        symbolSize:8,
        //设置拐点颜色及其边框
        itemStyle: {
            color:'#50b9fe',
            borderColor:'rgba(1, 191, 236,.1)',
            borderWidth:12
        },
        //开始不显示拐点,等鼠标经过时显示
        showSymbol:false,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
            color:'#50b9fe',
            width:'3'
        },
        data: [120, 22, 151, 104, 50, 130, 70]
      },
      {
        name: '点赞量',
        type: 'line',
        smooth: true,
        areaStyle: {
            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'orange'
                    },
                    {
                        offset: 1,
                        color: 'rgb(195, 96, 45)'
                    }
                ]
            )
        },
        //设置拐点
        symbol:'circle',
        //设置拐点大小
        symbolSize:8,
        //设置拐点颜色及其边框
        itemStyle: {
            color:'#c3602d',
            borderColor:'rgba(195, 96, 45,.1)',
            borderWidth:12
        },
        //开始不显示拐点,等鼠标经过时显示
        showSymbol:false,
        emphasis: {
          focus: 'series'
        },
        lineStyle: {
            color:'#c3602d',
            width:'3'
        },
        data: [100, 182, 101, 234, 90, 100, 30]
      },
    ]
}

//将配置项赋予对应的echarts对象
myCharts.setOption(option)

//让图表自适应屏幕大小变化
window.addEventListener('resize',function () {
    myCharts.resize();
})


