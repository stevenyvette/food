function map_2(){
	var map_2 = echarts.init(document.getElementById("map-2"));
	map_2.showLoading();
	$.get('data/old/map-2-test.json', function(content) {
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
		        text: '模拟迁徙',
		        subtext: '数据纯属虚构',
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

function map_1(){
	var map_1 = echarts.init(document.getElementById("map-1"));
	$.get('data/map-1.json', function (data) {
	    var points = [].concat.apply([], data.map(function (track) {
	        return track.map(function (seg) {
	            return seg.coord.concat([1]);
	        });
	    }));
	    map_1.setOption(map_1_option = {
	        animation: false,
	        bmap: {
	            center: [121.470999,31.226422],
	            zoom: 11,
	            roam: true,
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
	$.get('data/test.gexf', function (xml) {
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
	            text: '食品溯源',
	            //subtext: 'Default layout',
	            top: 'bottom',
	            left: 'right'
	        },
	        tooltip: {},
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
		console.log('content');
	});
    var table_content=new Array();
    for(var i=0;i<10;i++){
        //content+="<tr><td>"+promatrix[i][0]+"</td><td>"+promatrix[i][1]+"</td><td>"+promatrix[i][2]+"</td><td>"+promatrix[i][3]+"</td><td>"+promatrix[i][4]+"</td></tr>";
        //table_content.push([promatrix[i][0],promatrix[i][1],promatrix[i][2],promatrix[i][3],promatrix[i][4]]);
        table_content.push([i,"企业"+i,10-i,"dm","e"]);
    }
    //document.getElementById("promatrix-table").innerHTML=content;
    $(document).ready(function () {
        $('#dataTables-example').dataTable({
            bDestroy:true,
            data:table_content,
        });
    });
}