I noticed that the HTML tags for the `<option>` appears as `<option city="0">`. 

In HTML, there is no attribute called "city" so by right it shouldn't work. Instead, it should be the "value" attribute like `<option value="0">`.

Instead of `$('body').removeClass('nyc sf la atx syd')`, you could try `$('body').attr("class", "")`.
