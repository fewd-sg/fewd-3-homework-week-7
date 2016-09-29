$(document).ready(
    function(){
        var cities = {
            "NYC": "url(../starter_code/images/nyc.jpg)",
            "SF": "url(../starter_code/images/sf.jpg)",
            "LA": "url(../starter_code/images/la.jpg)",
            "ATX": "url(../starter_code/images/austin.jpg)",
            "SYD": "url(../starter_code/images/sydney.jpg)"
        }
        
        for(city in cities){  
             $("#city-type").append("<option>" + city + "</option>");
        }
        //on change of dropdown selection change body back
        $("#city-type").change(
            function(){
                $("body").css("background-image", cities[$("option:selected").val()]);
            }
        );
        
        
});