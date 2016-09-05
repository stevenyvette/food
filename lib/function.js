function dataFormatter(obj) {
    var pList = ["松江区","闸北区","黄浦区","长宁区","闵行区","静安区","虹口区","宝山区","浦东新区","崇明县区","徐汇区","金山区","嘉定区","杨浦区","普陀区"];
    var temp;
    for (var year = 2002; year <= 2007; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}


function line_1(){
	var line_1 = echarts.init(document.getElementById("line-1"),'dark');
	line_1.showLoading();
	var dataMap = {};
	
	dataMap.dataretailer = dataFormatter({
	    //max : 60000,
	    2002:[2,9,9,6,16,0,2,29,19,0,17,15,9,13,26],
	    2003:[2,4,8,1,4,0,1,11,4,0,5,4,3,4,14],
	    2004:[3,2,5,2,2,0,1,10,2,0,5,5,4,2,11],
	    2005:[7,15,9,6,23,1,5,31,22,0,22,20,13,11,27],
	    2006:[5,13,9,5,18,0,1,27,18,0,19,19,10,11,23],
	    2007:[4,14,7,5,16,0,2,28,18,0,19,12,8,9,24]
	});
	
	dataMap.datacatering = dataFormatter({
	    //max : 4000,
	    2002:[11,18,11,7,32,10,15,24,69,0,44,12,11,12,34],
	    2003:[4,7,4,4,13,2,7,6,23,0,11,4,4,5,11],
	    2004:[2,3,2,2,10,1,5,9,18,0,9,6,1,3,11],
	    2005:[12,20,18,9,37,8,20,31,88,0,47,12,13,12,53],
	    2006:[8,17,12,9,35,10,11,24,65,0,43,10,9,8,40],
	    2007:[10,19,8,7,24,9,8,19,49,0,33,7,13,7,27]
	});
	
	dataMap.datamanufacturer = dataFormatter({
	    //max : 26600,
	    2002:[4,1,3,0,4,0,1,17,4,0,5,11,2,0,4],
	    2003:[2,0,1,0,1,0,1,4,2,0,1,2,1,0,1],
	    2004:[0,0,0,0,1,0,1,2,1,0,1,1,1,0,0],
	    2005:[6,2,5,0,6,0,1,26,6,0,6,13,4,0,4],
	    2006:[6,1,4,0,4,0,1,15,6,0,5,11,2,0,3],
	    2007:[3,1,3,0,1,0,1,10,5,0,3,7,3,0,3]
	});
	
	dataMap.datawholesaler = dataFormatter({
	    //max : 25000,
	    2002:[1,0,1,0,5,1,0,3,2,0,2,1,1,2,4],
	    2003:[0,0,1,0,1,1,0,3,1,0,1,0,0,0,1],
	    2004:[0,0,1,0,0,0,0,1,1,0,0,0,0,0,1],
	    2005:[1,0,2,0,10,2,0,5,1,0,2,1,0,2,3],
	    2006:[1,0,2,0,6,1,0,2,3,0,2,1,1,2,4],
	    2007:[1,0,1,0,6,2,0,4,1,0,1,0,2,1,3]
	});

	dataMap.datafarmer = dataFormatter({
	    //max : 26600,
	    2002:[0,0,0,0,0,0,0,2,2,0,1,0,1,0,0],
	    2003:[0,0,0,0,0,0,0,1,1,0,0,0,1,0,0],
	    2004:[0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
	    2005:[2,0,0,0,0,0,0,3,1,0,1,1,1,0,0],
	    2006:[1,0,0,0,0,0,0,2,1,0,1,1,1,0,0],
	    2007:[0,0,0,0,0,0,0,2,1,0,1,1,0,0,0]
	});
	
	dataMap.dataunknown = dataFormatter({
	    //max : 3200,
	    2002:[93,607,99,77,158,49,74,101,248,0,93,45,118,81,125],
	    2003:[27,205,36,20,55,24,26,30,68,0,23,15,35,25,26],
	    2004:[34,142,33,17,64,14,21,29,60,0,23,7,26,18,22],
	    2005:[137,725,131,84,297,54,85,167,356,0,126,68,155,101,150],
	    2006:[118,585,111,66,218,43,70,142,271,0,97,70,112,84,112],
	    2007:[81,345,82,57,168,32,49,99,227,0,70,56,86,60,79]
	});
	
	
	option = {
	    baseOption: {
	        timeline: {
	            // y: 0,
	            axisType: 'category',
	            // realtime: false,
	            // loop: false,
	            autoPlay: true,
	            // currentIndex: 2,
	            playInterval: 1000,
	            // controlStyle: {
	            //     position: 'left'
	            // },
	            data: [
	                '2002-01-01','2003-01-01','2004-01-01',
	                {
	                    value: '2005-01-01',
	                    tooltip: {
	                        formatter: '{b} wholesaler达到一个高度'
	                    },
	                    symbol: 'diamond',
	                    symbolSize: 16
	                },
	                '2006-01-01', '2007-01-01'
	            ],
	            label: {
	                formatter : function(s) {
	                    return (new Date(s)).getFullYear();
	                }
	            }
	        },
	        title: {
	            subtext: '数据来自上海食药监局'
	        },
	        tooltip: {},
	        legend: {
	            x: 'right',
	            data: ['retailer', 'catering', 'manufacturer', 'wholesaler', 'farmer', 'unknown'],
	            selected: {
	                'unknown': false
	            }
	        },
	        calculable : true,
	        grid: {
	            top: 80,
	            bottom: 100
	        },
	        xAxis: [
	            {
	                'type':'category',
	                'axisLabel':{'interval':0},
	                'data':[
	                    "松江区","\n闸北区","黄浦区","\n长宁区","闵行区","\n静安区","虹口区","\n宝山区","浦东新区","\n崇明县区","徐汇区","\n金山区","嘉定区","\n杨浦区","普陀区"],
	                splitLine: {show: false}
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value',
	                name: '企业数量'
	            }
	        ],
	        series: [
	            {name: 'retailer', type: 'bar'},
	            {name: 'catering', type: 'bar'},
	            {name: 'manufacturer', type: 'bar'},
	            {name: 'wholesaler', type: 'bar'},
	            {name: 'farmer', type: 'bar'},
	            {name: 'unknown', type: 'bar'},
	            {
	                name: '企业占比',
	                type: 'pie',
	                center: ['75%', '25%'],
	                radius: '28%'
	            }
	        ]
	    },
	    options: [
	        {
	            title: {text: '3月上海市食品溯源数据'},
	            series: [
	                {data: dataMap.dataretailer['2002']},
	                {data: dataMap.datacatering['2002']},
	                {data: dataMap.datamanufacturer['2002']},
	                {data: dataMap.datawholesaler['2002']},
	                {data: dataMap.datafarmer['2002']},
	                {data: dataMap.dataunknown['2002']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2002sum']},
	                    {name: 'catering', value: dataMap.datacatering['2002sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2002sum']},
	                    {name: 'farmer', value: dataMap.datafarmer['2002sum']},
	                    {name: 'wholesaler', value: dataMap.datawholesaler['2002sum']},
	                    {name: 'unknown', value: dataMap.dataunknown['2002sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '4月上海市食品溯源数据'},
	            series : [
	                {data: dataMap.dataretailer['2003']},
	                {data: dataMap.datacatering['2003']},
	                {data: dataMap.datamanufacturer['2003']},
	                {data: dataMap.datawholesaler['2003']},
	                {data: dataMap.datafarmer['2003']},
	                {data: dataMap.dataunknown['2003']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2003sum']},
	                    {name: 'catering', value: dataMap.datacatering['2003sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2003sum']},
	                    {name: 'farmer', value: dataMap.datafarmer['2003sum']},
	                    {name: 'wholesaler', value: dataMap.datawholesaler['2003sum']},
	                    {name: 'unknown', value: dataMap.dataunknown['2003sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '5月上海市食品溯源数据'},
	            series : [
	                {data: dataMap.dataretailer['2004']},
	                {data: dataMap.datacatering['2004']},
	                {data: dataMap.datamanufacturer['2004']},
	                {data: dataMap.datawholesaler['2004']},
	                {data: dataMap.datafarmer['2004']},
	                {data: dataMap.dataunknown['2004']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2004sum']},
	                    {name: 'catering', value: dataMap.datacatering['2004sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2004sum']},
	                    {name: 'farmer', value: dataMap.datafarmer['2004sum']},
	                    {name: 'wholesaler', value: dataMap.datawholesaler['2004sum']},
	                    {name: 'unknown', value: dataMap.dataunknown['2004sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '6月上海市食品溯源数据'},
	            series : [
	                {data: dataMap.dataretailer['2005']},
	                {data: dataMap.datacatering['2005']},
	                {data: dataMap.datamanufacturer['2005']},
	                {data: dataMap.datawholesaler['2005']},
	                {data: dataMap.datafarmer['2005']},
	                {data: dataMap.dataunknown['2005']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2005sum']},
	                    {name: 'catering', value: dataMap.datacatering['2005sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2005sum']},
	                    {name: 'farmer', value: dataMap.datafarmer['2005sum']},
	                    {name: 'wholesaler', value: dataMap.datawholesaler['2005sum']},
	                    {name: 'unknown', value: dataMap.dataunknown['2005sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '7月上海市食品溯源数据'},
	            series : [
	                {data: dataMap.dataretailer['2006']},
	                {data: dataMap.datacatering['2006']},
	                {data: dataMap.datamanufacturer['2006']},
	                {data: dataMap.datawholesaler['2006']},
	                {data: dataMap.datafarmer['2006']},
	                {data: dataMap.dataunknown['2006']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2006sum']},
	                    {name: 'catering', value: dataMap.datacatering['2006sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2006sum']},
	                    {name: 'farmer', value: dataMap.datafarmer['2006sum']},
	                    {name: 'wholesaler', value: dataMap.datawholesaler['2006sum']},
	                    {name: 'unknown', value: dataMap.dataunknown['2006sum']},
	                ]}
	            ]
	        },
	        {
	            title : {text: '8月上海市食品溯源数据'},
	            series : [
	                {data: dataMap.dataretailer['2007']},
	                {data: dataMap.datacatering['2007']},
	                {data: dataMap.datamanufacturer['2007']},
	                {data: dataMap.datawholesaler['2007']},
	                {data: dataMap.datafarmer['2007']},
	                {data: dataMap.dataunknown['2007']},
                	{data: [
                    {name: 'retailer', value: dataMap.dataretailer['2007sum']},
                    {name: 'catering', value: dataMap.datacatering['2007sum']},
                    {name: 'manufacturer', value: dataMap.datamanufacturer['2007sum']},
	                    {name: 'farmer', value: dataMap.datafarmer['2007sum']},
	                    {name: 'wholesaler', value: dataMap.datawholesaler['2007sum']},
	                    {name: 'unknown', value: dataMap.dataunknown['2007sum']},
                ]}
            ]
        },
/*	        {
	            title : {text: '2008上海市食品溯源数据'},
	            series : [
	                {data: dataMap.datawholesaler['2008']},
	                {data: dataMap.dataunknown['2008']},
	                {data: dataMap.datafarmer['2008']},
	                {data: dataMap.dataretailer['2008']},
	                {data: dataMap.datacatering['2008']},
	                {data: dataMap.datamanufacturer['2008']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2008sum']},
	                    {name: 'catering', value: dataMap.datacatering['2008sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2008sum']}
	                ]}
	            ]
	        },
	        {
	            title : {text: '2009上海市食品溯源数据'},
	            series : [
	                {data: dataMap.datawholesaler['2009']},
	                {data: dataMap.dataunknown['2009']},
	                {data: dataMap.datafarmer['2009']},
	                {data: dataMap.dataretailer['2009']},
	                {data: dataMap.datacatering['2009']},
	                {data: dataMap.datamanufacturer['2009']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2009sum']},
	                    {name: 'catering', value: dataMap.datacatering['2009sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2009sum']}
	                ]}
	            ]
	        },
	        {
	            title : {text: '2010上海市食品溯源数据'},
	            series : [
	                {data: dataMap.datawholesaler['2010']},
	                {data: dataMap.dataunknown['2010']},
	                {data: dataMap.datafarmer['2010']},
	                {data: dataMap.dataretailer['2010']},
	                {data: dataMap.datacatering['2010']},
	                {data: dataMap.datamanufacturer['2010']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2010sum']},
	                    {name: 'catering', value: dataMap.datacatering['2010sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2010sum']}
	                ]}
	            ]
	        },
	        {
	            title : {text: '2011上海市食品溯源数据'},
	            series : [
	                {data: dataMap.datawholesaler['2011']},
	                {data: dataMap.dataunknown['2011']},
	                {data: dataMap.datafarmer['2011']},
	                {data: dataMap.dataretailer['2011']},
	                {data: dataMap.datacatering['2011']},
	                {data: dataMap.datamanufacturer['2011']},
	                {data: [
	                    {name: 'retailer', value: dataMap.dataretailer['2011sum']},
	                    {name: 'catering', value: dataMap.datacatering['2011sum']},
	                    {name: 'manufacturer', value: dataMap.datamanufacturer['2011sum']}
	                ]}
	            ]
	        }*/
	    ]
	};
	line_1.hideLoading();
	line_1.setOption(option);
	window.addEventListener("resize", function () {
        line_1.resize(); 
    });
}

//连线图
function map_2(){
	var map_2 = echarts.init(document.getElementById("map-2"),'dark');
	map_2.showLoading();
	$.get('data/map-2-demo.json', function(content) {
		var geoCoordMap = {};
		var Data = [];
		for (var i=0;i<content.length;i++){
			var tmp=[];
			for(var key in content[i]){
				geoCoordMap[key] = content[i][key];
				tmp.push(key);
			}
			Data.push([{'name':tmp[0]},{'name':tmp[1],value:1}]);
		};
		var QMData = [
		    [{name:'上海清美绿色食品有限公司'}, {name:'龙临55(伍缘折扣超市)',value:95}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'罗城56(伍缘折扣超市)',value:90}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'鲁班店（永辉超市）',value:80}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'菊园乐购',value:70}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'沃尔玛华东百货有限公司上海浦江分店',value:60}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'金高大卖场338(农工商)',value:50}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'锦江麦德龙现购自运有限公司浦东商场',value:40}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'鲁汇191(农工商)',value:30}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'上海联家超市有限公司荣乐路店',value:20}],
		    [{name:'上海清美绿色食品有限公司'}, {name:'丹徒188(伍缘折扣超市)',value:10}]
		];

		var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
		var convertData = function (data) {
	        var res = [];
	        for (var i = 0; i < data.length; i++) {
	            var dataItem = data[i];
	            var fromCoord = geoCoordMap[dataItem[0].name];
	            var toCoord = geoCoordMap[dataItem[1].name];
	            //console.log([fromCoord,toCoord]);
	            if (fromCoord && toCoord) {
	                res.push({
	                    fromName: dataItem[0].name,
	                    toName: dataItem[1].name,
	                    coords: [fromCoord,toCoord]
	                });
	            }
	        }
	        return res;
	    };
		var color = ['#46bee9','#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['ALL',Data]].forEach(function (item, i) {
		    if(i!=0){
	            var data1 = item[1].map(function (dataItem) {
	                    return {
	                        name: dataItem[1].name,
	                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	                    };
	                });
	            data1.push({name:item[0],value:geoCoordMap[item[0]].concat([100])})
	            series.push({
	                name: item[0] + ' Top10',
	                type: 'lines',
	                zlevel: 1,
	                effect: {
	                    show: true,
	                    period: 6,
	                    trailLength: 0.7,
	                    color: '#fff',
	                    symbolSize: 3
	                },
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 0,
	                        curveness: 0.2
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0] + ' Top10',
	                type: 'lines',
	                zlevel: 2,
	                effect: {
	                    show: true,
	                    period: 6,
	                    trailLength: 0,
	                    symbol: planePath,
	                    symbolSize: 15
	                },
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 1,
	                        opacity: 0.4,
	                        curveness: 0.2
	                    },
	                    emphasis:{
	                        width:2,
	                        color:color[i+1]
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0] + ' Top10',
	                type: 'effectScatter',
	                coordinateSystem: 'geo',
	                zlevel: 2,
	                rippleEffect: {
	                    brushType: 'stroke'
	                },
	                label: {
	                    normal: {
	                        show: true,
	                        position: 'right',
	                        formatter: '{b}'
	                    }
	                },
	                symbolSize: function (val) {
	                    return val[2] / 8;
	                },
	                itemStyle: {
	                    normal: {
	                        color: color[i]
	                    }
	                },
	                data: data1,
	            });}
	        else{
	            var data1=item[1].map(function (dataItem) {
	                    //console.log(geoCoordMap[dataItem[1].name]);
	                    //console.log(dataItem[1].name);
	                    //console.log(dataItem[1]);
	                    return {
	                        name: dataItem[1].name,
	                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
	                    };
	                });
	            var data2=item[1].map(function (dataItem) {
	                if(dataItem[0].value){
	                    return {
	                        name: dataItem[0].name,
	                        value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
	                    };
	                }
	                else{
	                    return {
	                        name: dataItem[0].name,
	                        value: geoCoordMap[dataItem[0].name].concat([10])
	                    };
	                }
	                });
	            var datax=data1.concat(data2);
	            series.push({
	                name: item[0],
	                type: 'lines',
	                zlevel: 1,
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 0,
	                        curveness: 0.2
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0],
	                type: 'lines',
	                zlevel: 2,
	                lineStyle: {
	                    normal: {
	                        color: color[i],
	                        width: 1,
	                        opacity: 0.4,
	                        curveness: 0.2
	                    },
	                    emphasis:{
	                        width:2,
	                        color:color[1]
	                    }
	                },
	                data: convertData(item[1])
	            },
	            {
	                name: item[0],
	                type: 'effectScatter',
	                coordinateSystem: 'geo',
	                zlevel: 2,
	                rippleEffect: {
	                    brushType: 'stroke'
	                },
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'right',
	                        formatter: '{b}'
	                    },
	                    emphasis: {
	                        show: false,
	                        position: 'right',
	                        formatter: '{b}'
	                    }
	                },
	                symbolSize: function (val) {
	                    return val[2] / 8;
	                },
	                itemStyle: {
	                    normal: {
	                        color: color[i]
	                    }
	                },
	                data: datax,
	            });
	        }
	    });
		
		map_2_option = {
		    backgroundColor: '#404a59',
		    title : {
		        text: '食品企业贸易往来图',
		        subtext: '真实数据',
		        left: 'center',
		        textStyle : {
		            color: '#fff'
		        }
		    },
		    tooltip : {
		        trigger: 'item'
		    },
		    legend: {
		        orient: 'vertical',
		        top: 'bottom',
		        left: 'right',
		        data:['ALL'],
		        textStyle: {
		            color: '#fff'
		        },
		        selectedMode: 'single'
		    },
		    geo: {
		        map: 'china',
		        label: {
		            emphasis: {
		                show: false
		            }
		        },
		        roam: true,
		        itemStyle: {
		            normal: {
		                areaColor: '#323c48',
		                borderColor: '#404a59'
		            },
		            emphasis: {
		                areaColor: '#2a333d'
		            }
		        }
		    },
		    series: series
		};
		
		map_2.hideLoading();
		map_2.setOption(map_2_option);
		
		window.addEventListener("resize", function () {
	        map_2.resize(); 
	    });
	});
}

//热力图
function map_1(){
	var map_1 = echarts.init(document.getElementById("map-1"),'dark');
	$.get('data/map-1.json', function (data) {
	    var points = [].concat.apply([], data.map(function (track) {
	        return track.map(function (seg) {
	            return seg.coord.concat([1]);
	        });
	    }));
	    map_1.setOption(map_1_option = {
	    	title: {
	            text: '食品溯源项目',
	            subtext: '企业地理分布热力图',
	            top: 'top',
	            left: 'right'
	        },
	        animation: false,
	        bmap: {
            	center: [121.470999,31.226422],
	            zoom: 11,
	            roam: true,
	            mapStyle: {
	              'styleJson': [
	                {
	                  'featureType': 'water',
	                  'elementType': 'all',
	                  'stylers': {
	                    'color': '#031628'
	                  }
	                },
	                {
	                  'featureType': 'land',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#000102'
	                  }
	                },
	                {
	                  'featureType': 'highway',
	                  'elementType': 'all',
	                  'stylers': {
	                    'visibility': 'off'
	                  }
	                },
	                {
	                  'featureType': 'arterial',
	                  'elementType': 'geometry.fill',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'arterial',
	                  'elementType': 'geometry.stroke',
	                  'stylers': {
	                    'color': '#0b3d51'
	                  }
	                },
	                {
	                  'featureType': 'local',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'railway',
	                  'elementType': 'geometry.fill',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'railway',
	                  'elementType': 'geometry.stroke',
	                  'stylers': {
	                    'color': '#08304b'
	                  }
	                },
	                {
	                  'featureType': 'subway',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'lightness': -70
	                  }
	                },
	                {
	                  'featureType': 'building',
	                  'elementType': 'geometry.fill',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'all',
	                  'elementType': 'labels.text.fill',
	                  'stylers': {
	                    'color': '#857f7f'
	                  }
	                },
	                {
	                  'featureType': 'all',
	                  'elementType': 'labels.text.stroke',
	                  'stylers': {
	                    'color': '#000000'
	                  }
	                },
	                {
	                  'featureType': 'building',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#022338'
	                  }
	                },
	                {
	                  'featureType': 'green',
	                  'elementType': 'geometry',
	                  'stylers': {
	                    'color': '#062032'
	                  }
	                },
	                {
	                  'featureType': 'boundary',
	                  'elementType': 'all',
	                  'stylers': {
	                    'color': '#465b6c'
	                  }
	                },
	                {
	                  'featureType': 'manmade',
	                  'elementType': 'all',
	                  'stylers': {
	                    'color': '#022338'
	                  }
	                },
	                {
	                  'featureType': 'label',
	                  'elementType': 'all',
	                  'stylers': {
	                    'visibility': 'off'
	                  }
	                }
	              ]
	            }
        	},
	        visualMap: {
	        	type:'piecewise',
	            show: true,
	            top: 'bottom',
	            right:'0',
	            min: 0,
	            max: 3,
	            seriesIndex: 0,
	            calculable: true,
	            inRange: {
	                color: ['blue',  'green', 'yellow', 'orange','red']
	            },
	            z:2,
	        },
	        series: [{
	            type: 'heatmap',
	            coordinateSystem: 'bmap',
	            data: points,
	            pointSize: 5,
	            blurSize: 6,
	        }]
	    });
	});
	window.addEventListener("resize", function () {
            map_1.resize(); 
        });
}

