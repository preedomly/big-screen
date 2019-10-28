option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['10%', '12%'],
            color: ['#0196F3', '#db880b', '#ba58bc', '#F51A1A'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            tooltip: {
                show: false
            },

            data: [
                {value: 60, name: ''},
                {value: 100, name: ''},
                {value: 50, name: ''},
                {value: 30, name: ''}
            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['12%', '16%'],
            color: ['#42b6fe ', '#ff9900', '#df73e1', '#f86262'],
            labelLine: {
                normal: {
                    length: 12,
                    length2: 12,
                    lineStyle: {
                        width: 3
                    }
                }
            },
            label: {
                normal: {
                    formatter: '{b}：{c}\n{d}%',
                    textStyle: {
                        fontSize: 14
                    }
                }
            },
            data: [
                {value: 60, name: '咨询'},
                {value: 100, name: '服务'},
                {value: 50, name: '投诉'},
                {value: 30, name: '其他'}
            ]
        }
    ]
};