$( document ).ready(function() {

  // FOOTER BUTTON 1
  document.querySelector("#qrcode-btn").addEventListener("click", function (e) {
    document.getElementById("next-btn").classList.add("not-active");
    document.getElementById("prev-btn").classList.remove("not-active");
    document.getElementById("start").style.display = "none";
    document.getElementById("qrcode").style.display = "block";
    document.getElementById("qrcode-btn").disabled= true;
    document.getElementById("progressbar-bar").style.width = "20%";
  });

  //QR CODE SCANNER
  document.querySelector("#scanner").addEventListener("qrcode-decoded", function (e) {
    document.getElementById("qr-msg").innerHTML =" QR-Code Message: <br><b>" + JSON.stringify(JSON.parse(e.detail), undefined, 4); + "</b>"
    document.getElementById("progressbar-bar").style.width = "35%";
    document.getElementById("truck-btn").disabled= false;
    document.getElementById("truck-check").name = e.detail;
    document.getElementById("next-btn").classList.remove("not-active");
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
    document.getElementById("camera2").style.display = "block";
    document.getElementById("progressbar-bar").style.width = "75%";
    document.getElementById("photo-btn").disabled= true;
  });

  //Next button
  document.querySelector("#next-btn").addEventListener("click", function (e) {
    if (!document.getElementById("photo-btn").disabled) {
      document.getElementById("photo-btn").click();
    }
    if (!document.getElementById("truck-btn").disabled) {
      document.getElementById("truck-btn").click();
    }
    if (!document.getElementById("qrcode-btn").disabled) {
      document.getElementById("qrcode-btn").click();
    }
    if(snapshottaken == true){
      document.getElementById("next-btn").style.display = "none";
      document.getElementById("progressbar-bar").style.width = "100%";
      document.getElementById("progressbar-bar").style.backgroundColor = "#4BB543";
    }
  });

   //Prev button
   document.querySelector("#prev-btn").addEventListener("click", function (e) {
    if (document.getElementById("qrcode").style.display == "block") {
      document.getElementById("prev-btn").classList.add("not-active");
      document.getElementById("next-btn").classList.remove("not-active");
      document.getElementById("start").style.display = "block";
      document.getElementById("truck").style.display = "none";
      document.getElementById("qrcode").style.display = "none";
      document.getElementById("camera2").style.display = "none";
      document.getElementById("qrcode-btn").disabled = false;
      document.getElementById("truck-btn").disabled = true;
      document.getElementById("photo-btn").disabled = true;
    }
    if (document.getElementById("truck").style.display == "block") {
      document.getElementById("start").style.display = "none";
      document.getElementById("truck").style.display = "none";
      document.getElementById("qrcode").style.display = "block";
      document.getElementById("camera2").style.display = "none";
      document.getElementById("qrcode-btn").disabled = true;
      document.getElementById("truck-btn").disabled = false;
      document.getElementById("photo-btn").disabled = true;
    }
    if (document.getElementById("camera2").style.display == "block") {
      document.getElementById("qrcode-btn").disabled = true;
      document.getElementById("truck-btn").disabled = true;
      document.getElementById("photo-btn").disabled = false;
      document.getElementById("start").style.display = "none";
      document.getElementById("truck").style.display = "block";
      document.getElementById("qrcode").style.display = "none";
      document.getElementById("camera2").style.display = "none";
    }
  });

});