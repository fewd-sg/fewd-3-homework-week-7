I like the idea for this line: `$('#city-type').append($("<option></option>").attr("value",value).text(value));` where you use methods to insert the values instead of string concatenation.

Since you are using jQuery, wouldn't you want to use `$("#city-type")` in place of `document.getElementById("city-type")`? Another example is $("body").attr("class", "nyc") instead of `document.body.className = "nyc"`.

