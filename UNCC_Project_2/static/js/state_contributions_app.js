var svg_s = dimple.newSvg("#state_bar_charts", 1200, 500);
d3.json("candidate_states", function (data) {
  var myChart = new dimple.chart(svg_s, data);
  myChart.defaultColors = [
	new dimple.color("#1AA3FF"), // Set a blue fill
	new dimple.color("#FF0000"), // Set a red fill
];
  myChart.setBounds(50, 50, 1000, 400)
  var x = myChart.addCategoryAxis("x", "state");
  x.addOrderRule("state");
  myChart.addMeasureAxis("y", "total");
  myChart.addSeries("candidate", dimple.plot.bar);
  myChart.addLegend(60, 10, 510, 20, "right");
  myChart.draw();
});

var state_selection_button = d3.select("#state_selection")

state_selection_button.on("change", function () {
  d3.event.preventDefault();

  console.log("Redrawing bar chart");

  // var state_selection_field = d3.select("#state_selection");
  var state_selection_value = state_selection_button.property("value");

  console.log(`The selection is is ${state_selection_value}`);

  if (state_selection_value == "state_percentage") {
    console.log("drawing state percentage")
    d3.select("svg").html("")
    d3.json("candidate_states", function (data) {
      var myChart = new dimple.chart(svg_s, data);
      myChart.defaultColors = [
        new dimple.color("#1AA3FF"), // Set a red fill
        new dimple.color("#FF0000"), // Set a blue fill
    ];
      myChart.setBounds(55, 50, 1000, 400)
      var x = myChart.addCategoryAxis("x", "state");
      x.addOrderRule("state");
      myChart.addPctAxis("y", "total");
      myChart.addSeries("candidate", dimple.plot.bar);
      myChart.addLegend(60, 10, 510, 20, "right");
      myChart.draw();
    });
}

else {
  console.log("drawing state total")
  d3.select("svg").html("")
  d3.json("candidate_states", function (data) {
    var myChart = new dimple.chart(svg_s, data);
    myChart.defaultColors = [
        new dimple.color("#1AA3FF"), // Set a red fill
        new dimple.color("#FF0000"), // Set a blue fill
    ];
    myChart.setBounds(50, 50, 1000, 400)
    var x = myChart.addCategoryAxis("x", "state");
    x.addOrderRule("state");
    myChart.addMeasureAxis("y", "total");
    myChart.addSeries("candidate", dimple.plot.bar);
    myChart.addLegend(60, 10, 510, 20, "right");
    myChart.draw();
  });
}

})