//初始化echarts实例对象 echarts.init(容器对象)
var myCharts = echarts.init(document.querySelector('.bar2'))

var itemColor = ['#4888ff','#ff8282','#66c5f4','#fbb459','#9b76ff','green']
//指定配置项和数据
var option = {
    title:{
        text:'技能掌握程度',
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
        type:'value',
        //不显示x轴的相关信息
        show:false,
    },
    yAxis:[
        {
            type:'category',
            //反转坐标轴
            inverse:true,
            data:['Java','JavaScript','Vue','Spring','SpringBoot','SpringCloud'],
            axisLabel:{
                color:'#bab8c4'
            },
            axisLine:{
                //不显示Y轴线条
                show:false
            },
            axisTick:{
                //不显示刻度
                show:false
            }
        },
        {
            type:'category',
            inverse:true,
            data:['530','713','264','543','674','321'],
            axisLine:{
                //不显示Y轴线条
                show:false
            },
            axisTick:{
                //不显示刻度
                show:false
            },
            axisLabel:{
                color:'#bab8c4'
            },

        }
    ],
    //设置直角坐标系大小
    grid:{
        top:'15%',
        left:'22%',
        bottom:'10%',
        // containLabel:true
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
            name:"数值",
            //修改柱状图柱子宽度
            barWidth:"35%",
            //修改柱之间的距离
            barCategoryGap:50,
            data: [50,80,20,40,70,30],
            type: 'bar',
            yAxisIndex:0,
            //修改柱子样式
            itemStyle: {
                //修改柱子圆角
                barBorderRadius:20,
                //给不同的柱子设置不同的颜色
                color:function (params) {
                    var num = itemColor.length
                    return itemColor[params.dataIndex % num]
                }
            },
            //设置柱子内的百分比显示数据
            label:{
                normal:{
                    show:true,
                    //图形内显示
                    position:'inside',
                    //文字的显示格式
                    formatter:"{c}%"
                }
            }
        },
        {
            name:"边框",
            //修改柱状图柱子宽度
            barWidth:"45%",
            data: [100,100,100,100,100,100],
            type: 'bar',
            yAxisIndex:1,
            itemStyle: {
                //修改柱子圆角
                color:'none',
                borderColor:'#50b9fe',
                borderWidth:3,
                barBorderRadius:20
            },
            //设置柱子外的显示数据
            label:{
                normal:{
                    show:true,
                    //图形内显示
                    position:'outside',
                    //文字的显示格式
                    formatter:"{c}%"
                }
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
