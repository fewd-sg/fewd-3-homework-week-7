Just want to show you an example using `$.each` in place of the `for` loop:
```js
$.each(cities, function(index, value){
  var options = "<option value=" + value + ">" + value + "</option>"
  $('#city-type').append(options)
})
```

Also, instead of `$('form').on('change',  ... )`, you can consider using this jQuery method: `$('#city-type').change(function(){ ... }`.
