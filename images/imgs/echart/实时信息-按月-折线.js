var myChart = echarts.init(document.getElementById('main'));
var option = {
    legend: {
        textStyle: {
            fontSize: 24,
            color: '#fff'
        },
        data: ['污水收集总量', '工业污水收集总量', '生活污水收集处理总量']
    },
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
        top:'24%',
        bottom: 0,
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            interval: 0,
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
            data: ['9/17', '9/18', '9/19', '9/20', '9/21', '9/22', '9/23', '9/24']
        }
    ],
    yAxis: [
        {
            min: 0,
            max: 400000,
            interval: 100000,
            name: '万m³',
            nameTextStyle: {
                color: '#fff',
                fontSize: 20
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
            name: '污水收集总量',
            type: 'line',
            symbolSize: 10,
            smooth: 'true',
            symbol: 'circle',
            lineStyle: {
                color: '#0090ff'
            },
            //圆点颜色
            itemStyle: {
                normal: {
                    color: "#0090ff",
                    borderColor: '#0090ff',
                    borderWidth: 3,
                    width: 3
                }
            },
            data: ['30000', '200000', '300000', '100000', '62000', '100000', '17000', '16600']
        },
        {
            name: '工业污水收集总量',
            type: 'line',
            symbolSize: 10,
            smooth: 'true',
            symbol: 'circle',
            lineStyle: {
                color: '#22ac38'
            },
            //圆点颜色
            itemStyle: {
                normal: {
                    color: "#22ac38",
                    borderColor: '#22ac38',
                    borderWidth: 3,
                    width: 3
                }
            },
            data: ['10000', '40000', '162000', '30000', '200000', '160000', '217000', '63000']
        },
        {
            name: '生活污水收集处理总量',
            type: 'line',
            symbolSize: 10,
            smooth: 'true',
            symbol: 'circle',
            lineStyle: {
                color: '#feb64d'
            },
            //圆点颜色
            itemStyle: {
                normal: {
                    color: "#feb64d",
                    borderColor: '#feb64d',
                    borderWidth: 3,
                    width: 3
                }
            },
            data: ['200000', '300000', '202000', '130000', '260000', '200000', '307000', '135600']
        }
    ]
};
myChart.setOption(option);