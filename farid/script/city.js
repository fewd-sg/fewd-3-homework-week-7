var city = ["NYC","SF","LA","ATX","SYD"]


city.forEach(function(element, index){
  $( "#city-type" ).append("<option>"+city[index]+"</option>");
});


$( "#city-type" ).change(function() {

  citySelect = $( "#city-type" ).val();

  if (citySelect === "NYC"){
    removeCity();
    $("body").addClass("NYC");
  }

  else if (citySelect === "SF"){
    removeCity();
    $("body").addClass("SF");
  }

  else if (citySelect === "LA"){
    removeCity();
    $("body").addClass("LA");
  }

  else if (citySelect === "ATX"){
    removeCity();
    $("body").addClass("ATX");
  }

  else if (citySelect === "SYD"){
    removeCity();
    $("body").addClass("SYD")
  }

});

function removeCity(){
  $("body").removeClass("SF LA ATX SYD NYC");
}
