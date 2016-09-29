//creating array
var cities = ["NYC","SF","LA","ATX","SYD"];

//run the code when DOM is ready
$( document ).ready(function() {
  //prevent form submission
  event.preventDefault();
  //using the $.each in jQuery to populate the cities
  $.each( cities, function( index, value ){
    //using append to add cities to the drop-down menu
      $('#city-type').append('<option value="' + cities[index] + '">' + cities[index] + '</option>');
  });

//When an option is selected, the change event occurs.
  $('#city-type').change(function() {
    //get the value of user input using $.val()
    var city = $('#city-type').val();
    //change the background image based on what user selected
    /*Can use city===cities[0] or city==="NYC" but I chose to use the former one because the value has already been stored in the 'cities' array*/
    if (city===cities[0])
    {
      //included attr
      $('body').attr('class','nyc');
    }
    else if (city===cities[1])
    {
      $('body').attr('class','sf');
    }
    else if (city===cities[2]){
      $('body').attr('class','la');
    }
    else if (city===cities[3]){
      $('body').attr('class','austin');
    }
    else if (city===cities[4]){
      $('body').attr('class','sydney');
    }
  });
});
