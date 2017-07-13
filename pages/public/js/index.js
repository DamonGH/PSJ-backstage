// 图表
$(document).ready(function() {  
   // 母账户图表
   var chart = {
      type: 'areaspline'     
   };
   var title = {
      text: ''   
   }; 
   var subtitle = {
      style: {
         position: 'absolute',
         right: '0px',
         bottom: '10px'
      }
   };
   var legend = {
      // layout: 'vertical',
      // align: 'left',
      // verticalAlign: 'top',
      // x: 150,
      // y: 100,
      // floating: true,
      // borderWidth: 1,
      // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
   };
   var xAxis = {
      categories: ['今日新增','本周新增','本月新增']      
   };
   var yAxis = {
      title: {
         text: ''
      }      
   };
   var tooltip = {
       shared: true,
       valueSuffix: ' units'
   };
   var credits = {
       enabled: false
   }
   var plotOptions = {
      areaspline: {
         fillOpacity: 0.5
      }
   };   
   var series= [{

            data: [12, 124, 336]
        },
   ];     
      
   var json = {};   
   json.chart = chart; 
   json.title = title; 
   json.subtitle = subtitle; 
   json.xAxis = xAxis;
   json.yAxis = yAxis;
   json.legend = legend;   
   json.plotOptions = plotOptions;
   json.credits = credits;
   json.series = series;
   $('#parent-account').highcharts(json);
  
// 业务员统计

var chart1 = {
      type: 'areaspline'     
   };
   var title1 = {
      text: ''   
   }; 
   var subtitle1 = {
      style: {
         position: 'absolute',
         right: '0px',
         bottom: '10px'
      }
   };
   var legend1 = {
      // layout: 'vertical',
      // align: 'left',
      // verticalAlign: 'top',
      // x: 150,
      // y: 100,
      // floating: true,
      // borderWidth: 1,
      // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
   };
   var xAxis1 = {
      categories: ['今日新增','本周新增','本月新增']      
   };
   var yAxis1 = {
      title: {
         text: ''
      }      
   };
   var tooltip1 = {
       shared: true,
       valueSuffix: ' units'
   };
   var credits1 = {
       enabled: false
   }
   var plotOptions1 = {
      areaspline: {
         fillOpacity: 0.5
      }
   };   
   var series1= [{
        name: '业务员新增',
            data: [12, 124, 336]
        },
   ];     
      
   var json1 = {};   
   json1.chart = chart1; 
   json1.title = title1; 
   json1.subtitle = subtitle1; 
   json1.xAxis = xAxis1;
   json1.yAxis = yAxis1;
   json1.legend = legend1;   
   json1.plotOptions = plotOptions1;
   json1.credits = credits1;
   json1.series = series1;
   $('#agent').highcharts(json1);

   // 客户统计
   var chart2 = {
      type: 'areaspline'     
   };
   var title2 = {
      text: ''   
   }; 
   var subtitle2 = {
      style: {
         position: 'absolute',
         right: '0px',
         bottom: '10px'
      }
   };
   var legend2 = {
      // layout: 'vertical',
      // align: 'left',
      // verticalAlign: 'top',
      // x: 150,
      // y: 100,
      // floating: true,
      // borderWidth: 1,
      // backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
   };
   var xAxis2 = {
      categories: ['今日新增','本周新增','本月新增']      
   };
   var yAxis2 = {
      title: {
         text: ''
      }      
   };
   var tooltip2 = {
       shared: true,
       valueSuffix: ' units'
   };
   var credits2 = {
       enabled: false
   }
   var plotOptions2 = {
      areaspline: {
         fillOpacity: 0.5
      }
   };   
   var series2= [{
        name: ' ',
            data: [12, 124, 336]
        },
   ];     
      
   var json2 = {};   
   json2.chart = chart2; 
   json2.title = title2; 
   json2.subtitle = subtitle2; 
   json2.xAxis = xAxis2;
   json2.yAxis = yAxis2;
   json2.legend = legend2;   
   json2.plotOptions = plotOptions2;
   json2.credits = credits2;
   json2.series = series2;
   $('#customer').highcharts(json2);
});