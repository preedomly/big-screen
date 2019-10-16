var option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#6a7985'
            }
        },
        textStyle: {
            color: '#fff',
            fontStyle: 'normal',
            fontFamily: 'Verdana'
        }
    },
    grid: {
        left: '1%',
        right: '1%',
        bottom: 0,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            interval:0,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: 'Verdana',
                    fontSize: 24
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },

            splitLine: {
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月']
        }
    ],
    yAxis: [
        {
            name:'件',
            nameTextStyle:{
                color:'#fff',
                fontSize:24
            },
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontFamily: 'Verdana',
                    fontSize: 24
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    width: 3,
                    color: ['#119cf2'],
                    opacity: 0.2
                }
            }
        }
    ],
    series: [
        {
            type: 'line',
            symbolSize: 6,
            smooth:'true',
            lineStyle: {
                color: '#80c269'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(128,194,105,.5)'
                    }, {
                        offset:1,
                        color: 'rgba(128,194,105,0)'
                    }], false)
                }
            },
            //圆点颜色
            itemStyle: {
                normal: {
                    color: "#fff",
                    borderColor: '#80c269',
                    borderWidth: 2,
                    width: 3
                }
            },
            data: [400, 660, 300, 900, 2200, 4000, 700, 760]
        }
    ]
};