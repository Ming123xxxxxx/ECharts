//初始化echarts实例对象 echarts.init(容器对象)
var myCharts = echarts.init(document.querySelector('.bar'))

//指定配置项和数据
var option = {
    title:{
        text:'各行就业形势图',
        textStyle:{
            color:'#bab8c4',
        }
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'shadow'
        }
    },
    xAxis:{
        //x轴类型
        type:'category',
        //x轴刻度标签
        data:['旅游','教培','游戏','医疗','金融','电商'],
        axisTick:{
            //刻度线和标签对齐
            alignWidthLabel:true
        },
        //修改刻度标签样式
        axisLabel:{
            color:'#bab8c4',
            fontSize:'12'
        },
        axisLine:{
            //是否显示坐标轴轴线
            show:false
        }
        
    },
    yAxis:{
        type:'value',
        axisLabel:{
            color:'#bab8c4',
        },
        //设置刻度线样式
        axisLine:{
            lineStyle: {
                color: 'green',
                width:2
            }
        },
        //y轴分割线样式
        splitLine:{
            lineStyle:{
                color:'purple'
            }
        }
    },
    //设置直角坐标系大小
    grid:{
        top:'40px',
        left:'3%',
        right:'3%',
        bottom:'4%',
        containLabel:true
    },
    color:[
        {
            //设置颜色类型为渐变色
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
                {
                offset: 0, color: 'blue' // 0% 处的颜色
                }, 
                {
                    offset: 1, color: '#4b80d0' // 100% 处的颜色
                }
            ],
            global: false // 缺省为 false
        }
    ],
    series:[
        {
            name:"直接访问",
            //修改柱状图柱子宽度
            barWidth:"35%",
            data: [120, 200, 150, 80, 70, 110],
            type: 'bar',
            itemStyle: {
                //修改柱子圆角
                barBorderRadius:[5]
            }
        }
    ]
}

//将配置项赋予对应的echarts对象
myCharts.setOption(option)

//让图表自适应屏幕大小变化
window.addEventListener('resize',function () {
    myCharts.resize();
})
