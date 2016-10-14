You can modify the below line. This is because you have passed "value" as an argument in your function, as seen in `function( index, value )`.
```js
// before
$('#city-type').append('<option value="' + cities[index] + '">' + cities[index] + '</option>');

// modified
$('#city-type').append('<option value=" + value + ">' + value + '</option>');
```

Also, you can experiment with writing a switch statement instead of an "if-else" statement.
```js
$('#city-type').change(function(){
  var city = $('#city-type').val()
  $('body').attr('class','');

  switch (city) {
    case "NYC":
      $('body').attr('class','nyc');
    break;

    case "SF":
      $('body').attr('class','sf');
    break;

    case "LA":
      $('body').attr('class','la');
    break;

    case "ATX":
      $('body').attr('class','austin');
    break;

    case "SYD":
      $('body').attr('class','sydney');
    break;
  } 
})
```
