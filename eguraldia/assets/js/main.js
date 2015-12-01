btn = document.getElementById("btn");
item = document.getElementById("combobox");
var helbidea = "http://api.openweathermap.org/data/2.5/forecast/daily?q=bilbao,es?id=524901&APPID=dca63b14488bc0e82e3f2534d85b3bab";
var ajx = function ajx() {
    $.ajax({
        url: helbidea,
        success: function(result) {
        hiruEgunekoEguraldia(result);
        }
    });

};
combobox.addEventListener("change", eguraldiaJakin);

function eguraldiaJakin() {
    /* console.log(item.value);
     console.log(item.selectedIndex);
     console.log(item.options[item.selectedIndex].text);
     */
    indizea = item.selectedIndex;
    if (indizea === 0) {
        helbidea = "http://api.openweathermap.org/data/2.5/forecast/daily?q=bilbao,es?id=524901&APPID=dca63b14488bc0e82e3f2534d85b3bab";
    } else if (indizea === 1) {
        helbidea = "http://api.openweathermap.org/data/2.5/forecast/daily?id=3110044?id=524901&APPID=dca63b14488bc0e82e3f2534d85b3bab";
    } else if (indizea === 2) {
        helbidea = "http://api.openweathermap.org/data/2.5/forecast/daily?id=3104499?id=524901&APPID=dca63b14488bc0e82e3f2534d85b3bab";
    }
    //console.log(helbidea);

}
function hiruEgunekoEguraldia(result){
    //console.log(result);
    console.log("Hiria"+ "  "+result.city.name);
    var eguraldia=[];
    for (var i = 0; i < 3; i++) {
        console.log("eguna"+ "  " +i);
        console.log( "eguraldia:"+"  " +result.list[i].weather[0].description);
       var tenperatura=result.list[i].temp.day-273;
        console.log("teperatura"+" "+ parseInt(tenperatura));
    };
    
}


if (btn) {
    btn.addEventListener("click", ajx, false);
}
