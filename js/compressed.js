// Code minified with JSCompress
$(document).ready(function() {
    var a, b = function(b) {
            b = $("#userInput").val(), $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + b + ",us&appid=b2a13a7aee736f88f846aac0a54ef989", function(b) {
                a = b.main.temp, $("#description").text(b.weather[0].description), $("#name").text(b.name), tempF = Math.round(1.8 * (a - 273) + 32), tempC = Math.round(10 * (a - 273)) / 10, $("#temp").html(tempF + "&deg F"), $("#temp").addClass("f"), $("#windSpeed").text(Math.round(b.wind.speed / .44704 * 10) / 10 + " mph");
                var d, c = b.wind.deg;
                d = c > 348.75 || c <= 11.25 ? "N" : c > 11.25 && c <= 33.75 ? "NNE" : c > 33.75 && c <= 56.25 ? "NE" : c > 56.25 && c <= 78.75 ? "ENE" : c > 78.75 && c <= 101.25 ? "E" : c > 101.25 && c <= 123.75 ? "ESE" : c > 123.75 && c <= 146.25 ? "SE" : c > 146.25 && c <= 168.75 ? "SSE" : c > 168.75 && c <= 191.25 ? "S" : c > 191.25 && c <= 213.75 ? "SSW" : c > 213.75 && c <= 236.25 ? "SW" : c > 236.25 && c <= 258.75 ? "WSW" : c > 258.75 && c <= 281.25 ? "W" : c > 281.25 && c <= 303.75 ? "WNW" : c > 303.75 && c <= 326.75 ? "NW" : c > 326.75 && c <= 348.75 ? "NNW" : "Calm", $("#windDir").text(d + " @");
                var e = b.weather[0].icon;
                $("#weatherIcon").attr("src", "http://openweathermap.org/img/w/" + e + ".png")
            }), $("#infoDiv").is(":hidden") && $("#infoDiv").slideDown("slow")
        },
        c = function() { $("#temp").hasClass("f") ? ($("#temp").html(Math.round(10 * (a - 273)) / 10 + " C&deg"), $("#btnText").html("Convert to F&deg"), $("#temp").addClass("c").removeClass("f")) : $("#temp").hasClass("c") && ($("#temp").html(Math.round(1.8 * (a - 273) + 32) + " F&deg"), $("#btnText").html("Convert to C&deg"), $("#temp").addClass("f").removeClass("c")) };
    $("#convBtn").on("click", function() { $("#convBtn").addClass("flip"), setTimeout(function() { c() }, 500), setTimeout(function() { $("#convBtn").removeClass("flip") }, 1e3) });
    var d = function() { window.navigator.onLine ? b() : $("#errorWrapper").toggle() };
    $("#getForm").submit(function(a) { a.preventDefault(), d() }), $("#submitBtn").on("click", function() { d() }), $("span.glyphicon-remove-circle").on("click", function() { $("#errorWrapper").toggle() })
});