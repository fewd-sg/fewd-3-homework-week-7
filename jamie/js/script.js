var cityType = $("#city-type")
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]

$.each(cities, function(index, value) {
  var options = "<option value=" + value +">" + value + "</option>"
  cityType.append(options)
});

cityType.change(function(){
  // console.log('test')
  if ($(this).val() === 'NYC') {
    $('body').attr("class", 'nyc')
  }else if ($(this).val() === 'SF') {
    $('body').attr("class", 'sf')
  }else if ($(this).val() === 'LA') {
    $('body').attr("class", 'la')
  }else if ($(this).val() === 'Austin') {
    $('body').attr("class", 'austin')
  }else if ($(this).val() === 'Sydney') {
    $('body').attr("class", 'sydney')
  }else {
    console.log('no')
  }


})
