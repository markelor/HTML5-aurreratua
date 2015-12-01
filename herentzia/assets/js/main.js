var Jokalari = function Jokalari(izena, indarra, osasuna) {
    this.izena = izena;
    this.indarra = indarra;
    this.osasuna = osasuna;
};
Jokalari.prototype.borrokatu = function borrokatu(jokalari) {
    if (Math.random() * this.indarra > jokalari.indarra) {
        jokalari.osasuna -= this.indarra;
    } else {
        this.osasuna -= jokalari.indarra;
    }

};
Jokalari.prototype.izenaBistaratu = function izenaBistaratu() {
    return this.izena;
};
Array.prototype.zelaiaAusasOrdenatu = function zelaiaAusasOrdenatu() {
    for (var i = this.length - 1; i > 0; i--) {
        //algoritmo honen bitartez, ausas posizioa bat lortuko dugu,
        //eta i uneko posizioagatik ordezkatuko da, horrela gure arraya nahastuz.
        var j = Math.floor(i * Math.random());
        //lag aldagaian, algoritmoaren bitartez kalkulatu dugun
        // posizioan dagoen jokalaria gordetzen da
        var lag = this[j];
        //kalkulatu dugun posizioan, uneko i jokalaria gordetzen dugu
        this[j] = this[i];
        //azkenik, uneko i posizioan lag aldagaian gorde dugun balio txertatuko dugu
        this[i] = lag;
    }
    return this;

};

var Gizaki = function Gizaki(izena, indarra, osasuna) {
    Jokalari.apply(this, [izena, indarra, osasuna]);
};
Gizaki.prototype = new Jokalari();
Gizaki.prototype.constructor = Gizaki;

var Makina = function Makina(izena, indarra, osasuna) {
    Jokalari.apply(this, [izena, indarra, osasuna]);
};
Makina.prototype = new Jokalari();
Makina.prototype.constructor = Makina;

var Estralurtarra = function Estralurtarra(izena, indarra, osasuna) {
    Jokalari.apply(this, [izena, indarra, osasuna]);
    //gainezarri nahi bada
    //this.izenaBistaratu = function izenaBistaratu() {};
};
Estralurtarra.prototype = new Jokalari();
Estralurtarra.prototype.constructor = Estralurtarra;

var jokalariakSortu = function jokalariakSortu() {
    var zelaia = [];
    for (var i = 1; i <= 50; i++) {
        var gizaki = new Gizaki("g" + i, 70, 150);
        var makina = new Makina("m" + i, Math.round(Math.random() * 100 + 1), 130);
        var estralurtarra = new Estralurtarra("e" + i, Math.round(Math.random() * 85 + 1), 150);
        zelaia.push(gizaki, makina, estralurtarra);
    }

    //borroka hasiko da
    guztiakBorrokatu(zelaia);

};
var guztiakBorrokatu = function guztiakBorrokatu(zelaia) {
    //zelaia nahastu lehen aldiz
    var zelaiaNahastuta = zelaia.zelaiaAusasOrdenatu();
    //zelaian jokalari bakarra geratu arte borrokatu
    while (zelaiaNahastuta.length !== 1) {
        //zelaia beti nahastu
        zelaiaNahastuta = zelaiaNahastuta.zelaiaAusasOrdenatu();
        //binaka jokalariak elkarren aurka jarri
        for (var i = 0; i < zelaiaNahastuta.length - 1; i = i + 2) {
            jokalari1 = zelaiaNahastuta[i];
            jokalari1.borrokatu(zelaiaNahastuta[i + 1]);
            if (zelaiaNahastuta[i].osasuna <= 0 && zelaiaNahastuta[i + 1].osasuna <= 0) {
                console.log("osasuna" + zelaiaNahastuta[i].osasuna);
                zelaiaNahastuta.splice(i, 2);
            } else if (zelaiaNahastuta[i].osasuna <= 0) {
                zelaiaNahastuta.splice(i, 1);
            } else if (zelaiaNahastuta[i + 1].osasuna <= 0) {
                zelaiaNahastuta.splice(i + 1, 1);
            }
        }

    }
    console.log("irabazlea");
    alert("irabazlea" + " " + zelaiaNahastuta[0].izenaBistaratu() + " " + "da");
    console.log(zelaiaNahastuta);

};

var jokoaHasi = function jokoaHasi() {
    jokalariakSortu();
};
btn = document.getElementById("btn");
if (btn) {
    btn.addEventListener("click", jokoaHasi, false);


}
