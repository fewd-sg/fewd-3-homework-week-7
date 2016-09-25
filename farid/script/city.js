var city = ["NYC","SF","LA","ATX","SYD"]

//add into dropdowns
city.forEach(function(element, index){
  $( "#city-type" ).append("<option>"+city[index]+"</option>");
});

//new shorter function after changing css classes!!
$( "#city-type" ).change(function() {
  var input=$( "#city-type" ).val()

  if ($( "#city-type" ).val() === input){
    $("body").removeClass("SF LA ATX SYD NYC");
    $("body").addClass(input);
  }

/*old code that works too but am keeping it because
/*of assignment requirements for if/else if
  if ($( "#city-type" ).val() === "NYC"){
    $("body").removeClass("SF LA ATX SYD NYC");
    $("body").addClass("NYC");
  }

  else if ($( "#city-type" ).val() === "SF"){
    $("body").removeClass("SF LA ATX SYD NYC");
    $("body").addClass("SF");
  }

  else if ($( "#city-type" ).val() === "LA"){
    $("body").removeClass("SF LA ATX SYD NYC");
    $("body").addClass("LA");
  }

  else if ($( "#city-type" ).val() === "ATX"){
    $("body").removeClass("SF LA ATX SYD NYC");
    $("body").addClass("ATX");
  }

  else if ($( "#city-type" ).val() === "SYD"){
    $("body").removeClass("SF LA ATX SYD NYC");
    $("body").addClass("SYD")
  }
  */

});
