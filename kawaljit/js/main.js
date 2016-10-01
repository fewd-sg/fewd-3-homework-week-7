var cityType = $('#city-type');
var city = [ "NYC", "SF", "LA", "ATX", "SYD"];

$.each(city, function(index, value){
  var options = "<option value=" + value + ">" + value + "</option>"
  cityType.append(options)
})

cityType.change(function() {
  // alert( "Handler for .change() called." );

  if ($(this).val() === "NYC") {
    $("body").attr("class", "nyc")
  } else if ($(this).val() === "SF") {
    $("body").attr("class", "sf")
  } else if ($(this).val() === "LA") {
    $("body").attr("class", "la")
  } else if ($(this).val() === "ATX") {
    $("body").attr("class", "austin")
  } else if ($(this).val() === "SYD") {
    $("body").attr("class", "sydney")
  } else {
    $("body").attr("class", "")
  }

});
