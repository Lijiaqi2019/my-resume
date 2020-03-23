      // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'SPSS', max: 100},
            { name: 'MATLAB', max: 100},
            { name: 'R', max: 100},
            { name: 'SQL', max: 100},
            { name: 'MS office', max: 100},
            { name: 'Photoshop', max: 100}
        ]
    },
    series: [{
        name: '个人技能',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [90,70,75,70,90,80],
                name: '能力雷达'
            },
        ]
    }]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);