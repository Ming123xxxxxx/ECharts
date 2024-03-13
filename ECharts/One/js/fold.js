//初始化echarts实例对象 echarts.init(容器对象)
var myFoldCharts = echarts.init(document.querySelector('.foldLine'))

var yearData = [
    {
        year:'2020',
        data: [
            [120, 132, 101, 134, 90, 230, 210],
            [220, 182, 191, 234, 290, 330, 310],
            [150, 232, 201, 154, 190, 330, 410]
        ] 
    },
    {
        year:'2021',
        data: [
            [100, 162, 201, 134, 90, 230, 210],
            [120, 282, 91, 234, 190, 330, 310],
            [50, 232, 81, 154, 90, 330, 410]
        ]
    }
]

//指定配置项和数据
var optionFold = {
    title: {
        text:'销量(单位/万)',
        textStyle:{
            color:'#bab8c4',
        }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['华为', 'Vivo', '小米'],
      textStyle:{
        color:'#4f7fd1',
        fontSize:10
      },
      top:'5px',
      right:'10px'
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      //显示边框
      show:true,
      //边框颜色
      borderColor:'#012f4a',
    },
    xAxis: {
      type: 'category',
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
      //去除轴内间距
      boundaryGap:false
    },
    yAxis: {
      type: 'value',
      axisLabel:{
        color:'#bab8c4'
      },
      axisTick:{
        //去除刻度线
        show:false
      },
      splitLine:{
        //去除分隔线
        show:false
      }
    },
    series: [
      {
        name: '华为',
        type: 'line',
        //是否平滑曲线显示
        smooth: true,
        //修改线条颜色
        lineStyle: {
            color:'red'
        },
        data:yearData[0].data[0]
      },
      {
        name: 'Vivo',
        type: 'line',
        smooth: true,
        lineStyle: {
            color:'yellow'
        },
        data:yearData[0].data[1]
      },
      {
        name: '小米',
        type: 'line',
        smooth: true,
        lineStyle: {
            color:'#50b9fe'
        },
        data:yearData[0].data[2]
      }
    ]
};

//将配置项赋予对应的echarts对象
myFoldCharts.setOption(optionFold)

//让图表自适应屏幕大小变化
window.addEventListener('resize',function () {
  myFoldCharts.resize();
})

const select = document.querySelector('.select')

select.addEventListener('click',function () {
    const obj = yearData[select.value];
    
    optionFold.series[0].data = obj.data[0];
    optionFold.series[1].data = obj.data[1];
    optionFold.series[2].data = obj.data[2];
    //重新渲染数据
    myFoldCharts.setOption(optionFold)
})
