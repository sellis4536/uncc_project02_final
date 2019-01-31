var svg = dimple.newSvg("#djt_pie", 700, 400);
    d3.json("/djt_contributions/3", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(20, 20, 460, 360)
      myChart.addMeasureAxis("p", "Total");
      myChart.addSeries("Employer", dimple.plot.pie);
      myChart.addLegend(500, 20, 90, 300, "left");
      myChart.draw();
    });

var svg_hrc = dimple.newSvg("#hrc_pie", 700, 400);
d3.json("/hrc_contributions/3", function (data) {
  var myChart = new dimple.chart(svg_hrc, data);
  myChart.setBounds(20, 20, 460, 360)
  myChart.addMeasureAxis("p", "Total");
  myChart.addSeries("Employer", dimple.plot.pie);
  myChart.addLegend(500, 20, 90, 300, "left");
  myChart.draw();
});

var filter_graphs_button = d3.select("#filter-btn");

filter_graphs_button.on("click", function() {
  d3.event.preventDefault();
  console.log("clicked the button");

  var filter_graphs_field = d3.select("#top_x");
  var filter_graphs_value = filter_graphs_field.property("value");
  console.log(`Filtering by top ${filter_graphs_value} contributors`);

  d3.select("svg").html("")
  d3.json(`/djt_contributions/${filter_graphs_value}`, function (data) {
    var myChart = new dimple.chart(svg, data);
    myChart.setBounds(20, 20, 460, 360)
    myChart.addMeasureAxis("p", "Total");
    myChart.addSeries("Employer", dimple.plot.pie);
    myChart.addLegend(500, 20, 90, 300, "left");
    myChart.draw();
  });

  d3.select("#hrc_pie").html("<div id='hrc_pie></div>");
  var svg_hrc = dimple.newSvg("#hrc_pie", 700, 400);
  d3.json(`/hrc_contributions/${filter_graphs_value}`, function (data) {
    var myChart = new dimple.chart(svg_hrc, data);
    myChart.setBounds(20, 20, 460, 360)
    myChart.addMeasureAxis("p", "Total");
    myChart.addSeries("Employer", dimple.plot.pie);
    myChart.addLegend(500, 20, 90, 300, "left");
    myChart.draw();
  });

})