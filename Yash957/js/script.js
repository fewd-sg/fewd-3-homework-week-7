var cities=["NYC", "SF", "LA", "ATX", "SYD"]

$.each(cities, function(key, value) {
     $('#city-type').append($("<option></option>").attr("value",value).text(value));
});


$('#city-type').change(function() {
			var city = document.getElementById("city-type").value;
			switch(city) {
				case "NYC":
					document.body.className = "nyc";
					break;
				case "ATX":
					document.body.className = "austin";
					break;
				case "SF":
					document.body.className = "sf";
					break;
				case "LA":
					document.body.className = "la";
					break;
				case "SYD":
					document.body.className = "sydney";
					break;
			}
		});