function force_graph(){
	force_graph = echarts.init(document.getElementById("force-graph"),'dark');
	force_graph.showLoading();
	$.get('data/food.gexf', function (xml) {
	    force_graph.hideLoading();
	
	    var graph = echarts.dataTool.gexf.parse(xml);
	    var categories = [];
	    for (var i = 0; i < 11; i++) {
	        categories[i] = {
	            name: '类目' + i
	        };
	    }
	    graph.nodes.forEach(function (node) {
	        node.itemStyle = null;
	        node.symbolSize = 10;
	        node.value = node.weight;
	        node.category = parseInt(node.attributes.modularity_class)%10;
	        //node.symbolSize = node.weight;
	        node.draggable = true;
	        node.label = {
                normal: {
                    show: node.attributes.degree > 33
                   }
           };
	    });
	    force_graph_option = {
	        title: {
	            text: '食品溯源项目',
	            subtext: '企业关联图',
	            top: 'bottom',
	            left: 'right'
	        },
	        tooltip: {
	        	formatter:function (params) {
                    if (params.value) {
                        return '企业名称: '+ params.name + ' </br>'
                           + '产品类目:' + params.data.category+'</br>'
                           + '贸易数量:' + params.data.attributes.degree+'</br>';
                    }
                },
	        },
	        legend: [{
	            // selectedMode: 'single',
	            data: categories.map(function (a) {
	                return a.name;
	            })
	        }],
	        animation: false,
	        series : [
	            {
	                name: '食品溯源',
	                type: 'graph',
	                layout: 'none',
	                data: graph.nodes,
	                links: graph.links,
	                categories: categories,
	                legendHoverLink: true,
	                focusNodeAdjacency: true,
	                roam: true,
	                label: {
                        normal: {
                            position: 'top',
                            formatter: '{b}' //a为系列名，b为数据名，c为数据值
                        },
                        emphasis:{
                            position: 'top',
                            formatter: '{b}'
                        }
                    },
	                force: {
	                    repulsion: 1000
	                },
	                itemStyle:{
	                	
	                },
	                lineStyle:{
                        normal:{
                            width:1,
                        },
                        emphasis:{
                            width:3,
                            color:'#FFD700'
                        }
                    },
	            }
	        ]
	    };
	
	    force_graph.setOption(force_graph_option);
	    window.addEventListener("resize", function () {
            force_graph.resize(); 
        });
	}, 'xml');
	
}

function update_table(){
	$.get('data/table.json', function(content) {
		var table_content=new Array();
	    for(var i=0;i<content.length;i++){
	        table_content.push([i,content[i]['label'],content[i]['indegree'],content[i]['outdegree'],content[i]['class']]);
	    }
	    $(document).ready(function () {
	        $('#dataTables-example').dataTable({
	            bDestroy:true,
	            data:table_content,
	            sPaginationType : "full_numbers",
	            bProcessing: true,
	        });
	    });	
	});
}