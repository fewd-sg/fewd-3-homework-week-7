var cities = ["NYC", "SF", "LA", "ATX", "SYD"]

$.each(cities, function(i, city) {
    $('#city-type').append($('<option>', {
        city: i
    }).text(city));
})

$('#city-type').change(function() {
    var selected = $('#city-type').val().toLowerCase();
    $('body').removeClass('nyc sf la atx syd') /*is there a better way to do this?*/
    $('body').addClass(selected)
})
