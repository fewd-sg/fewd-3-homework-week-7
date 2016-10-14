Instead of including the options tags in HTML, make use of `$.each` and `.append` to insert the options:
```js
$.each(city, function(index, value){
  var options = "<option value=" + value + ">" + value + "</option>"
  $('#city-type').append(options)
})
```

You can also rewrite this line to make use of jQuery:
```
// before
document.querySelector('body').style.backgroundImage = 'url(images/austin.jpg)';

// edited
$('body').css('background-image', 'url(images/austin.jpg)');
```
