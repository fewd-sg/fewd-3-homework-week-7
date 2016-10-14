
//Define Variables
var cities = ["NYC", "SF", "LA", "ATX", "SYD"]
var $citySelect = $("#city-type")
var $body = $("body")

//ADD ALL CITIES TO THE SELECT VIA FOR LOOP
	cities.forEach(function(value){

		$citySelect.append("<option>" + value + "</option>")

	})

/*  1. DETECT USER INPUT (SELECT 1 OPTION) VIA CHANGE EVENT HANDLER
 	2. STORE INPUT INTO VARIABLE
 	3. SWITCH BASED ON INPUT TO CHOOSE BACKGROUND IMAGE
 	4. CLEAR EXISTING CLASSES SET
	5. SET BACKGROUND IMAGE BY SETTING CSS CLASS USING JS
*/
	$citySelect.change(function(){

		var selectedCity = $citySelect.val()
		$body.attr("class","")

		switch (selectedCity){
			case "NYC":
				$body.addClass("nyc")
			break;

			case "SF":
				$body.addClass("sf")
			break;

			case "LA":
				$body.addClass("la")
			break;

			case "ATX":
				$body.addClass("austin")
			break;

			case "SYD":
				$body.addClass("sydney")
			break;

		}	

	})



	