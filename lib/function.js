function dataFormatter(obj) {
    var pList = ["松江区","闸北区","黄浦区","长宁区","闵行区","静安区","虹口区","宝山区","浦东新区","徐汇区","金山区","嘉定区","杨浦区"];
    var temp;
    for (var month = 3; month <= 8; month++) {
        var max = 0;
        var sum = 0;
        temp = obj[month];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[month][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[month + 'max'] = Math.floor(max / 100) * 100;
        obj[month + 'sum'] = sum;
    }
    return obj;
}


function line_1(){
	var line_1 = echarts.init(document.getElementById("line-1"),'dark');
	line_1.showLoading();
	var dataMap = {};
	
	dataMap.dataretailer = dataFormatter({
	    3:[3,20,16,7,6,20,12,5,2,4,27,26,23,13,19,29,],
		4:[4,14,12,8,5,23,12,4,0,6,27,20,20,10,15,30,],
		5:[7,22,18,7,5,25,16,6,1,8,41,26,22,14,15,31,],
		6:[6,20,12,5,6,23,16,5,3,6,36,22,19,14,12,30,],
		7:[4,25,10,6,7,20,14,1,2,4,36,21,21,14,11,26,],
		8:[5,13,8,5,4,18,14,2,2,3,29,18,20,10,10,24,]
	});
	
	dataMap.datacatering = dataFormatter({
	    3:[12,12,15,8,34,36,28,21,0,7,31,87,48,15,17,41,],
		4:[13,15,18,10,40,37,26,28,2,8,30,90,43,12,19,43,],
		5:[18,19,24,11,49,48,38,32,2,10,33,109,55,18,20,57,],
		6:[13,13,19,9,46,41,29,19,2,10,30,84,47,12,11,50,],
		7:[9,11,15,9,13,33,27,15,2,6,23,64,43,10,9,41,],
		8:[10,11,11,7,13,27,28,10,1,5,23,49,33,13,9,28,]
	});
	
	dataMap.datamanufacturer = dataFormatter({
	    3:[6,9,3,0,4,5,1,1,2,10,27,6,5,4,0,5,],
		4:[6,11,3,0,4,6,1,1,2,13,26,9,5,2,0,4,],
		5:[5,14,4,0,7,8,1,1,2,12,30,9,5,5,0,5,],
		6:[6,14,4,0,4,6,1,1,2,13,30,10,6,5,0,5,],
		7:[7,9,4,0,6,5,1,1,1,8,19,8,6,4,0,4,],
		8:[4,7,3,0,7,0,1,1,1,4,11,4,3,3,0,3,]
	});
	
	dataMap.datawholesaler = dataFormatter({
	    3:[1,1,1,0,6,12,1,0,1,0,4,3,1,4,2,4,],
		4:[1,0,2,0,6,9,1,0,2,0,6,4,2,3,2,4,],
		5:[1,1,2,0,7,14,1,0,3,0,8,5,3,3,2,4,],
		6:[1,2,2,0,6,11,2,0,3,1,5,2,3,1,2,3,],
		7:[1,1,3,0,2,8,1,0,3,1,3,1,3,0,1,4,],
		8:[1,0,1,0,1,6,2,0,3,1,4,1,1,2,1,3,]
	});

	dataMap.datafarmer = dataFormatter({
	    3:[1,0,0,0,0,0,0,0,1,2,4,1,1,2,0,0,],
		4:[1,1,0,0,1,0,0,0,0,1,1,2,1,2,0,0,],
		5:[3,1,0,0,0,0,0,0,1,3,2,2,1,2,0,0,],
		6:[2,1,0,0,0,0,0,0,0,2,3,1,1,2,0,0,],
		7:[1,1,0,0,0,0,0,0,0,1,2,1,1,2,0,0,],
		8:[0,1,0,0,0,0,0,0,0,0,2,1,1,0,0,0,]
	});
	
	dataMap.dataunknown = dataFormatter({
	    3:[108,54,123,94,80,179,681,85,142,71,113,273,133,135,98,148,],
		4:[100,55,133,85,79,176,648,81,152,59,127,288,118,131,90,142,],
		5:[154,82,157,109,107,315,842,112,209,93,164,434,161,189,125,176,],
		6:[131,70,141,99,93,307,792,95,196,89,182,385,145,162,115,159,],
		7:[130,86,126,78,65,226,658,77,164,70,144,305,111,129,91,134,],
		8:[80,67,86,58,50,179,385,54,122,43,104,239,71,90,64,89,]
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
	            controlStyle: {
	                 position: 'left'
	             },
	            data: [
	                '2016-03','2016-04',
	                {
	                    value: '2016-05',
	                    tooltip: {
	                        formatter: '{b} 贸易量达到新高'
	                    },
	                    symbol: 'diamond',
	                    symbolSize: 16
	                },
	                '2016-06','2016-07', '2016-08'
	            ],
	            label: {
		                formatter: function (value, index) {
	                    // 格式化成月/日，只在第一个刻度显示年份
	                    var date = new Date(value);
	                    var texts = [(date.getMonth() + 1), date.getDate()];
	                    return texts[0]+"月";
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
	                    "松江区","\n金山区","黄浦区","\n长宁区","青浦区","\n闵行区","静安区","\n虹口区","崇明县","\n奉贤区","宝山区","\n浦东新区","徐汇区","\n嘉定区","杨浦区","\n普陀区"],
	                splitLine: {show: false}
	            }
	        ],
	        yAxis: [
	            {
	                type: 'value',
	                name: '各分类企业数量占比(%)',
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
	                {data: dataMap.dataretailer['3']},
	                {data: dataMap.datacatering['3']},
	                {data: dataMap.datamanufacturer['3']},
	                {data: dataMap.datawholesaler['3']},
	                {data: dataMap.datafarmer['3']},
	                {data: dataMap.dataunknown['3']},
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
	                {data: dataMap.dataretailer['4']},
	                {data: dataMap.datacatering['4']},
	                {data: dataMap.datamanufacturer['4']},
	                {data: dataMap.datawholesaler['4']},
	                {data: dataMap.datafarmer['4']},
	                {data: dataMap.dataunknown['4']},
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
	                {data: dataMap.dataretailer['5']},
	                {data: dataMap.datacatering['5']},
	                {data: dataMap.datamanufacturer['5']},
	                {data: dataMap.datawholesaler['5']},
	                {data: dataMap.datafarmer['5']},
	                {data: dataMap.dataunknown['5']},
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
	                {data: dataMap.dataretailer['6']},
	                {data: dataMap.datacatering['6']},
	                {data: dataMap.datamanufacturer['6']},
	                {data: dataMap.datawholesaler['6']},
	                {data: dataMap.datafarmer['6']},
	                {data: dataMap.dataunknown['6']},
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
	                {data: dataMap.dataretailer['7']},
	                {data: dataMap.datacatering['7']},
	                {data: dataMap.datamanufacturer['7']},
	                {data: dataMap.datawholesaler['7']},
	                {data: dataMap.datafarmer['7']},
	                {data: dataMap.dataunknown['7']},
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
	                {data: dataMap.dataretailer['8']},
	                {data: dataMap.datacatering['8']},
	                {data: dataMap.datamanufacturer['8']},
	                {data: dataMap.datawholesaler['8']},
	                {data: dataMap.datafarmer['8']},
	                {data: dataMap.dataunknown['8']},
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