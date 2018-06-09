$(document).ready(function() {
    var rawTemp;
    var getWeather = function(input) {
        input = $('#userInput').val();
        $.getJSON('http://api.openweathermap.org/data/2.5/weather?zip=' + input + ',us&appid=b2a13a7aee736f88f846aac0a54ef989', function(data) {
            // console.log(data);
            rawTemp = data.main.temp;
            $("#description").text(data.weather[0].description);
            $("#name").text(data.name);
            tempF = Math.round(((rawTemp - 273) * 1.8) + 32);
            tempC = Math.round((rawTemp - 273) * 10) / 10;
            $("#temp").html(tempF + "&deg F");
            $('#temp').addClass('f');
            $("#windSpeed").text(Math.round((data.wind.speed / 0.44704) * 10) / 10 + " mph");
            var r = data.wind.deg; //
            var windDirection;
            // CONVERT THIS TO CASE STATEMENT
            if (r > 348.75 || r <= 11.25) {
                windDirection = "N";
            } else if (r > 11.25 && r <= 33.75) {
                windDirection = "NNE";
            } else if (r > 33.75 && r <= 56.25) {
                windDirection = "NE";
            } else if (r > 56.25 && r <= 78.75) {
                windDirection = "ENE";
            } else if (r > 78.75 && r <= 101.25) {
                windDirection = "E";
            } else if (r > 101.25 && r <= 123.75) {
                windDirection = "ESE";
            } else if (r > 123.75 && r <= 146.25) {
                windDirection = "SE";
            } else if (r > 146.25 && r <= 168.75) {
                windDirection = "SSE";
            } else if (r > 168.75 && r <= 191.25) {
                windDirection = "S";
            } else if (r > 191.25 && r <= 213.75) {
                windDirection = "SSW";
            } else if (r > 213.75 && r <= 236.25) {
                windDirection = "SW";
            } else if (r > 236.25 && r <= 258.75) {
                windDirection = "WSW";
            } else if (r > 258.75 && r <= 281.25) {
                windDirection = "W";
            } else if (r > 281.25 && r <= 303.75) {
                windDirection = "WNW";
            } else if (r > 303.75 && r <= 326.75) {
                windDirection = "NW";
            } else if (r > 326.75 && r <= 348.75) {
                windDirection = "NNW";
            } else {
                windDirection = "Calm";
            }
            $("#windDir").text(windDirection + " @");
            var cond = data.weather[0].icon;
            $("#weatherIcon").attr("src", "http://openweathermap.org/img/w/" + cond + ".png");
        });
        if ($('#infoDiv').is(':hidden')) {
            $('#infoDiv').slideDown('slow');
        }
    };
    var convert = function() {
        if ($('#temp').hasClass('f')) {
            $('#temp').html(Math.round((rawTemp - 273) * 10) / 10 + " C&deg");
            $('#btnText').html('Convert to F&deg');
            $('#temp').addClass('c').removeClass('f');
        } else if ($('#temp').hasClass('c')) {
            $('#temp').html(Math.round(((rawTemp - 273) * 1.8) + 32) + " F&deg");
            $('#btnText').html('Convert to C&deg');
            $('#temp').addClass('f').removeClass('c');
        }
    };
    $('#convBtn').on('click', function() {
        $('#convBtn').addClass('flip');
        setTimeout(function() {
            convert();
        }, 500);
        setTimeout(function() {
            $('#convBtn').removeClass('flip')
        }, 1000);
    });
    var intCheck = function() {
        if (window.navigator.onLine) {
            getWeather();
        } else {
            $('#errorWrapper').toggle();
        }
    }
    $('#getForm').submit(function(e) {
        e.preventDefault();
        intCheck();
    });
    $('#submitBtn').on('click', function() {
        intCheck();
    });
    $('span.glyphicon-remove-circle').on('click', function() {
        $('#errorWrapper').toggle();
    });
});