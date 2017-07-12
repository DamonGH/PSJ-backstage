// 图表
$(document).ready(function() {  
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
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
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
        name: '母账户新增',
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
  
});