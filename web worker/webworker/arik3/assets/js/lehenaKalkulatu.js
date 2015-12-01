function isLehena(n) {
    var i = 2;
    var lehenak=[];
    if (n == 2) return true;
    for (; i < n; ++i) {
        if (n % i == 0) {
            return false;
        }
        // console.log("Kalkulatzen:" + i);
    }
    //clearInterval(erloju);
    //document.getElementById("irteera").innerHTML += i;
    return true;
}

this.onmessage = function(event) {
    var lehena = isLehena(event.data);
    this.postMessage(lehena);
};
