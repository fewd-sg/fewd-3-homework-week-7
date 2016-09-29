

var cityType = $('#city-type')
var names = ["NYC", "SF", "LA", "ATX", "SYD"]

$.each(names, function(index, value) {
  var options = "<option value=" + value + ">" + value + "</option>"
  cityType.append(options)
});



cityType.change(function () {

  if ($(this).val().toLowerCase() === "nyc") {
    $('body').attr("class", "nyc")
  } else if ($(this).val().toLowerCase() === "sf") {
    $('body').attr("class", "sf")
  } else if ($(this).val().toLowerCase() === "la") {
    $('body').attr("class", "la")
  } else if ($(this).val().toLowerCase() === "atx") {
    $('body').attr("class", "austin")
  } else if ($(this).val().toLowerCase() === "syd") {
    $('body').attr("class", "sydney")
  } else {
    $('body').attr("class", "")
  }



});
