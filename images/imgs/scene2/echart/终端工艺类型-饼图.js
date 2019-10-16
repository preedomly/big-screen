option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: [
        '#78bff6',
        '#57C586',
        '#EB5E55',
        '#ff9900',
        '#AF83EB',
        '#4e68d8',
        '#00acee'
    ],
    series: [{
        name: '姓名',
        type: 'pie',
        radius: '34%',
        center: ['50%', '50%'],
        data: [
            {
                value: 25,
                name: '高负荷地下渗滤系统'
            },
            {
                value: 25,
                name: 'PKA湿地'
            },
            {
                value: 10,
                name: '厌氧工艺'
            }, {
                value: 20,
                name: 'A/O'
            }, {
                value: 10,
                name: 'AAO'
            }, {
                value: 5,
                name: 'MBR'
            }, {
                value: 5,
                name: 'AAO+人工湿地'
            }],
        label: {
            normal: {
                formatter: '{b}：{c}\n{d}%',
                fontSize:26
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 40,
                lineStyle: {
                    width: 3
                }
            }
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};