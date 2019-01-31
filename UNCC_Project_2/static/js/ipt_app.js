var svg_i = dimple.newSvg("#incremental_percent_total", 1200, 600);
d3.json("/candidate_ipt", function (data) {
  var myChart = new dimple.chart(svg_i, data);
  myChart.defaultColors = [
	new dimple.color("#FF0000"), // Set a red fill
	new dimple.color("#1AA3FF"), // Set a blue fill
];
  myChart.setBounds(50, 50, 1200, 500)
  var x = myChart.addCategoryAxis("x", "Day");
  x.addOrderRule("Day");
  myChart.addMeasureAxis("y", "IPT");
  myChart.addSeries("Candidate", dimple.plot.bubble);
  myChart.addLegend(180, 10, 360, 20, "right");
  myChart.draw();
});

var candidate_field = d3.select("#candidate_selection");
candidate_field.on("change", function () {
  d3.event.preventDefault();

  console.log("Redrawing graph");

  var candidate_field = d3.select("#candidate_selection");
  var candidate_value = candidate_field.property("value");

  console.log(`The candidate is ${candidate_value}`);

  if (candidate_value != "BOTH") {
  console.log("doing first")
  d3.select("svg").html("");
  d3.json(`/candidate_ipt/${candidate_value}`, function (data) {
  var myChart = new dimple.chart(svg_i, data);
  if (candidate_value == "DJT") {
    myChart.defaultColors = [
    new dimple.color("#FF0000"), // Set a red fill with a blue stroke
    ];
  }
  else {
    myChart.defaultColors = [
        new dimple.color("#1AA3FF"), // Set a red fill with a blue stroke
        ];
  }
  myChart.setBounds(50, 50, 1200, 400)
  var x = myChart.addCategoryAxis("x", "Day");
  x.addOrderRule("Day");
  myChart.addMeasureAxis("y", "IPT");
  myChart.addSeries("Candidate", dimple.plot.bubble);
  myChart.addLegend(180, 10, 360, 20, "right");
  myChart.draw();
});
}

else {
  console.log("doing second")
  d3.select("svg").html("")
  // var svg_incremental = dimple.newSvg("#incremental_percent_total", 1200, 500);
  d3.json("/candidate_ipt", function (data) {
    var myChart = new dimple.chart(svg_i, data);
    myChart.defaultColors = [
        new dimple.color("#FF0000"), // Set a red fill
        new dimple.color("#1AA3FF"), // Set a blue fill
    ];
    myChart.setBounds(50, 50, 1200, 400)
    var x = myChart.addCategoryAxis("x", "Day");
    x.addOrderRule("Day");
    myChart.addMeasureAxis("y", "IPT");
    myChart.addSeries("Candidate", dimple.plot.bubble);
    myChart.addLegend(180, 10, 360, 20, "right");
    myChart.draw();
  });
}

})