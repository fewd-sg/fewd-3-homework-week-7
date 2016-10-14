// $(document).ready(function() {
//     $("#city-type").click(function() {
//         $("#city-type").append("<option>NYC</option>");
//         $("#city-type").append("<option>SF</option>");
//         $("#city-type").append("<option>LA</option>");
//         $("#city-type").append("<option>ATX</option>");
//         $("#city-type").append("<option>SYD</option>");
//     });
//
//     $("NYC").click(function() {
//         $("body").append("<img class='nyc' src='images/nyc.jpg'/>");
//
//     });
// });

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function() {
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});
