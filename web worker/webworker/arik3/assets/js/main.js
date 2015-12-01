var erloju;
var num = 2227644437;
window.onload = function() {

    var bistaratuBotoia = document.getElementById("bistaratu");
    bistaratuBotoia.onclick = function() {
        erloju = setInterval(bistaratu, 100);
    };
};

function bistaratu() {
    var irteera = document.getElementById("irteera");
    irteera.innerHTML = irteera.innerHTML + " #";
}
var kalkulatuBotoia = document.getElementById("kalkulatu");
var worker = new Worker("assets/js/lehenaKalkulatu.js");
kalkulatuBotoia.onclick = function() {
    worker.postMessage(num);
};
//erantzuna jaso eta erakutsi
worker.addEventListener('message', function(e) {
    var lehena = e.data;
    console.log("lehena da :"+" "+lehena);
    clearInterval(erloju);
    irteera.innerHTML = lehena;

});

