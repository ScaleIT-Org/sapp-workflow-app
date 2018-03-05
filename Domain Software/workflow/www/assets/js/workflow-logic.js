$( document ).ready(function() {

  // FOOTER BUTTON 1
  document.querySelector("#qrcode-btn").addEventListener("click", function (e) {
    document.getElementById("start").style.display = "none";
    document.getElementById("qrcode").style.display = "block";
    document.getElementById("qrcode-btn").disabled= true;
    document.getElementById("progressbar-bar").style.width = "20%";
  });

  //QR CODE SCANNER
  document.querySelector("#scanner").addEventListener("qrcode-decoded", function (e) {
    console.log('QR-Code Scanned:');console.log(e.detail);
    document.getElementById("qr-msg").innerHTML =" QR-Code Message: <b>" + e.detail; + "</b>"
    document.getElementById("progressbar-bar").style.width = "35%";
    document.getElementById("truck-btn").disabled= false;
    document.getElementById("truck-check").name = e.detail;
  });

    // FOOTER BUTTON 2
    document.querySelector("#truck-btn").addEventListener("click", function (e) {
        document.getElementById("qrcode").style.display = "none";
        document.getElementById("truck").style.display = "block";
        document.getElementById("progressbar-bar").style.width = "50%";
        document.getElementById("truck-btn").disabled= true;
        document.getElementById("photo-btn").disabled= false;
    });

    // FOOTER BUTTON 3
    document.querySelector("#photo-btn").addEventListener("click", function (e) {
        document.getElementById("truck").style.display = "none";
        document.getElementById("photo").style.display = "block";
        document.getElementById("progressbar-bar").style.width = "75%";
        document.getElementById("photo-btn").disabled= true;
      });
});