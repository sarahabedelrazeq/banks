const style = `<style>
.cheque-container {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.cheque-container #overview {
  position: relative;
}

.cheque-container .label {
  position: absolute;
  cursor: move;
  font-size: 18px;
  text-align: center;
}


.cheque-container p {
  margin: 0 0 10px;
}

.cheque-container #tafk_lbl {
  font-size: 15px;
  text-transform: capitalize;
  margin-top: 15px;
}

.cheque-container .crossing_lbl_horizontal {
  position: absolute;
  width: 140px;
  font-size: 13px;
  text-align: center;
  padding: 4px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-weight: bold;
  z-index: 300;
  top: 63px;
  left: 6.4cm;
  transform: rotate(0deg);
}

.cheque-container .crossing_lbl_diagonal {
  position: absolute;
  width: 120px;
  font-size: 13px;
  text-align: center;
  padding: 4px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  font-weight: bold;
  z-index: 300;
  margin-top: 10px;
  top: 30px;
  left: -10px;
  transform: rotate(-45deg);
}

@media print {
  html {
    direction: ltr;
  }
  body {
    margin: 0;
    padding: 0;
  }
  main {
    padding: 0;
  }
  @page {
    margin: 0;
    padding: 0;
  }
  #cheque_img {
    opacity: 0;
  }
  #sidebar {
    display: none;
  }
}
</style>`;

const content = `
<div id="cheque-container" class="cheque-container">
<div id="overview">
  <img src="" id="cheque_img" alt="Cheque img" draggable="false" />
  <p id="crossing_lbl" class="label crossing_lbl_horizontal"></p>
  <p id="date_lbl" class="label" draggable="true"></p>
  <p id="payee_lbl" class="label" draggable="true"></p>
  <p id="amount_lbl" class="label" draggable="true"></p>
  <p
    id="amount2_lbl"
    style="display: none; top: 4cm; left: 15cm; width: 40px"
    class="label"
  ></p>
  <p
    id="tafk_lbl"
    class="label"
    draggable="true"
    style="display: none"
  ></p>
  <p
    id="for_lbl"
    class="label"
    draggable="true"
    style="display: none"
  ></p>
  <!-- optional -->
  <p
    id="place_lbl"
    class="In_cheque place_lbl"
    style="
      top: 0.9cm;
      left: 17cm;
      width: 80px;
      text-align: center;
      display: block;
    "
  ></p>
  <p id="cur_lbl" class="In_cheque" style="display: none"></p>
  <p id="acc_num_lbl" class="In_cheque" style="display: none"></p>
  <pre
    id="sign_name_lbl"
    class="In_cheque sign_name_lbl"
    style="display: none"
  ></pre>
  <p id="seb_date_lbl" class="In_cheque" style="display: none"></p>
  <p id="Due_date_lbl" class="In_cheque" style="display: none"></p>
</div>
</div>`;

const onSubmit = (
  bank,
  crossing_lbl,
  date_lbl,
  payee_lbl,
  amount_lbl,
  tafk_lbl,
  for_lbl
) => {
  var newWin = window.open();
  newWin.document.write(style);
  newWin.document.write(content);


  var MyDate = newWin.document.getElementById("date_lbl");
  MyDate.innerHTML = date_lbl.split("-").reverse().join("/");

  newWin.document.getElementById("crossing_lbl").innerHTML = crossing_lbl;

  var Payee = newWin.document.getElementById("payee_lbl");
  Payee.innerHTML = payee_lbl;

  var Amount = newWin.document.getElementById("amount_lbl");
  const Amount2 = newWin.document.getElementById("amount2_lbl");
  const value = amount_lbl.toString().split(".");
  Amount.innerHTML = `#${value[0]}#`;
  Amount2.innerHTML = value.length > 1 ? value[1] : "000";

  var Tafk = newWin.document.getElementById("tafk_lbl");
  Tafk.innerHTML = tafk_lbl;

  var CheckFor = newWin.document.getElementById("for_lbl");
  CheckFor.innerHTML = for_lbl;

  var Place = newWin.document.getElementById("place_lbl");
  var cur_text = newWin.document.getElementById("cur_lbl");
  var acc_num = newWin.document.getElementById("acc_num_lbl");
  var Sign_name = newWin.document.getElementById("sign_name_lbl");
  var Seb_date = newWin.document.getElementById("seb_date_lbl");
  var DueDate = newWin.document.getElementById("Due_date_lbl");

  var Sign_Name_div = newWin.document.getElementById("sign_Name_div");
  var DueDate_div = newWin.document.getElementById("DueDate_div");

  newWin.document.getElementById("crossing_lbl").className = "label crossing_lbl_diagonal"

  switch (bank) {
    case "JOR_ALL":
      newWin.document.getElementById("crossing_lbl").className = "label crossing_lbl_horizontal"
      //CheckImg.src = "https://print.cheque-at.com/img/checks/jor-all.jpg";
      MyDate.style.cssText = "top : 1.5cm ; left : 1.10cm; width:100px ";
      Payee.style.cssText = "top : 2.7cm ; left : 1.2cm  ; width : 530px";
      Amount.style.cssText = "top : 4.0cm ; left : 12.1cm  ; width : 100px";
      Amount2.style.cssText =
        "top : 4.0cm ; left : 15.0cm  ; width : 40px; display : block ";
      Tafk.style.cssText =
        "top : 3.1cm ; left : 2.1cm   ; width : 305px;line-height : 25px";
      CheckFor.style.cssText =
        "top : 4.2cm ; left : 1.2cm   ; width : 330px; font-size : 17px";
      break;

    // ----------------- Palestine Checks ----------------- //

    case "ARAB-P": // البنك العربي فلسطين //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-arab.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.8cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.15cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.8cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.95cm   ; width : 245px";
      CheckFor.style.cssText = "display : none";
      break;

    case "pib": // بنك الاستثمار الفلسطيني //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-pib.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.9cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.25cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.9cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 3.05cm   ; width : 245px";
      break;

    case "jcb": //  البنك التجاري الأردني //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-jcb.jpg";
      MyDate.style.cssText = "top : 4.8cm ; left : 7.9cm; width:100px";
      Payee.style.cssText = "top : 2.8cm ; left : 3.25cm  ; width : 240px";
      Amount.style.cssText = "top : 3.45cm ; left : 12.9cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 3.05cm   ; width : 245px";
      break;

    case "cab": //  بنك القاهرة عمان //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-cab.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.9cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 2.5cm  ; width : 270px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.6cm  ; width : 100px";
      Tafk.style.cssText = "top : 3.15cm ; left : 2.5cm   ; width : 270px";
      break;

    case "pisb": //  البنك الاسلامي الفلسطيني //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-pisb.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.9cm; width:100px";
      Payee.style.cssText =
        "top : 2.7cm ; left : 3.15cm  ; width : 255px; font-size: 17px";
      Amount.style.cssText = "top : 3.30cm ; left : 12.85cm  ; width : 95px";
      Tafk.style.cssText = "top : 3.15cm ; left : 2.65cm   ; width : 270px";
      break;

    case "tnb": // البنك الوطني //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-tnb.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.8cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.15cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.8cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.95cm   ; width : 245px";
      CheckFor.style.cssText = "display : none";
      break;

    case "pls": // بنك فلسطين //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-pls.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.8cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.15cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.8cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.95cm   ; width : 245px";
      CheckFor.style.cssText = "display : none";
      break;

    case "quds": // بنك القدس //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-quds.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.8cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.15cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.8cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.95cm   ; width : 245px";
      CheckFor.style.cssText = "display : none";
      break;

    case "inb": // البنك الوطني الاسلامي //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-inb.jpg";
      MyDate.style.cssText =
        "top : 4.5cm ; left : 8.6cm; width:100px; font-size: 16px";
      Payee.style.cssText = "top : 2.8cm ; left : 3.10cm  ; width : 240px";
      Amount.style.cssText = "top : 3.9cm ; left : 12.45cm  ; width : 110px";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.4cm   ; width : 260px";
      CheckFor.style.cssText = "display : none";
      break;

    case "iskan": // بنك الاسكان //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-iskan.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.8cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.15cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.8cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.95cm   ; width : 245px";
      CheckFor.style.cssText = "display : none";
      break;

    case "aibp": // البنك الاسلامي العربي //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/pl-aibp.jpg";
      MyDate.style.cssText = "top : 4.7cm ; left : 7.8cm; width:100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.15cm  ; width : 240px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.8cm  ; width : 85px";
      Tafk.style.cssText = "top : 3.15cm ; left : 2.95cm   ; width : 245px";
      CheckFor.style.cssText = "display : none";
      break;

    // ----------------- UAE Checks ----------------- //

    case "ADIB": // بنك أبو ظبي الاسلامي //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 7.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/UAE-ADIB.jpg";
      MyDate.style.cssText = "top : 1.2cm ; left : 12.4cm; width:100px";
      Payee.style.cssText =
        "top : 1.9cm ; left : 2.6cm  ; width : 220px; font-size: 17px";
      Amount.style.cssText = "top : 3.02cm ; left : 12.8cm  ; width : 110px";
      Tafk.style.cssText = "top : 2.8cm ; left : 1.4cm   ; width : 320px";
      CheckFor.style.cssText =
        "top : 3.9cm ; left : 0.8cm   ; width : 350px; font-size: 17px";
      break;

    case "DIB": // بنك دبي الاسلامي  //
      //CheckDiv.style.cssText = "width : 16cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/UAE-DIB.jpg";
      MyDate.style.cssText = "top : 1cm ; left : 12cm ; width : 100px";
      Payee.style.cssText = "top : 2.2cm ; left : 2cm  ; width : 450px";
      Amount.style.cssText = "top : 2.85cm ; left : 12.4cm  ; width : 110px";
      Tafk.style.cssText = "top : 2.6cm ; left : 1.4cm   ; width : 355px";
      CheckFor.style.cssText = "top : 3.7cm ; left : 1.4cm   ; width : 355px";
      break;

    case "fad": // بنك أبو ظبي الأول  //
      //CheckDiv.style.cssText = "width : 15.7cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-fad.jpg";
      MyDate.style.cssText =
        "top : 2.18cm ; left : 12.25cm ; width : 85px; font-size: 16px";
      Payee.style.cssText = "top : 2.85cm ; left : 3.35cm  ; width : 335px";
      Amount.style.cssText =
        "top : 4.5cm ; left : 12.4cm  ; width : 80px; font-size: 16px";
      Tafk.style.cssText = "top : 3.55cm ; left : 1.5cm   ; width : 480px";
      CheckFor.style.cssText = "top : 4.65cm ; left : 0.9cm   ; width : 380px";
      break;

    case "Shib": // مصرف الشارقة الاسلامي  //
      //CheckDiv.style.cssText = "width : 18.6cm ; height : 9.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-shib.jpg";
      MyDate.style.cssText = "top : 0.75cm ; left : 14.15cm ; width : 100px";
      Payee.style.cssText = "top : 3.5cm ; left : 2.6cm  ; width : 500px";
      Amount.style.cssText = "top : 4.45cm ; left : 14.7cm  ; width : 110px";
      Tafk.style.cssText = "top : 4.25cm ; left : 1.5cm   ; width : 390px";
      CheckFor.style.cssText = "top : 5.55cm ; left : 1.85cm   ; width : 380px";
      break;

    case "Shib2": // مصرف الشارقة الاسلامي  //
      //CheckDiv.style.cssText = "width : 18.6cm ; height : 9.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-shib2.jpg";
      MyDate.style.cssText = "top : 1.8cm ; left : 14.15cm ; width : 100px";
      Payee.style.cssText = "top : 3.5cm ; left : 2.6cm  ; width : 500px";
      Amount.style.cssText = "top : 4.45cm ; left : 14.7cm  ; width : 110px";
      Tafk.style.cssText = "top : 4.25cm ; left : 1.5cm   ; width : 390px";
      CheckFor.style.cssText = "top : 5.55cm ; left : 1.85cm   ; width : 380px";
      break;

    case "rak": // بنك رأس الخيمة الوطني  //
      //CheckDiv.style.cssText = "width : 20.4cm ; height : 10cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-rak.jpg";
      MyDate.style.cssText = "top : 2.02cm ; left : 15.85cm ; width : 100px";
      Payee.style.cssText = "top : 3.83cm ; left : 3.25cm  ; width : 550px";
      Amount.style.cssText = "top : 5.6cm ; left : 15.9cm  ; width : 120px";
      Tafk.style.cssText = "top : 4.55cm ; left : 2.0cm   ; width : 425px";
      CheckFor.style.cssText = "top : 5.85cm ; left : 1.2cm   ; width : 470px";
      break;

    case "adcb": // بنك أبو ظبي التجاري  //
      //CheckDiv.style.cssText = "width : 19.8cm ; height : 9.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-adcb.jpg";
      MyDate.style.cssText =
        "top : 1.9cm ; left : 15.1cm ; width : 100px; font-size: 19px ";
      Payee.style.cssText =
        "top : 3.6cm ; left : 4.25cm  ; width : 440px; font-size: 19px";
      Amount.style.cssText =
        "top : 5.4cm ; left : 14.9cm  ; width : 120px; font-size: 19px";
      Tafk.style.cssText =
        "top : 4.15cm ; left : 2.0cm   ; width : 410px; line-height: 2.3; font-size: 17px ";
      CheckFor.style.cssText =
        "top : 5.7cm ; left : 1.1cm   ; width : 470px; font-size: 19px";
      break;

    case "adcb3": // بنك أبو ظبي التجاري2  //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-adcb2.jpg";
      MyDate.style.cssText =
        "top : 1.0cm ; left : 12.1cm ; width : 100px; font-size: 16px ";
      Payee.style.cssText =
        "top : 2.1cm ; left : 1.25cm  ; width : 450px; font-size: 18px";
      Amount.style.cssText =
        "top : 2.8cm ; left : 12.25cm  ; width : 100px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 1.65cm   ; width : 350px; line-height: 1.7; font-size: 16px ";
      CheckFor.style.cssText =
        "top : 3.7cm ; left : 0.95cm   ; width : 385px; font-size: 17px";
      break;

    case "cbd": // بنك دبي التجاري  //
      //CheckDiv.style.cssText = "width : 19.5cm ; height : 9.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-cbd.jpg";
      MyDate.style.cssText =
        "top : 2.0cm ; left : 14.75cm ; width : 100px; font-size: 19px ";
      Payee.style.cssText =
        "top : 3.7cm ; left : 3.5cm  ; width : 460px; font-size: 19px";
      Amount.style.cssText =
        "top : 5.45cm ; left : 14.8cm  ; width : 140px; font-size: 19px";
      Tafk.style.cssText =
        "top : 4.15cm ; left : 2.0cm   ; width : 395px; line-height: 2.3; font-size: 17px ";
      CheckFor.style.cssText =
        "top : 5.7cm ; left : 1.1cm   ; width : 455px; font-size: 19px";
      break;

    case "nbd2": // بنك الإمارات دبي الوطني //
      //CheckDiv.style.cssText = "width : 19.3cm ; height : 9.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-nbd3.jpg";
      MyDate.style.cssText =
        "top : 1.9cm ; left : 13.75cm ; width : 100px; font-size: 19px ";
      Payee.style.cssText =
        "top : 3.2cm ; left : 3.2cm  ; width : 510px; font-size: 19px";
      Amount.style.cssText =
        "top : 5.0cm ; left : 14.2cm  ; width : 140px; font-size: 19px";
      Tafk.style.cssText =
        "top : 3.7cm ; left : 2.3cm   ; width : 360px; line-height: 2.2; font-size: 17px ";
      CheckFor.style.cssText =
        "top : 5.2cm ; left : 1.4cm   ; width : 410px; font-size: 19px";
      break;

    case "eib": // الإمارات الاسلامي //
      //CheckDiv.style.cssText = "width : 15.4cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-eib.jpg";
      MyDate.style.cssText =
        "top : 1.75cm ; left : 11.5cm ; width : 100px; font-size: 16px ";
      Payee.style.cssText = "top : 2.35cm ; left : 2.0cm  ; width : 385px";
      Amount.style.cssText = "top : 3.8cm ; left : 11.5cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 1.4cm   ; width : 327px; line-height: 2.0";
      CheckFor.style.cssText =
        "top : 4.0cm ; left : 0.8cm   ; width : 365px; font-size: 16px";
      break;

    case "eib2": // الإمارات الاسلامي2 //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 10.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-eib2.jpg";
      MyDate.style.cssText = "top : 2.5cm ; left : 15.6cm ; width : 100px";
      Payee.style.cssText = "top : 3.35cm ; left : 2.5cm  ; width : 520px";
      Amount.style.cssText = "top : 5.2cm ; left : 15.3cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 3.8cm ; left : 1.7cm   ; width : 440px; line-height: 2.3; font-size: 17px";
      CheckFor.style.cssText = "top : 5.5cm ; left : 1.0cm   ; width : 480px";
      break;

    case "nbf": // بنك الفجيرة الوطني //
      //CheckDiv.style.cssText = "width : 20.2cm ; height : 9.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-nbf.jpg";
      MyDate.style.cssText = "top : 2.0cm ; left : 15.0cm ; width : 100px";
      Payee.style.cssText = "top : 3.0cm ; left : 3.85cm  ; width : 440px";
      Amount.style.cssText = "top : 4.6cm ; left : 16.0cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 1.85cm   ; width : 440px; line-height: 2.0";
      CheckFor.style.cssText = "top : 4.85cm ; left : 0.85cm   ; width : 470px";
      break;

    case "mash": // بنك المشرق //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-mash.jpg";
      MyDate.style.cssText =
        "top : 1.25cm ; left : 12.6cm ; width : 100px; font-size: 17px";
      Payee.style.cssText = "top : 2.2cm ; left : 3.5cm  ; width : 380px";
      Amount.style.cssText = "top : 3.0cm ; left : 12.6cm  ; width : 118px";
      Tafk.style.cssText =
        "top : 2.6cm ; left : 1.5cm   ; width : 370px; line-height: 2.0";
      CheckFor.style.cssText = "top : 3.80cm ; left : 0.75cm   ; width : 410px";
      break;

    case "mash2": // المشرق الذهبي //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-mash2.jpg";
      MyDate.style.cssText =
        "top : 1.15cm ; left : 12.2cm ; width : 100px; font-size: 17px";
      Payee.style.cssText = "top : 2.1cm ; left : 3.5cm  ; width : 350px";
      Amount.style.cssText = "top : 2.7cm ; left : 12.3cm  ; width : 118px";
      Tafk.style.cssText =
        "top : 2.3cm ; left : 1.5cm   ; width : 360px; line-height: 2.0";
      CheckFor.style.cssText = "top : 3.50cm ; left : 0.75cm   ; width : 410px";
      break;

    case "mash3": // بنك المشرق - اعمال //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 9.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-mash3.jpg";
      MyDate.style.cssText = "top : 2.1cm ; left : 15.7cm ; width : 100px";
      Payee.style.cssText = "top : 3.75cm ; left : 4.0cm  ; width : 490px";
      Amount.style.cssText = "top : 5.55cm ; left : 15.6cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 4.25cm ; left : 1.7cm   ; width : 450px; line-height: 2.0";
      CheckFor.style.cssText = "top : 5.75cm ; left : 0.75cm   ; width : 500px";
      break;

    case "ubl": // يونايتد بنك //
      //CheckDiv.style.cssText = "width : 16.0cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-ubl.jpg";
      MyDate.style.cssText =
        "top : 1.05cm ; left : 12.2cm ; width : 100px; font-size: 16px";
      Payee.style.cssText = "top : 2.15cm ; left : 1.7cm  ; width : 450px";
      Amount.style.cssText =
        "top : 2.85cm ; left : 12.5cm  ; width : 110px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.45cm ; left : 1.9cm   ; width : 340px; line-height: 2.0";
      CheckFor.style.cssText =
        "top : 3.65cm ; left : 0.8cm   ; width : 400px; font-size: 17px";
      break;

    case "invs": // بنك الاستثمار //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 9.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-invs.jpg";
      MyDate.style.cssText =
        "top : 1.75cm ; left : 15.8cm ; width : 100px; font-size: 19px";
      Payee.style.cssText = "top : 3.6cm ; left : 4.15cm  ; width : 450px";
      Amount.style.cssText =
        "top : 5.3cm ; left : 15.3cm  ; width : 130px; font-size: 19px";
      Tafk.style.cssText =
        "top : 4.1cm ; left : 1.9cm   ; width : 430px; line-height: 2.0; font-size: 17px";
      CheckFor.style.cssText =
        "top : 5.55cm ; left : 0.8cm   ; width : 500px; font-size: 17px";
      break;

    case "hilal": // مصرف الهلال //
      //CheckDiv.style.cssText = "width : 15.9cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-hilal.jpg";
      MyDate.style.cssText =
        "top : 1.0cm ; left : 12.2cm ; width : 100px; font-size: 17px";
      Payee.style.cssText =
        "top : 1.9cm ; left : 2.8cm  ; width : 385px; font-size: 17px";
      Amount.style.cssText =
        "top : 3.4cm ; left : 12.35cm  ; width : 115px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.25cm ; left : 1.35cm   ; width : 360px; line-height: 1.9; font-size: 16px";
      CheckFor.style.cssText =
        "top : 3.5cm ; left : 0.8cm   ; width : 400px; font-size: 16px";
      break;

    case "shar": // بنك الشارقة //
      //CheckDiv.style.cssText = "width : 19.9cm ; height : 9.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-shar.jpg";
      MyDate.style.cssText =
        "top : 1.3cm ; left : 15.6cm ; width : 100px; font-size: 18px";
      Payee.style.cssText =
        "top : 3.25cm ; left : 4.8cm  ; width : 470px; font-size: 18px";
      Amount.style.cssText =
        "top : 5.1cm ; left : 15.2cm  ; width : 130px; font-size: 18px";
      Tafk.style.cssText =
        "top : 3.7cm ; left : 2.7cm   ; width : 435px; line-height: 2.1; font-size: 16px";
      CheckFor.style.cssText =
        "top : 5.15cm ; left : 0.8cm   ; width : 505px; font-size: 16px";
      break;

    case "nile": // بنك النيلين //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-nile.jpg";
      MyDate.style.cssText =
        "top : 0.9cm ; left : 12.7cm ; width : 100px; font-size: 18px";
      Payee.style.cssText =
        "top : 2.8cm ; left : 4.0cm  ; width : 360px; font-size: 18px";
      Amount.style.cssText =
        "top : 4.15cm ; left : 12.6cm  ; width : 140px; font-size: 18px";
      Tafk.style.cssText =
        "top : 3.3cm ; left : 1.6cm   ; width : 325px; line-height: 1.5; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.45cm ; left : 0.6cm   ; width : 400px; font-size: 16px";
      break;

    case "nbq": // بنك ام القيوين //
      //CheckDiv.style.cssText = "width : 19.4cm ; height : 9.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-nbq.jpg";
      MyDate.style.cssText =
        "top : 1.7cm ; left : 14.8cm ; width : 100px; font-size: 18px";
      Payee.style.cssText =
        "top : 3.3cm ; left : 4.2cm  ; width : 415px; font-size: 18px";
      Amount.style.cssText =
        "top : 5.2cm ; left : 14.55cm  ; width : 160px; font-size: 18px";
      Tafk.style.cssText =
        "top : 4.0cm ; left : 1.8cm   ; width : 415px; line-height: 1.5; font-size: 16px";
      CheckFor.style.cssText =
        "top : 5.45cm ; left : 0.7cm   ; width : 485px; font-size: 16px";
      break;

    case "misr2": // بنك مصر //
      //CheckDiv.style.cssText = "width : 16.0cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-misr2.jpg";
      MyDate.style.cssText =
        "top : 1.15cm ; left : 12.1cm ; width : 100px; font-size: 15px";
      Payee.style.cssText =
        "top : 2.3cm ; left : 3.5cm  ; width : 340px; font-size: 15px";
      Amount.style.cssText =
        "top : 3.05cm ; left : 11.8cm  ; width : 160px; font-size: 16px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 1.5cm   ; width : 380px; line-height: 1.8; font-size: 15px";
      CheckFor.style.cssText =
        "top : 3.9cm ; left : 0.6cm   ; width : 415px; font-size: 15px";
      break;

    case "ajmn": // مصرف عجمان //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-ajmn.jpg";
      MyDate.style.cssText =
        "top : 1.2cm ; left : 12.2cm ; width : 100px; font-size: 15px";
      Payee.style.cssText =
        "top : 2.35cm ; left : 3.6cm  ; width : 340px; font-size: 15px";
      Amount.style.cssText =
        "top : 3.1cm ; left : 12.5cm  ; width : 120px; font-size: 16px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 1.6cm   ; width : 380px; line-height: 1.8; font-size: 15px";
      CheckFor.style.cssText =
        "top : 3.9cm ; left : 0.6cm   ; width : 415px; font-size: 15px";
      break;

    case "arab4": // البنك العربي //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 10.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/uae-arab4.jpg";
      MyDate.style.cssText = "top : 2.1cm ; left : 16.2cm ; width : 100px";
      Payee.style.cssText = "top : 3.35cm ; left : 4.4cm  ; width : 462px";
      Amount.style.cssText = "top : 5.3cm ; left : 15.6cm  ; width : 165px";
      Tafk.style.cssText =
        "top : 4.0cm ; left : 2.0cm   ; width : 455px; line-height: 2.3";
      CheckFor.style.cssText = "top : 5.5cm ; left : 0.7cm   ; width : 525px";
      break;

    // ----------------- Saudi Arabia Checks ----------------- //

    case "NCB-Tajir": // البنك الاهلي تاجر //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-ncb-co.jpg";
      MyDate.style.cssText = "top : 0.2cm ; left : 16.2cm ; width : 100px";
      Payee.style.cssText = "top : 3.0cm ; left : 3.6cm  ; width : 470px";
      Amount.style.cssText = "top : 3.8cm ; left : 16.8cm  ; width : 100px";
      Tafk.style.cssText = "top : 3.5cm ; left : 2.8cm   ; width : 420px";
      CheckFor.style.cssText = "top : 4.6cm ; left : 1.8cm   ; width : 460px";
      Place.style.cssText =
        "top : 0.9cm ; left : 17.0cm   ; width : 80px; text-align: center; display : block ";

      break;

    case "NCB-wessam": // البنك الاهلي وسام //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-ncb-wessam.jpg";
      MyDate.style.cssText = "top : 0.4cm ; left : 13.05cm ; width : 100px";
      Payee.style.cssText = "top : 2.6cm ; left : 3.2cm  ; width : 360px";
      Amount.style.cssText = "top : 3.25cm ; left : 13.95cm  ; width : 90px";
      Tafk.style.cssText = "top : 2.95cm ; left : 2.3cm   ; width : 380px";
      CheckFor.style.cssText = "top : 3.9cm ; left : 1.15cm   ; width : 360px";
      Place.style.cssText =
        "top : 0.9cm ; left : 13.5cm   ; width : 80px; display : block ";

      break;

    case "NCB3": // البنك الاهلي 2 //
      //CheckDiv.style.cssText = "width : 19.1cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-ncb3.jpg";
      MyDate.style.cssText = "top : 0.3cm ; left : 14.5cm ; width : 100px";
      Payee.style.cssText = "top : 3.35cm ; left : 3.1cm  ; width : 425px";
      Amount.style.cssText = "top : 4.1cm ; left : 15.1cm  ; width : 120px";
      Tafk.style.cssText = "top : 3.75cm ; left : 2.5cm   ; width : 430px";
      CheckFor.style.cssText =
        "top : 4.8cm ; left : 0.9cm   ; width : 420px; font-size: 16px";
      Place.style.cssText =
        "top : 0.8cm ; left : 14.7cm   ; width : 100px; display : block ";

      break;

    case "snb": // البنك الأهلي السعودي //
      //CheckDiv.style.cssText = "width : 20.4cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-snb.jpg";
      MyDate.style.cssText = "top : 0.5cm ; left : 15.3cm ; width : 100px";
      Payee.style.cssText = "top : 3.0cm ; left : 2.9cm  ; width : 520px";
      Amount.style.cssText = "top : 3.8cm ; left : 16.1cm  ; width : 140px";
      Tafk.style.cssText = "top : 3.4cm ; left : 2.4cm   ; width : 450px";
      CheckFor.style.cssText =
        "top : 4.5cm ; left : 0.8cm   ; width : 550px; font-size: 16px";
      Place.style.cssText =
        "top : 1.1cm ; left : 15.1cm   ; width : 150px; display : block; font-size: 16px ";

      break;

    case "riyad": // بنك الرياض //
      //CheckDiv.style.cssText = "width : 20.3cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-riyad.jpg";
      MyDate.style.cssText = "top : 0.35cm ; left : 15.6cm ; width : 120px";
      Payee.style.cssText =
        "top : 3.3cm ; left : 3.6cm  ; width : 440px ; font-size: 19px";
      Amount.style.cssText = "top : 4.4cm ; left : 15.8cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.9cm ; left : 2.4cm   ; width : 390px ; font-size: 16px ";
      CheckFor.style.cssText =
        "top : 5.15cm ; left : 0.7cm   ; width : 500px ; font-size: 16px";
      Place.style.cssText =
        "top : 1.1cm ; left : 16.1cm   ; width : 100px; display : block ";

      break;

    case "riyad2": // بنك الرياض2 //
      //CheckDiv.style.cssText = "width : 19cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-riyad2.jpg";
      MyDate.style.cssText = "top : 1.9cm ; left : 14.2cm ; width : 120px";
      Place.style.cssText =
        "top : 2.55cm ; left : 14.3cm   ; width : 100px; display : block ";

      Payee.style.cssText =
        "top : 3.4cm ; left : 3.2cm  ; width : 420px ; font-size: 19px";
      Amount.style.cssText = "top : 4.55cm ; left : 14.3cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 4.0cm ; left : 2.6cm   ; width : 350px ; font-size: 16px; line-height: 1.8 ";
      CheckFor.style.cssText =
        "top : 5.25cm ; left : 0.7cm   ; width : 420px ; font-size: 16px";

      break;

    case "SABB": // البنك السعودي البريطاني //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-sabb.jpg";
      MyDate.style.cssText =
        "top : 0.15cm ; left : 13.7cm ; width : 90px; font-size: 15px";
      Payee.style.cssText = "top : 2.8cm ; left : 2.8cm  ; width : 380px ";
      Amount.style.cssText = "top : 3.68cm ; left : 13.45cm  ; width : 110px";
      Tafk.style.cssText = "top : 3.2cm ; left : 2cm   ; width : 330px";
      CheckFor.style.cssText = "top : 4.15cm ; left : 1cm   ; width : 400px";
      Place.style.cssText =
        "top : 0.65cm ; left : 14.35cm   ; width : 65px; font-size: 14px; display : block ";

      break;

    case "SABB2": // البنك السعودي البريطاني2 //
      //CheckDiv.style.cssText = "width : 20.2cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-sabb2.jpg";
      MyDate.style.cssText =
        "top : 0.15cm ; left : 16.3cm ; width : 90px; font-size: 17px";
      Payee.style.cssText = "top : 3.5cm ; left : 3.0cm  ; width : 460px ";
      Amount.style.cssText = "top : 4.47cm ; left : 15.2cm  ; width : 160px";
      Tafk.style.cssText =
        "top : 3.9cm ; left : 2.4cm   ; width : 370px; line-height: 1.8; font-size : 16px";
      CheckFor.style.cssText = "top : 5.1cm ; left : 0.8cm   ; width : 460px";
      Place.style.cssText =
        "top : 0.75cm ; left : 17.0cm   ; width : 80px; font-size: 15px; display : block ";

      break;

    case "rajhi": // مصرف الراحجي //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/rajhi.jpg";
      MyDate.style.cssText =
        "top : 0.4cm ; left : 17.3cm ; width : 80px; font-size: 15px";
      Payee.style.cssText = "top : 2.8cm ; left : 3.7cm  ; width : 480px ";
      Amount.style.cssText = "top : 4cm ; left : 16.9cm  ; width : 110px";
      Tafk.style.cssText = "top : 3.55cm ; left : 2.6cm ; width : 420px";
      CheckFor.style.cssText = "top : 4.85cm ; left : 2.2cm ; width : 450px";
      Place.style.cssText =
        "top : 1.05cm ; left : 17.7cm ; width : 62px; font-size: 14px; display : block ";

      break;

    case "rajhi2": // مصرف الراحجي //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-rajhi2.jpg";
      MyDate.style.cssText =
        "top : 2.35cm ; left : 13.4cm ; width : 80px; font-size: 16px";
      Payee.style.cssText = "top : 3.35cm ; left : 3.4cm  ; width : 360px ";
      Amount.style.cssText = "top : 4.1cm ; left : 13.0cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 3.7cm ; left : 2.7cm ; width : 300px; line-height: 2.5";
      CheckFor.style.cssText = "top : 5.3cm ; left : 1.2cm ; width : 370px";
      Place.style.cssText =
        "top : 2.9cm ; left : 13.2cm ; width : 100px; font-size: 13px; display : block ";

      break;

    case "rajhi3": // مصرف الراحجي //
      //CheckDiv.style.cssText = "width : 17.1cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-rajhi3.jpg";
      MyDate.style.cssText =
        "top : 0.30cm ; left : 13.75cm ; width : 80px; font-size: 15px";
      Payee.style.cssText = "top : 2.35cm ; left : 2.75cm  ; width : 400px ";
      Amount.style.cssText = "top : 3.4cm ; left : 13.3cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.75cm ; left : 2.15cm ; width : 320px; line-height: 2.1";
      CheckFor.style.cssText = "top : 4.1cm ; left : 0.7cm ; width : 410px";
      Place.style.cssText =
        "top : 0.9cm ; left : 13.75cm ; width : 100px; font-size: 14px; display : block ";

      break;

    case "rajhi4": // مصرف الراحجي //
      //CheckDiv.style.cssText = "width : 20.4cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-rajhi4.jpg";
      MyDate.style.cssText =
        "top : 0.25cm ; left : 17.0cm ; width : 80px; font-size: 15px";
      Place.style.cssText =
        "top : 0.85cm ; left : 17.0cm ; width : 90px; font-size: 14px; display : block ";

      Payee.style.cssText = "top : 2.55cm ; left : 3.0cm  ; width : 510px ";
      Amount.style.cssText = "top : 3.8cm ; left : 16.4cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 2.3cm ; width : 440px; line-height: 2.3";
      CheckFor.style.cssText = "top : 4.55cm ; left : 0.9cm ; width : 530px";

      break;

    case "rajhi5": // مصرف الراحجي 5 //
      //CheckDiv.style.cssText = "width : 20.3cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-rajhi5.jpg";
      MyDate.style.cssText =
        "top : 0.25cm ; left : 17.0cm ; width : 80px; font-size: 15px";
      Place.style.cssText =
        "top : 0.85cm ; left : 17.2cm ; width : 90px; font-size: 14px; display : block ";

      Payee.style.cssText = "top : 2.55cm ; left : 3.0cm  ; width : 510px ";
      Amount.style.cssText = "top : 3.8cm ; left : 16.4cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 2.3cm ; width : 440px; line-height: 2.3";
      CheckFor.style.cssText = "top : 4.55cm ; left : 0.9cm ; width : 530px";

      break;

    case "alinma": // مصرف الإنماء //
      //CheckDiv.style.cssText = "width : 20.4cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-alinma.jpg";
      MyDate.style.cssText =
        "top : 0.45cm ; left : 16.7cm ; width : 85px; font-size: 15px";
      Payee.style.cssText = "top : 2.75cm ; left : 3.6cm  ; width : 470px ";
      Amount.style.cssText = "top : 3.9cm ; left : 16.7cm  ; width : 110px";
      Tafk.style.cssText = "top : 3.45cm ; left : 2.6cm ; width : 410px";
      CheckFor.style.cssText = "top : 4.70cm ; left : 2.2cm ; width : 450px";
      Place.style.cssText =
        "top : 1.2cm ; left : 17.35cm ; width : 60px; font-size: 14px; display : block ";

      break;

    case "alinma2": // مصرف الإنماء2 //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-alinma2.jpg";
      MyDate.style.cssText =
        "top : 0.35cm ; left : 13.8cm ; width : 85px; font-size: 14px";
      Payee.style.cssText =
        "top : 2.15cm ; left : 2.7cm  ; width : 390px; font-size: 17px ";
      Amount.style.cssText = "top : 3.1cm ; left : 13.2cm  ; width : 130px";
      Tafk.style.cssText = "top : 2.5cm ; left : 2.2cm ; width : 335px";
      CheckFor.style.cssText =
        "top : 3.55cm ; left : 0.7cm ; width : 425px; font-size: 16px";
      Place.style.cssText =
        "top : 0.82cm ; left : 14.4cm ; width : 60px; font-size: 14px; display : block ";

      break;

    case "alinma3": // مصرف الإنماء 3//
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-alinma3.jpg";
      MyDate.style.cssText = "top : 0.45cm ; left : 16.4cm ; width : 85px";
      Payee.style.cssText = "top : 3.0cm ; left : 3.3cm  ; width : 490px ";
      Amount.style.cssText = "top : 3.85cm ; left : 16.35cm  ; width : 140px";
      Tafk.style.cssText = "top : 3.5cm ; left : 2.65cm ; width : 425px";
      CheckFor.style.cssText = "top : 4.70cm ; left : 0.7cm ; width : 540px";
      Place.style.cssText =
        "top : 1.2cm ; left : 16.65cm ; width : 95px; font-size: 14px; display : block ";

      break;

    case "alinma4": // مصرف الإنماء 4//
      //CheckDiv.style.cssText = "width : 18.9cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-alinma4.jpg";
      MyDate.style.cssText =
        "top : 2.0cm ; left : 14.0cm ; width : 85px; font-size: 16px";
      Payee.style.cssText = "top : 3.5cm ; left : 3.1cm  ; width : 425px ";
      Amount.style.cssText = "top : 4.15cm ; left : 13.8cm  ; width : 140px";
      Tafk.style.cssText = "top : 4.0cm ; left : 2.65cm ; width : 360px";
      CheckFor.style.cssText = "top : 5.15cm ; left : 1.0cm ; width : 440px";
      Place.style.cssText =
        "top : 2.65cm ; left : 14.0cm ; width : 95px; font-size: 14px; display : block ";

      break;

    case "jzra": // بنك الجزيرة //
      //CheckDiv.style.cssText = "width : 20.3cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-jzra.jpg";
      MyDate.style.cssText =
        "top : 0.50cm ; left : 16.1cm ; width : 90px; font-size: 16px";
      Payee.style.cssText = "top : 2.8cm ; left : 3.6cm  ; width : 440px ";
      Amount.style.cssText = "top : 3.6cm ; left : 16.4cm  ; width : 110px";
      Tafk.style.cssText = "top : 3.4cm ; left : 2.4cm ; width : 400px";
      CheckFor.style.cssText = "top : 4.55cm ; left : 2.2cm ; width : 420px";
      Place.style.cssText =
        "top : 1.2cm ; left : 16.8cm ; width : 70px; font-size: 15px; display : block; text-align : center ";

      break;

    case "jzra2": // بنك الجزيرة 2 //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-jzra2.jpg";
      MyDate.style.cssText =
        "top : 0.15cm ; left : 13.2cm ; width : 90px; font-size: 15px";
      Payee.style.cssText = "top : 2.5cm ; left : 2.1cm  ; width : 460px ";
      Amount.style.cssText = "top : 3.55cm ; left : 13.4cm  ; width : 126px";
      Tafk.style.cssText = "top : 2.8cm ; left : 1.7cm ; width : 378px";
      CheckFor.style.cssText =
        "top : 3.8cm ; left : 0.3cm ; width : 460px; font-size: 16px";
      Place.style.cssText =
        "top : 0.7cm ; left : 13.3cm ; width : 105px; font-size: 15px; display : block; text-align : center ";

      break;

    case "safr": // البنك السعودي الفرنسي //
      //CheckDiv.style.cssText = "width : 17cm ; height : 7.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-safr.jpg";
      MyDate.style.cssText =
        "top : 0.30cm ; left : 13.1cm ; width : 90px; font-size: 16px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.6cm  ; width : 350px ";
      Amount.style.cssText = "top : 3.43cm ; left : 12.8cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 2.4cm ; width : 260px; line-height: 1.4";
      CheckFor.style.cssText =
        "top : 4.04cm ; left : 0.3cm ; width : 400px; font-size: 16px ";
      Place.style.cssText =
        "top : 1.2cm ; left : 13.8cm ; width : 70px; font-size: 15px; display : block; text-align : center ";

      break;

    case "awal": // البنك الأول //
      //CheckDiv.style.cssText = "width : 20.3cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-awal.jpg";
      MyDate.style.cssText = "top : 0.25cm ; left : 16.1cm ; width : 100px";
      Payee.style.cssText = "top : 3.22cm ; left : 3.9cm  ; width : 415px ";
      Amount.style.cssText = "top : 4.2cm ; left : 16.4cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 3.75cm ; left : 3.0cm ; width : 385px; line-height: 1.4";
      CheckFor.style.cssText =
        "top : 4.68cm ; left : 1.6cm ; width : 480px; font-size: 16px";
      Place.style.cssText =
        "top : 1.02cm ; left : 16.9cm ; width : 75px; font-size: 15px; display : block; text-align : center ";

      break;

    case "anb": // البنك العربي الوطني //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-anb.jpg";
      MyDate.style.cssText = "top : 0.20cm ; left : 12.9cm ; width : 100px";
      Payee.style.cssText = "top : 2.7cm ; left : 3.1cm  ; width : 335px ";
      Amount.style.cssText = "top : 3.25cm ; left : 13.35cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 2.7cm ; width : 320px; line-height: 1.4";
      CheckFor.style.cssText =
        "top : 4.10cm ; left : 1.2cm ; width : 370px; font-size: 16px";
      Place.style.cssText =
        "top : 1.05cm ; left : 13.2cm ; width : 75px; font-size: 15px; display : block";

      break;

    case "blad": // بنك البلاد //
      //CheckDiv.style.cssText = "width : 18.9cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-blad.jpg";
      MyDate.style.cssText = "top : 0.15cm ; left : 14.6cm ; width : 100px";
      Place.style.cssText =
        "top : 0.85cm ; left : 15.4cm ; width : 75px; font-size: 15px; display : block";

      Payee.style.cssText = "top : 2.4cm ; left : 3.5cm  ; width : 400px ";
      Amount.style.cssText = "top : 4.0cm ; left : 15.0cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 3.2cm ; left : 2.8cm ; width : 350px; line-height: 1.7";
      CheckFor.style.cssText = "top : 4.3cm ; left : 0.7cm ; width : 480px";

      break;

    case "samba": // مجموعة سامبا المالية //
      //CheckDiv.style.cssText = "width : 20.4cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sa-samba.jpg";
      MyDate.style.cssText = "top : 0.40cm ; left : 16.0cm ; width : 100px";
      Place.style.cssText =
        "top : 1.10cm ; left : 16.4cm ; width : 100px; font-size: 17px; display : block";

      Payee.style.cssText = "top : 2.8cm ; left : 3.3cm  ; width : 445px ";
      Amount.style.cssText = "top : 3.85cm ; left : 16.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.25cm ; left : 2.7cm ; width : 390px; line-height: 1.9";
      CheckFor.style.cssText = "top : 4.4cm ; left : 1.0cm ; width : 500px";

      break;

    // ----------------- Egypt Checks ----------------- //

    case "NBE": // البنك الأهلي المصري //
      //CheckDiv.style.cssText = "width : 16.8cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-nbe.jpg";
      MyDate.style.cssText =
        "top : 1.4cm ; left : 13.9cm ; width : 70px; font-size: 13px";
      Place.style.cssText =
        "top : 1.4cm ; left : 11.45cm   ; width : 60px; font-size: 13px ; display : block; text-align: center ";

      Payee.style.cssText = "top : 2.2cm ; left : 1.2cm  ; width : 450px";
      Amount.style.cssText = "top : 3.5cm ; left : 13cm  ; width : 120px";
      Tafk.style.cssText = "top : 2.7cm ; left : 0.5cm   ; width : 365px";
      CheckFor.style.cssText = "top : 3.7cm ; left : 1.0cm   ; width : 370px";
      Sign_name.style.cssText =
        "top : 4.5cm ; left : 9.0cm   ; display : block; font-size: 15px; width : 220px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "CIB": // البنك التجاري الدولي //
      //CheckDiv.style.cssText = "width : 16.8cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-cib.jpg";
      MyDate.style.cssText = "top : 1.2cm ; left : 1.3cm ; width : 100px";
      Payee.style.cssText = "top : 2.2cm ; left : 3.3cm  ; width : 335px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.6cm  ; width : 105px";
      Tafk.style.cssText = "top : 2.9cm ; left : 0.2cm   ; width : 350px";
      CheckFor.style.cssText = "top : 4.2cm ; left : 1.1cm   ; width : 290px";
      Sign_name.style.cssText =
        "top : 4.6cm ; left : 9.0cm   ; display : block; font-size: 16px; width : 270px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "QNB": // بنك قطر الوطني //
      //CheckDiv.style.cssText = "width : 16.8cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-qnb.jpg";
      MyDate.style.cssText = "top : 1.3cm ; left : 12cm ; width : 110px";
      Payee.style.cssText = "top : 2.6cm ; left : 3.9cm  ; width : 400px";
      Amount.style.cssText = "top : 3.75cm ; left : 13.6cm  ; width : 100px";
      Tafk.style.cssText = "top : 3.3cm ; left : 2.2cm   ; width : 305px";
      CheckFor.style.cssText = "top : 4.65cm ; left : 1.6cm   ; width : 350px";
      break;

    case "qnb3": // بنك قطر الوطني الأهلي //
      //CheckDiv.style.cssText = "width : 20.8cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-qnb3.jpg";
      MyDate.style.cssText = "top : 1.15cm ; left : 15.9cm ; width : 110px";
      Payee.style.cssText = "top : 2.3cm ; left : 3.8cm  ; width : 550px";
      Amount.style.cssText = "top : 3.65cm ; left : 17.4cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 3.1cm ; left : 2.4cm   ; width : 440px; font-size: 16px";
      CheckFor.style.cssText = "top : 4.45cm ; left : 0.8cm   ; width : 540px";
      break;

    case "UNB": // بنك الاتحاد الوطني //
      //CheckDiv.style.cssText = "width : 16.2cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-unb.jpg";
      MyDate.style.cssText = "top : 1.4cm ; left : 11.9cm ; width : 110px";
      Payee.style.cssText = "top : 2.3cm ; left : 4cm  ; width : 340px";
      Amount.style.cssText = "top : 3.92cm ; left : 13.3cm  ; width : 85px";
      cur_text.style.cssText =
        "top : 4.05cm ; left : 11.9cm   ; width : 65px; font-size: 13px ; display : block ";
      Tafk.style.cssText = "top : 2.7cm ; left : 2.4cm   ; width : 440px";
      CheckFor.style.cssText = "top : 3.7cm ; left : 1.6cm   ; width : 350px";
      Sign_name.style.cssText =
        "top : 4.6cm ; left : 9.7cm   ; display : block; font-size: 13px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "AUB": // البنك الاهلي المتحد //
      //CheckDiv.style.cssText = "width : 16.6cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-aub.jpg";
      MyDate.style.cssText = "top : 0.35cm ; left : 11.8cm ; width : 110px";
      Payee.style.cssText = "top : 1.75cm ; left : 4.2cm  ; width : 340px";
      Amount.style.cssText = "top : 3.25cm ; left : 13cm  ; width : 85px";
      cur_text.style.cssText =
        "top : 3.35cm ; left : 11.6cm   ; width : 65px; font-size: 13px ; display : block ";
      Tafk.style.cssText = "top : 2.15cm ; left : 2.5cm   ; width : 460px";
      CheckFor.style.cssText = "top : 3.15cm ; left : 2.2cm   ; width : 330px";
      Sign_name.style.cssText =
        "top : 4.75cm ; left : 2.2cm   ; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "EBE": // البنك المصري لتنمية الصادرات //
      //CheckDiv.style.cssText = "width : 16.6cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-ebe.jpg";
      MyDate.style.cssText = "top : 0.5cm ; left : 12.8cm ; width : 100px";
      Payee.style.cssText = "top : 1.9cm ; left : 2.7cm  ; width : 390px";
      Amount.style.cssText = "top : 3.40cm ; left : 13.2cm  ; width : 105px";
      Tafk.style.cssText = "top : 2.50cm ; left : 1.7cm   ; width : 310px";
      CheckFor.style.cssText = "top : 3.65cm ; left : 1.2cm   ; width : 370px";
      cur_text.style.cssText =
        "top : 3.5cm ; left : 11.4cm   ; width : 65px; font-size: 14px ; display : block ";
      Sign_name.style.cssText =
        "top : 4.4cm ; left : 10.2cm   ; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "AAIB": // البنك العربي الافريقي الدولي //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-aaib.jpg";
      MyDate.style.cssText =
        "top : 0.5cm ; left : 13.75cm ; width : 75px ; font-size: 13px";
      Payee.style.cssText = "top : 2.25cm ; left : 4.2cm  ; width : 340px";
      Amount.style.cssText = "top : 4.1cm ; left : 12.2cm  ; width : 110px";
      CheckFor.style.cssText = "display : none ";
      Tafk.style.cssText = "top : 2.75cm ; left : 2.5cm   ; width : 470px";
      Sign_name.style.cssText =
        "top : 4.05cm ; left : 2.1cm   ; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "HSBC": // البنك إتش اس بي سي //
      //CheckDiv.style.cssText = "width : 15.8cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-hsbc.jpg";
      MyDate.style.cssText =
        "top : 2.05cm ; left : 11.75cm ; width : 90px ; font-size: 14px";
      Payee.style.cssText = "top : 3.0cm ; left : 2.4cm  ; width : 410px";
      Amount.style.cssText = "top : 4.03cm ; left : 12.1cm  ; width : 90px";
      Tafk.style.cssText = "top : 3.3cm ; left : 1.2cm   ; width : 350px";
      CheckFor.style.cssText = "top : 4.3cm ; left : 1.5cm   ; width : 210px";
      break;

    case "MISR": // بنك مصر //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-misr.jpg";
      MyDate.style.cssText =
        "top : 0.55cm ; left : 11.9cm ; width : 100px ; font-size: 15px";
      Payee.style.cssText = "top : 1.95cm ; left : 3.55cm  ; width : 340px";
      Amount.style.cssText = "top : 3.25cm ; left : 13.25cm  ; width : 90px";
      CheckFor.style.cssText =
        "top : 3.45cm ; left : 1.0cm   ; width : 400px; font-size: 16px";
      Tafk.style.cssText = "top : 2.35cm ; left : 1cm   ; width : 350px";
      Sign_name.style.cssText =
        "top : 4.45cm ; left : 1.4cm; width : 220px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "BOC": // بنك القاهرة //
      //CheckDiv.style.cssText = "width : 16.8cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-boc.jpg";
      MyDate.style.cssText =
        "top : 1.75cm ; left : 12.25cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText = "top : 2.75cm ; left : 1.2cm  ; width : 430px";
      Amount.style.cssText = "top : 4.15cm ; left : 13.0cm  ; width : 90px";
      CheckFor.style.cssText = "display : none ";
      Tafk.style.cssText = "top : 3.55cm ; left : 0.6cm   ; width : 330px";
      Place.style.cssText =
        "top : 0.8cm ; left : 11.55cm   ; width : 80px; font-size: 14px ; display : block ";
      Sign_name.style.cssText =
        "top : 5.2cm ; left : 11.5cm; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "BOC2": // بنك القاهرة 2 //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-boc2.jpg";
      Place.style.cssText =
        "top : 0.5cm ; left : 12.9cm   ; width : 85px; font-size: 13px ; display : block; text-align: center ";

      MyDate.style.cssText =
        "top : 1.3cm ; left : 12.5cm ; width : 115px ; font-size: 15px";
      Payee.style.cssText = "top : 2.2cm ; left : 1.45cm  ; width : 525px";
      Amount.style.cssText = "top : 4.0cm ; left : 12.5cm  ; width : 115px";
      CheckFor.style.cssText =
        "top : 3.9cm ; left : 0.6cm   ; width : 380px; font-size: 15px";
      Tafk.style.cssText = "top : 2.7cm ; left : 2.0cm   ; width : 490px";
      Sign_name.style.cssText =
        "top : 4.6cm ; left : 8.7cm; display : block; font-size: 15px; width : 245px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "NBD": // بنك الإمارات دبي الوطني //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-nbd.jpg";
      MyDate.style.cssText =
        "top : 0.50cm ; left : 10.0cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText = "top : 1.90cm ; left : 1.4cm  ; width : 460px";
      Amount.style.cssText = "top : 3.2cm ; left : 13.6cm  ; width : 110px";
      Tafk.style.cssText = "top : 2.35cm ; left : 0.7cm   ; width : 380px";
      CheckFor.style.cssText = "top : 3.5cm ; left : 1.5cm   ; width : 380px";
      Sign_name.style.cssText =
        "top : 4.2cm ; left : 9.4cm; width : 220px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "audi": // بنك عودة - مصر //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-audi.jpg";
      MyDate.style.cssText =
        "top : 4.2cm ; left : 6.5cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText = "top : 2.25cm ; left : 3.0cm  ; width : 460px";
      Amount.style.cssText = "top : 0.92cm ; left : 13.0cm  ; width : 110px";
      Tafk.style.cssText = "top : 2.6cm ; left : 2.2cm   ; width : 440px";
      CheckFor.style.cssText = "top : 3.5cm ; left : 1.5cm   ; width : 435px";
      Place.style.cssText =
        "top : 4.2cm ; left : 3.5cm   ; width : 80px; font-size: 14px ; display : block; text-align: center ";
      Sign_name.style.cssText =
        "top : 4.2cm ; left : 11.25cm; width : 135px; display : block; font-size: 14px";
      Sign_Name_div.style.cssText = "display : block ";

      break;

    case "brka": // بنك البركة - مصر //
      //CheckDiv.style.cssText = "width : 15.8cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-brka.jpg";
      MyDate.style.cssText =
        "top : 5.05cm ; left : 2.3cm ; width : 100px ; font-size: 16px";
      Payee.style.cssText = "top : 3.1cm ; left : 2.9cm  ; width : 390px";
      Amount.style.cssText = "top : 1.90cm ; left : 11.3cm  ; width : 110px";
      CheckFor.style.cssText = "display : none ";
      Tafk.style.cssText = "top : 3.4cm ; left : 2.8cm   ; width : 390px";
      cur_text.style.cssText =
        "display : block; width: 50px; top: 1.55cm; left: 8.4cm; font-size: 16px; margin-top: 15px";
      Sign_name.style.cssText =
        "top : 5.0cm ; left : 8.8cm; width : 190px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "brka2": // بنك البركة2 - مصر //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-brka2.jpg";
      MyDate.style.cssText =
        "top : 5.0cm ; left : 2.2cm ; width : 100px ; font-size: 16px";
      Payee.style.cssText = "top : 2.9cm ; left : 1.8cm  ; width : 460px";
      Amount.style.cssText = "top : 1.78cm ; left : 11.75cm  ; width : 150px";
      CheckFor.style.cssText = "display : none ";
      Tafk.style.cssText = "top : 3.25cm ; left : 2.2cm   ; width : 445px";
      cur_text.style.cssText =
        "display : block; width: 70px; top: 1.42cm; left: 9.25cm; font-size: 16px; margin-top: 15px";
      Sign_name.style.cssText =
        "top : 5.0cm ; left : 8.8cm; width : 220px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "wafa": // بنك التجاري وفا //
      //CheckDiv.style.cssText = "width : 16.8cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-wafa.jpg";
      MyDate.style.cssText =
        "top : 1.7cm ; left : 13.0cm ; width : 100px ; font-size: 16px";
      Payee.style.cssText = "top : 2.6cm ; left : 3.1cm  ; width : 360px";
      Amount.style.cssText =
        "top : 4.12cm ; left : 13.5cm  ; width : 80px; font-size: 16px";
      Tafk.style.cssText = "top : 3.2cm ; left : 1.9cm   ; width : 360px";
      CheckFor.style.cssText = "display : none ";
      Place.style.cssText =
        "top : 1.7cm; left : 8.8cm; width : 80px; font-size: 16px ; display : block; text-align: center ";
      Sign_name.style.cssText =
        "top : 4.9cm ; left : 9.7cm; width : 190px; display : block; font-size: 14px";
      Sign_Name_div.style.cssText = "display : block ";

      break;

    case "nbk": // بنك الكويت الوطني //
      //CheckDiv.style.cssText = "width : 16.2cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-nbk.jpg";
      MyDate.style.cssText =
        "top : 1.7cm ; left : 12.6cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText = "top : 2.6cm ; left : 3.0cm  ; width : 430px";
      Amount.style.cssText = "top : 4.42cm ; left : 11.5cm  ; width : 110px";
      Tafk.style.cssText = "top : 3.2cm ; left : 2.5cm   ; width : 440px";
      CheckFor.style.cssText = "display : none ";
      Place.style.cssText =
        "top : 1.7cm ; left : 2.0cm   ; width : 70px; font-size: 15px ; display : block; text-align: center";
      Sign_name.style.cssText =
        "top : 5.2cm ; left : 8.8cm; width : 220px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      Place.style.cssText =
        "top : 1.7cm; left : 1.6cm; width : 90px; font-size: 15px ; display : block; text-align: center ";

      break;

    case "blom": // بنك بلوم مصر //
      //CheckDiv.style.cssText = "width : 17.8cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-blom.jpg";
      MyDate.style.cssText =
        "top : 0.7cm ; left : 13.6cm ; width : 100px ; font-size: 16px";
      Payee.style.cssText = "top : 2.0cm ; left : 1.0cm  ; width : 440px";
      Amount.style.cssText =
        "top : 5.2cm ; left : 13.6cm  ; width : 120px; font-size: 19px";
      Tafk.style.cssText = "top : 2.6cm ; left : 2.0cm   ; width : 540px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 3.8cm ; left : 6.0cm; width : 170px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "alex": // بنك الاسكندرية //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-alex.jpg";
      MyDate.style.cssText =
        "top : 0.6cm ; left : 14.0cm ; width : 75px ; font-size: 13px";
      Place.style.cssText =
        "top : 0.6cm ; left : 11.15cm   ; width : 65px; font-size: 13px ; display : block; text-align: center ";
      Payee.style.cssText = "top : 1.95cm ; left : 0.9cm  ; width : 450px";
      Amount.style.cssText = "top : 3.34cm ; left : 13.1cm  ; width : 110px";
      Tafk.style.cssText = "top : 2.5cm ; left : 0.7cm   ; width : 350px";
      CheckFor.style.cssText = "top : 3.6cm ; left : 1.1cm   ; width : 355px ";
      cur_text.style.cssText =
        "top : 3.1cm ; left : 11.25cm   ; width : 65px; font-size: 14px ; display : block";
      Sign_name.style.cssText =
        "top : 4.3cm ; left : 8.6cm; width : 240px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";

      break;

    case "alex2": // بنك الاسكندرية 2//
      //CheckDiv.style.cssText = "width : 18.5cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-alex2.jpg";
      MyDate.style.cssText =
        "top : 0.8cm ; left : 13.0cm ; width : 147px ; font-size: 13px";
      Place.style.cssText =
        "top : 0.15cm ; left : 13.1cm   ; width : 125px; font-size: 13px ; display : block; text-align: center ";
      Payee.style.cssText = "top : 2.1cm ; left : 1.45cm  ; width : 505px";
      Amount.style.cssText = "top : 4.2cm ; left : 13.6cm  ; width : 125px";
      Tafk.style.cssText = "top : 2.6cm ; left : 0.7cm   ; width : 595px";
      CheckFor.style.cssText = "display : none ";
      cur_text.style.cssText =
        "top : 4.25cm ; left : 12.25cm   ; width : 65px; font-size: 14px ; display : block";
      Sign_name.style.cssText =
        "top : 3.9cm ; left : 1.6cm; width : 340px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";

      break;

    case "arg": // كريدي أجريكول //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-arg.jpg";
      MyDate.style.cssText =
        "top : 1.0cm ; left : 13.1cm ; width : 85px ; font-size: 15px";
      Payee.style.cssText = "top : 2.15cm ; left : 2.9cm  ; width : 450px";
      Amount.style.cssText =
        "top : 3.90cm ; left : 13.9cm  ; width : 85px; font-size: 15px";
      Tafk.style.cssText = "top : 2.75cm ; left : 2.7cm   ; width : 440px";
      CheckFor.style.cssText = "top : 3.95cm ; left : 3.0cm   ; width : 350px ";
      Sign_name.style.cssText =
        "top : 4.7cm ; left : 9.8cm; width : 200px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "egb": // لبنك المصري الخليجي //
      //CheckDiv.style.cssText = "width : 16.0cm ; height : 7.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-egb.jpg";
      MyDate.style.cssText =
        "top : 0.2cm ; left : 12.1cm ; width : 80px ; font-size: 15px";
      Payee.style.cssText = "top : 1.8cm ; left : 4.15cm  ; width : 290px";
      Amount.style.cssText =
        "top : 3.98cm ; left : 11.3cm  ; width : 100px; font-size: 15px";
      Tafk.style.cssText = "top : 2.7cm ; left : 2.3cm   ; width : 410px";
      CheckFor.style.cssText =
        "top : 3.75cm ; left : 1.0cm   ; width : 355px; font-size: 16px ";
      Sign_name.style.cssText =
        "top : 4.65cm ; left : 9.35cm; width : 180px; display : block; font-size: 14px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "utb": // المصرف المتحد //
      //CheckDiv.style.cssText = "width : 15.7cm ; height : 7.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-utb.jpg";
      MyDate.style.cssText =
        "top : 0.35cm ; left : 11.6cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText =
        "top : 1.75cm ; left : 4.4cm  ; width : 310px; font-size: 16px ";
      Amount.style.cssText =
        "top : 3.0cm ; left : 11.8cm  ; width : 80px; font-size: 15px";
      Tafk.style.cssText = "top : 2.4cm ; left : 0.7cm   ; width : 350px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 3.65cm ; left : 8.5cm; width : 180px; display : block; font-size: 14px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "arbib": // بنك الاستثمار العربي //
      //CheckDiv.style.cssText = "width : 16.6cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-arbib.jpg";
      MyDate.style.cssText =
        "top : 0.4cm ; left : 12.8cm ; width : 100px ; font-size: 16px";
      Payee.style.cssText = "top : 1.55cm ; left : 0.9cm  ; width : 460px";
      Amount.style.cssText = "top : 2.88cm ; left : 13.7cm  ; width : 90px";
      Tafk.style.cssText = "top : 2.05cm ; left : 0.6cm   ; width : 380px";
      CheckFor.style.cssText =
        "top : 3.12cm ; left : 1.0cm   ; width : 400px; font-size: 16px ";
      Sign_name.style.cssText =
        "top : 3.85cm ; left : 8.5cm; width : 220px; display : block";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "scb": // بنك قناة السويس //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 7.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-scb.jpg";
      MyDate.style.cssText =
        "top : 0.7cm ; left : 12.75cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText = "top : 1.4cm ; left : 1.8cm  ; width : 480px";
      Amount.style.cssText = "top : 3.47cm ; left : 13.1cm  ; width : 100px";
      Tafk.style.cssText = "top : 2.1cm ; left : 2.3cm   ; width : 460px";
      CheckFor.style.cssText =
        "top : 3.12cm ; left : 1.0cm   ; width : 400px; font-size: 16px ";
      Sign_name.style.cssText =
        "top : 4.1cm ; left : 8.5cm; width : 200px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "scb2": // بنك قناة السويس2 //
      //CheckDiv.style.cssText = "width : 16.6cm ; height : 7.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-scb2.jpg";
      MyDate.style.cssText =
        "top : 0.2cm ; left : 12.2cm ; width : 90px ; font-size: 15px";
      Payee.style.cssText = "top : 1.5cm ; left : 1.3cm  ; width : 400px";
      Amount.style.cssText = "top : 3.02cm ; left : 12.8cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 2.0cm ; left : 1.3cm   ; width : 315px; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 3.2cm ; left : 1.3cm   ; width : 360px; font-size: 16px ";
      Sign_name.style.cssText =
        "top : 3.8cm ; left : 8.0cm; width : 280px; display : block; font-size: 15px";
      cur_text.style.cssText =
        "top : 3.1cm ; left : 11.15cm   ; width : 65px; font-size: 14px ; display : block";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "saib": // بنك الشركة المصرفية العربية //
      //CheckDiv.style.cssText = "width : 16.7cm ; height : 7.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-saib.jpg";
      MyDate.style.cssText = "top : 1.05cm ; left : 12.75cm ; width : 90px";
      Payee.style.cssText = "top : 3.0cm ; left : 1.4cm  ; width : 400px";
      Amount.style.cssText = "top : 3.0cm ; left : 13.5cm  ; width : 100px";
      cur_text.style.cssText =
        "top : 3.1cm ; left : 12.3cm   ; width : 65px; font-size: 13px ; display : block ";
      Tafk.style.cssText = "top : 4.45cm ; left : 1.2cm   ; width : 300px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 3.9cm ; left : 9.6cm; width : 200px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "saib2": // بنك الشركة المصرفية العربية 2//
      //CheckDiv.style.cssText = "width : 17.6cm ; height : 7.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-saib2.jpg";
      MyDate.style.cssText = "top : 0.6cm ; left : 13.0cm ; width : 90px";
      Payee.style.cssText = "top : 1.8cm ; left : 3.8cm  ; width : 400px";
      Amount.style.cssText = "top : 3.48cm ; left : 13.5cm  ; width : 115px";
      cur_text.style.cssText =
        "top : 3.6cm ; left : 12.2cm   ; width : 65px; font-size: 13px ; display : block ";
      Tafk.style.cssText = "top : 2.4cm ; left : 2.2cm   ; width : 385px";
      CheckFor.style.cssText =
        "top : 3.7cm ; left : 1.1cm   ; width : 425px; font-size: 16px ";
      Sign_name.style.cssText =
        "top : 4.35cm ; left : 10.4cm; width : 190px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "fib": // بنك فيصل الاسلامي المصري //
      //CheckDiv.style.cssText = "width : 16.7cm ; height : 7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-fib.jpg";
      MyDate.style.cssText = "top : 1.1cm ; left : 12.2cm ; width : 90px";
      Place.style.cssText =
        "top : 0.32cm ; left : 11.9cm   ; width : 85px; display : block ";

      Payee.style.cssText = "top : 1.9cm ; left : 4.0cm  ; width : 350px";
      Amount.style.cssText =
        "top : 3.95cm ; left : 11.4cm  ; width : 150px; text-align: center";
      Tafk.style.cssText = "top : 2.5cm ; left : 1.2cm   ; width : 500px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "adib2": // مصرف أبو ظبي الاسلامي //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-adib2.jpg";
      MyDate.style.cssText = "top : 0.9cm ; left : 12.4cm ; width : 90px";
      Payee.style.cssText = "top : 1.85cm ; left : 1.0cm  ; width : 430px";
      Amount.style.cssText =
        "top : 3.35cm ; left : 12.6cm  ; width : 125px; text-align: center";
      cur_text.style.cssText =
        "top : 3.45cm ; left : 11.1cm   ; width : 65px; font-size: 13px ; display : block ";
      Tafk.style.cssText =
        "top : 2.2cm ; left : 0.9cm   ; width : 335px; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 3.55cm ; left : 0.95cm   ; width : 355px; font-size: 17px ";
      Sign_name.style.cssText =
        "top : 4.25cm ; left : 6.9cm; width : 300px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "arab2": // البنك العربي //
      //CheckDiv.style.cssText = "width : 15.2cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-arab2.jpg";
      MyDate.style.cssText = "top : 0.55cm ; left : 1.4cm ; width : 90px";
      Payee.style.cssText =
        "top : 3.10cm ; left : 3.6cm  ; width : 330px; font-size: 17px";
      Amount.style.cssText =
        "top : 1.95cm ; left : 10.45cm  ; width : 85px; text-align: center; font-size: 16px";
      Amount2.style.cssText =
        "top : 1.95cm ; left : 12.95cm  ; width : 33px; font-size: 16px; display : block ";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 2.7cm   ; width : 380px; line-height: 1.5; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.65cm ; left : 8.8cm; width : 150px; display : block; font-size: 15px; text-align : end";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "fab2": // البنك أبو ظبي الأول //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-fab2.jpg";
      MyDate.style.cssText = "top : 1.7cm ; left : 12.1cm ; width : 90px";
      Payee.style.cssText =
        "top : 2.5cm ; left : 3.5cm  ; width : 330px; font-size: 17px";
      Amount.style.cssText =
        "top : 3.8cm ; left : 12.8cm  ; width : 105px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.85cm ; left : 1.9cm   ; width : 280px; line-height: 1.7; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.8cm ; left : 6.3cm; width : 350px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "fab3": // البنك أبو ظبي الأول 2 //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-fab3.jpg";
      MyDate.style.cssText =
        "top : 4.35cm ; left : 6.6cm ; width : 90px; font-size: 15px";
      Place.style.cssText =
        "top : 4.35cm ; left : 3.0cm   ; width : 100px; font-size: 14px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.4cm ; left : 2.3cm  ; width : 505px; font-size: 17px";
      Amount.style.cssText =
        "top : 1.2cm ; left : 12.6cm  ; width : 150px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 1.9cm   ; width : 480px; line-height: 1.4; font-size: 15px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.3cm ; left : 11.3cm; width : 135px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "fab4": // البنك أبو ظبي الأول 3 //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-fab4.jpg";
      MyDate.style.cssText =
        "top : 4.2cm ; left : 6.6cm ; width : 90px; font-size: 15px";
      Place.style.cssText =
        "top : 4.2cm ; left : 3.0cm   ; width : 100px; font-size: 14px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.2cm ; left : 2.3cm  ; width : 505px; font-size: 17px";
      Amount.style.cssText =
        "top : 1.1cm ; left : 12.45cm  ; width : 150px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.5cm ; left : 1.95cm   ; width : 475px; line-height: 1.4; font-size: 15px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.2cm ; left : 11.2cm; width : 135px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "pirs": // بنك بيريوس - مصر //
      //CheckDiv.style.cssText = "width : 14.8cm ; height : 7.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-pirs.jpg";
      MyDate.style.cssText = "top : 0.8cm ; left : 11.3cm ; width : 90px";
      Payee.style.cssText = "top : 1.8cm ; left : 0.8cm  ; width : 400px";
      Amount.style.cssText =
        "top : 3.1cm ; left : 11.75cm  ; width : 100px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.12cm ; left : 0.6cm   ; width : 335px; line-height: 1.6; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.0cm ; left : 6.7cm; width : 230px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "hdb": // بنك التعمير والاسكان //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-hdb.jpg";
      MyDate.style.cssText = "top : 0.3cm ; left : 12.8cm ; width : 90px";
      Payee.style.cssText = "top : 1.5cm ; left : 0.8cm  ; width : 450px";
      Amount.style.cssText =
        "top : 2.9cm ; left : 13.3cm  ; width : 100px; font-size: 17px";
      Tafk.style.cssText =
        "top : 1.9cm ; left : 0.6cm   ; width : 370px; line-height: 1.7; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 3.9cm ; left : 8.7cm; width : 230px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "idw": // بنك التنمية الصناعية //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-idw.jpg";
      MyDate.style.cssText = "top : 0.25cm ; left : 12.5cm ; width : 90px";
      Payee.style.cssText =
        "top : 1.65cm ; left : 4.5cm  ; width : 320px; font-size: 17px";
      Amount.style.cssText =
        "top : 3.51cm ; left : 13.7cm  ; width : 70px; font-size: 16px";
      Tafk.style.cssText =
        "top : 2.05cm ; left : 2.6cm   ; width : 470px; line-height: 1.7; font-size: 16px";
      CheckFor.style.cssText =
        "top : 3.3cm ; left : 1.1cm   ; width : 450px; font-size: 17px ";
      Sign_name.style.cssText =
        "top : 4.35cm ; left : 2.25cm; width : 120px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "mid": // ميد بنك //
      //CheckDiv.style.cssText = "width : 17cm ; height : 8.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-mid.jpg";
      MyDate.style.cssText = "top : 0.7cm ; left : 13.6cm ; width : 90px";
      Payee.style.cssText = "top : 1.90cm ; left : 0.8cm  ; width : 480px";
      Amount.style.cssText =
        "top : 3.47cm ; left : 13.3cm  ; width : 120px; font-size: 16px";
      Tafk.style.cssText =
        "top : 2.35cm ; left : 0.75cm   ; width : 375px; line-height: 1.9; font-size: 16px";
      CheckFor.style.cssText =
        "top : 3.65cm ; left : 0.75cm   ; width : 375px; font-size: 17px ";
      Sign_name.style.cssText =
        "top : 4.42cm ; left : 7.4cm ; width : 300px; display : block; font-size: 17px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "adcb2": // بنك أبو ظبي التجاري  //
      //CheckDiv.style.cssText = "width : 15.9cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-adcb2.jpg";
      MyDate.style.cssText =
        "top : 1.6cm ; left : 12.2cm ; width : 100px; font-size: 16px ";
      Payee.style.cssText =
        "top : 2.7cm ; left : 3.8cm  ; width : 340px; font-size: 17px";
      Amount.style.cssText =
        "top : 4.55cm ; left : 12.6cm  ; width : 110px; font-size: 17px";
      cur_text.style.cssText =
        "top : 4.65cm ; left : 11.25cm   ; width : 65px; font-size: 12px ; display : block ";
      Tafk.style.cssText =
        "top : 3.15cm ; left : 2.1cm   ; width : 450px; font-size: 16px ";
      CheckFor.style.cssText =
        "top : 4.3cm ; left : 0.8cm   ; width : 365px; font-size: 16px";
      Sign_name.style.cssText =
        "top : 5.2cm ; left : 10.85cm ; width : 130px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "abk2": // البنك الأهلي الكويتي  //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-abk2.jpg";
      MyDate.style.cssText =
        "top : 1.65cm ; left : 12.2cm ; width : 100px; font-size: 15px ";
      Payee.style.cssText = "top : 1.6cm ; left : 0.8cm  ; width : 360px";
      Amount.style.cssText =
        "top : 3.4cm ; left : 11.7cm  ; width : 140px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.3cm ; left : 0.7cm   ; width : 375px; font-size: 16px ";
      CheckFor.style.cssText =
        "top : 3.7cm ; left : 0.7cm   ; width : 380px; font-size: 16px";
      Sign_name.style.cssText =
        "top : 5.05cm ; left : 11.6cm ; width : 150px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "abc": // المؤسسة العربية المصرفية  //
      //CheckDiv.style.cssText = "width : 16.8cm ; height : 8.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-abc.jpg";
      MyDate.style.cssText =
        "top : 1.22cm ; left : 12.0cm ; width : 100px; font-size: 16px ";
      Place.style.cssText =
        "top : 0.42cm ; left : 12.1cm   ; width : 110px; display : block; font-size: 16px ";

      Payee.style.cssText = "top : 2.0cm ; left : 3.3cm  ; width : 370px";
      Amount.style.cssText =
        "top : 3.55cm ; left : 12.2cm  ; width : 120px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.5cm ; left : 1.3cm   ; width : 315px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText =
        "top : 3.75cm ; left : 1.3cm   ; width : 355px; font-size: 16px";
      Sign_name.style.cssText =
        "top : 4.5cm ; left : 9.9cm ; width : 185px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "arib": // بنك الاستثمار العربي  //
      //CheckDiv.style.cssText = "width : 14.0cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-arib.jpg";
      MyDate.style.cssText =
        "top : 0.15cm ; left : 10.0cm ; width : 100px; font-size: 15px ";
      Payee.style.cssText =
        "top : 1.25cm ; left : 3.2cm  ; width : 265px; font-size: 16px";
      Amount.style.cssText =
        "top : 2.7cm ; left : 11.2cm  ; width : 90px; font-size: 15px";
      Tafk.style.cssText =
        "top : 1.6cm ; left : 0.9cm   ; width : 300px; font-size: 15px; line-height: 1.9 ";
      CheckFor.style.cssText =
        "top : 2.85cm ; left : 0.8cm   ; width : 340px; font-size: 15px";
      Sign_name.style.cssText =
        "top : 3.7cm ; left : 4.7cm ; width : 270px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "ealb": // البنك العقاري المصري العربي  //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-ealb.jpg";
      MyDate.style.cssText =
        "top : 0.25cm ; left : 13.5cm ; width : 100px; font-size: 16px ";
      Payee.style.cssText =
        "top : 1.45cm ; left : 0.8cm  ; width : 460px; font-size: 18px";
      Amount.style.cssText =
        "top : 3.15cm ; left : 13.4cm  ; width : 130px; font-size: 18px";
      Tafk.style.cssText =
        "top : 1.95cm ; left : 0.8cm   ; width : 375px; font-size: 16px; line-height: 2.2 ";
      CheckFor.style.cssText =
        "top : 3.4cm ; left : 0.8cm   ; width : 410px; font-size: 16px";
      Sign_name.style.cssText =
        "top : 4.25cm ; left : 7.5cm ; width : 300px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "abe": // البنك الزراعي المصري  //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-abe.jpg";
      MyDate.style.cssText =
        "top : 1.72cm ; left : 13.5cm ; width : 100px; font-size: 16px ";
      Payee.style.cssText =
        "top : 2.4cm ; left : 1.0cm  ; width : 470px; font-size: 18px";
      Amount.style.cssText =
        "top : 3.85cm ; left : 13.05cm  ; width : 130px; font-size: 18px";
      cur_text.style.cssText =
        "top : 4.00cm ; left : 11.55cm   ; width : 65px; font-size: 13px ; display : block ";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 1.0cm   ; width : 360px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText =
        "top : 4.1cm ; left : 1.0cm   ; width : 398px; font-size: 16px";
      Sign_name.style.cssText =
        "top : 5.0cm ; left : 9.2cm ; width : 225px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "nbg": // البنك الاهلي اليوناني  //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-nbg.jpg";
      MyDate.style.cssText =
        "top : 1.45cm ; left : 12.5cm ; width : 100px; font-size: 18px ";
      Place.style.cssText =
        "top : 0.7cm ; left : 12.5cm   ; width : 90px; display : block; font-size: 16px ";

      Payee.style.cssText =
        "top : 2.4cm ; left : 1.6cm  ; width : 510px; font-size: 18px";
      Amount.style.cssText =
        "top : 4.25cm ; left : 12.5cm  ; width : 110px; font-size: 18px";
      cur_text.style.cssText =
        "top : 4.3cm ; left : 15.2cm   ; width : 65px; font-size: 14px ; display : block ";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 2.1cm   ; width : 325px; font-size: 16px; line-height: 2.1 ";
      CheckFor.style.cssText =
        "top : 4.5cm ; left : 0.7cm   ; width : 420px; font-size: 16px";
      Sign_name.style.cssText =
        "top : 5.6cm ; left : 9.5cm ; width : 225px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "mash4": // بنك المشرق  //
      //CheckDiv.style.cssText = "width : 15.6cm ; height : 7.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-mash4.jpg";
      MyDate.style.cssText =
        "top : 1.25cm ; left : 11.8cm ; width : 100px; font-size: 17px ";
      Payee.style.cssText =
        "top : 2.15cm ; left : 2.72cm  ; width : 390px; font-size: 17px";
      Amount.style.cssText =
        "top : 3.1cm ; left : 12.4cm  ; width : 100px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 1.4cm   ; width : 325px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.8cm ; left : 7.9cm ; width : 270px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "aib": // المصرف العربي الدولي  //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-aib.jpg";
      MyDate.style.cssText =
        "top : 1.20cm ; left : 12.75cm ; width : 100px; font-size: 17px ";
      Place.style.cssText =
        "top : 0.4cm ; left : 12.9cm   ; width : 90px; display : block; font-size: 16px ";

      Payee.style.cssText =
        "top : 2.25cm ; left : 1.4cm  ; width : 520px; font-size: 17px";
      Amount.style.cssText =
        "top : 4.02cm ; left : 12.6cm  ; width : 110px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 2.0cm   ; width : 500px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.65cm ; left : 8.8cm ; width : 250px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "cbt": // البنك المركزي المصري //
      //CheckDiv.style.cssText = "width : 19.5cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-cbt.jpg";
      MyDate.style.cssText =
        "top : 1.40cm ; left : 14.9cm ; width : 100px; font-size: 18px ";
      Payee.style.cssText =
        "top : 3.25cm ; left : 3.4cm  ; width : 435px; font-size: 16px";
      Amount.style.cssText =
        "top : 5.4cm ; left : 15.2cm  ; width : 110px; font-size: 16px";
      Amount2.style.cssText =
        "top : 5.4cm ; left : 17.8cm  ; width : 45px; display : block; font-size: 16px ";
      Tafk.style.cssText =
        "top : 3.55cm ; left : 2.0cm   ; width : 570px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText = "display : none ";
      break;

    case "cbt2": // البنك المركزي المصري2 //
      //CheckDiv.style.cssText = "width : 18.4cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-cbt2.jpg";
      MyDate.style.cssText =
        "top : 1.40cm ; left : 13.9cm ; width : 118px; font-size: 18px ";
      Payee.style.cssText =
        "top : 3.20cm ; left : 3.3cm  ; width : 420px; font-size: 16px";
      Amount.style.cssText =
        "top : 5.3cm ; left : 14.7cm  ; width : 90px; font-size: 15px";
      Amount2.style.cssText =
        "top : 5.3cm ; left : 16.9cm  ; width : 45px; display : block; font-size: 15px ";
      Tafk.style.cssText =
        "top : 3.55cm ; left : 2.0cm   ; width : 545px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText = "display : none ";
      break;

    case "midb": // بنك مصر إيران للتنمية //
      //CheckDiv.style.cssText = "width : 16.0cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/eg-midb.jpg";
      MyDate.style.cssText =
        "top : 1.35cm ; left : 12.0cm ; width : 100px; font-size: 16px ";
      Payee.style.cssText =
        "top : 2.4cm ; left : 0.6cm  ; width : 405px; font-size: 16px";
      Amount.style.cssText =
        "top : 4.0cm ; left : 11.8cm  ; width : 135px; font-size: 16px";
      cur_text.style.cssText =
        "top : 4.0cm ; left : 10.4cm   ; width : 65px; font-size: 14px ; display : block ";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 0.6cm   ; width : 325px; font-size: 16px; line-height: 1.9 ";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 4.8cm ; left : 8.0cm ; width : 230px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    // ----------------- Iraq Checks ----------------- //

    case "ir_adib": // مصرف ابو ظبي الاسلامي - العراق //
      //CheckDiv.style.cssText = "width : 17.8cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ir-adib.jpg";
      MyDate.style.cssText = "top : 1.05cm ; left : 1.5cm ; width : 90px";
      Place.style.cssText =
        "top : 2.3cm ; left : 12.15cm   ; width : 140px; font-size: 16px ; display : block; text-align: center ";

      Payee.style.cssText = "top : 2.85cm ; left : 1.0cm  ; width : 470px";
      Amount.style.cssText = "top : 4.05cm ; left : 0.75cm  ; width : 110px";
      Amount2.style.cssText =
        "display : block; top : 4.05cm ; left : 4.06cm  ; width : 33px ";
      Tafk.style.cssText =
        "top : 4.62cm ; left : 1.7cm   ; width : 270px ; line-height: 1.5";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 2.08cm ; left : 0.7cm; width : 350px; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "ir_ind": // المصرف الصناعي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ir-ind.jpg";
      MyDate.style.cssText =
        "top : 0.68cm ; left : 1.9cm ; width : 90px ; font-size: 14px";
      Place.style.cssText =
        "top : 0.65cm ; left : 6.3cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText = "top : 2.85cm ; left : 3.7cm  ; width : 470px ";
      Amount.style.cssText = "top : 5.1cm ; left : 5.6cm ; width : 150px ";
      Amount2.style.cssText = "display : block; top : 5.1cm ; left : 10.05cm";
      Tafk.style.cssText =
        "top : 3.40cm ; left : 3.0cm   ; width : 480px ; line-height: 1.5";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 1.2cm ; left : 2.9cm; width : 220px; display : block; font-size: 15px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "ir_raf": // مصرف الرافدين //
      //CheckDiv.style.cssText = "width : 17.7cm ; height : 8.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ir_raf.jpg";
      MyDate.style.cssText =
        "top : 0.60cm ; left : 0.8cm ; width : 90px ; font-size: 15px";
      Place.style.cssText =
        "top : 0.60cm ; left : 3.4cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText = "top : 2.4cm ; left : 2.6cm  ; width : 470px ";
      Amount.style.cssText = "top : 3.5cm ; left : 0.75cm ; width : 160px ";
      Tafk.style.cssText =
        "top : 4.65cm ; left : 0.3cm   ; width : 340px ; line-height: 1.5";
      CheckFor.style.cssText = "display : none ";
      break;

    case "ir_rash": // مصرف الرشيد //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 7.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ir_rash.jpg";
      MyDate.style.cssText =
        "top : 4.25cm ; left : 0.4cm ; width : 90px ; font-size: 15px";
      Place.style.cssText =
        "top : 4.25cm ; left : 3.6cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.35cm ; left : 2.4cm  ; width : 495px; font-size: 17px ";
      Amount.style.cssText = "top : 0.35cm ; left : 12.5cm ; width : 140px ";
      cur_text.style.cssText =
        "top : 0.4cm ; left : 11.0cm   ; width : 65px; font-size: 14px ; display : block ";
      Tafk.style.cssText =
        "top : 2.60cm ; left : 2.0cm   ; width : 505px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 3.55cm ; left : 0.7cm   ; width : 585px; font-size: 15px";
      break;

    case "taif": // مصرف الطيف الإسلامي //
      //CheckDiv.style.cssText = "width : 17.6cm ; height : 8.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ir_taif.jpg";
      MyDate.style.cssText =
        "top : 1.85cm ; left : 7.9cm ; width : 90px ; font-size: 16px";
      Payee.style.cssText =
        "top : 3.6cm ; left : 3.55cm  ; width : 455px; font-size: 17px ";
      Amount.style.cssText = "top : 4.5cm ; left : 0.6cm ; width : 190px ";
      Tafk.style.cssText =
        "top : 4.7cm ; left : 2.4cm   ; width : 315px ; line-height: 1.6";
      CheckFor.style.cssText =
        "top : 5.75cm ; left : 0.75cm   ; width : 440px; font-size: 15px";
      break;

    // -----------------Syria Checks ----------------- //

    case "siib": // بنك سوريا الدولي الاسلامي //
      //CheckDiv.style.cssText = "width : 17.6cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sy-siib.jpg";
      MyDate.style.cssText =
        "top : 4.05cm ; left : 9.0cm ; width : 90px; font-size: 15px";
      Place.style.cssText =
        "top : 4.05cm ; left : 5.15cm   ; width : 140px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText = "top : 2.20cm ; left : 2.6cm  ; width : 530px";
      Amount.style.cssText = "top : 0.8cm ; left : 12.8cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 2.5cm ; left : 2.2cm   ; width : 550px ; line-height: 1.5";
      CheckFor.style.cssText = "display : none ";
      break;

    // ----------------- Bahrein Checks ----------------- //

    case "ithmr": // بنك الإثمار //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/bh-ithmr.jpg";
      MyDate.style.cssText = "display : none";
      Payee.style.cssText = "top : 2.05cm ; left : 3.3cm  ; width : 445px";
      Amount.style.cssText = "top : 3.83cm ; left : 12.95cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 2.8cm   ; width : 240px ; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 4.65cm ; left : 0.95cm   ; width : 355px; font-size: 16px ";
      Seb_date.style.cssText =
        "display : block; width: 200px; top: 0.42cm; left: 11.3cm; font-size: 17px; text-align: left; letter-spacing: 15px; margin-top : 16px ";
      break;

    case "ahli7": // البنك الأهلي المتحد //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/bh-ahli7.jpg";
      MyDate.style.cssText = "display : none";
      Payee.style.cssText = "top : 2.05cm ; left : 3.3cm  ; width : 445px";
      Amount.style.cssText = "top : 3.83cm ; left : 12.95cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 2.8cm   ; width : 240px ; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 4.65cm ; left : 0.95cm   ; width : 355px; font-size: 16px ";
      Seb_date.style.cssText =
        "display : block; width: 200px; top: 0.42cm; left: 11.3cm; font-size: 17px; text-align: left; letter-spacing: 15px; margin-top : 16px ";
      break;

    case "bbk": // بنك البحرين والكويت //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/bh-bbk.jpg";
      MyDate.style.cssText = "display : none";
      Payee.style.cssText = "top : 2.05cm ; left : 3.3cm  ; width : 445px";
      Amount.style.cssText = "top : 3.83cm ; left : 12.95cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 2.8cm   ; width : 240px ; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 4.65cm ; left : 0.95cm   ; width : 355px; font-size: 16px ";
      Seb_date.style.cssText =
        "display : block; width: 200px; top: 0.42cm; left: 11.3cm; font-size: 17px; text-align: left; letter-spacing: 15px; margin-top : 16px ";
      break;

    case "bdb": // بنك البحرين للتنمية //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/bh-bdb.jpg";
      MyDate.style.cssText = "display : none";
      Payee.style.cssText = "top : 2.05cm ; left : 3.3cm  ; width : 445px";
      Amount.style.cssText = "top : 3.83cm ; left : 12.95cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 2.8cm   ; width : 240px ; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 4.65cm ; left : 0.95cm   ; width : 355px; font-size: 16px ";
      Seb_date.style.cssText =
        "display : block; width: 200px; top: 0.42cm; left: 11.3cm; font-size: 17px; text-align: left; letter-spacing: 15px; margin-top : 16px ";
      break;

    case "brka4": // بنك البركة //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/bh-brka4.jpg";
      MyDate.style.cssText = "display : none";
      Payee.style.cssText = "top : 1.95cm ; left : 3.3cm  ; width : 445px";
      Amount.style.cssText = "top : 3.83cm ; left : 12.95cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 2.8cm   ; width : 240px ; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 4.55cm ; left : 0.95cm   ; width : 355px; font-size: 16px ";
      Seb_date.style.cssText =
        "display : block; width: 200px; top: 0.42cm; left: 11.3cm; font-size: 17px; text-align: left; letter-spacing: 15px; margin-top : 16px ";
      break;

    case "kfh2": // بيت التمويل الكويتي //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/bh-kfh2.jpg";
      MyDate.style.cssText = "display : none";
      Payee.style.cssText = "top : 1.95cm ; left : 3.3cm  ; width : 445px";
      Amount.style.cssText = "top : 3.83cm ; left : 12.95cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 2.8cm   ; width : 240px ; line-height: 1.8";
      CheckFor.style.cssText =
        "top : 4.55cm ; left : 0.95cm   ; width : 355px; font-size: 16px ";
      Seb_date.style.cssText =
        "display : block; width: 200px; top: 0.42cm; left: 11.3cm; font-size: 17px; text-align: left; letter-spacing: 15px; margin-top : 16px ";
      break;

    // ----------------- Libya Checks ----------------- //

    case "lib": // المصرف الاسلامي الليبي-شركات //
      //CheckDiv.style.cssText = "width : 18.2cm ; height : 8.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-lib3.jpg";
      MyDate.style.cssText =
        "top : 0.5cm ; left : 13.0cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 3.18cm ; left : 3.2cm  ; width : 290px";
      Amount.style.cssText = "top : 2.93cm ; left : 13.4cm  ; width : 100px";
      Amount2.style.cssText =
        "display : block; top : 2.93cm ; left : 16.4cm  ; width : 35px ";
      Tafk.style.cssText =
        "top : 3.45cm ; left : 2.1cm   ; width : 500px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.62cm ; left : 3.5cm   ; width : 500px; font-size: 16px ";
      break;

    case "lib2": // المصرف الاسلامي الليبي-أفراد //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-lib2.jpg";
      MyDate.style.cssText =
        "top : 0.4cm ; left : 13.0cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 2.8cm ; left : 3.0cm  ; width : 282px";
      Amount.style.cssText = "top : 2.63cm ; left : 13.1cm  ; width : 100px";
      Amount2.style.cssText =
        "display : block; top : 2.63cm ; left : 16.1cm  ; width : 35px ";
      Tafk.style.cssText =
        "top : 3.09cm ; left : 3.9cm   ; width : 420px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.17cm ; left : 3.5cm   ; width : 500px; font-size: 16px ";
      break;

    case "jum": // مصرف الجمهورية-أفراد //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-jum.jpg";
      MyDate.style.cssText =
        "top : 0.25cm ; left : 12.85cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 2.7cm ; left : 0.3cm  ; width : 360px";
      Amount.style.cssText = "top : 2.5cm ; left : 13.0cm  ; width : 100px";
      Amount2.style.cssText =
        "top : 2.5cm ; left : 15.85cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 2.96cm ; left : 3.1cm   ; width : 430px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.03cm ; left : 3.1cm   ; width : 510px; font-size: 16px ";
      break;

    case "jum2": // مصرف الجمهورية - شركات //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-jum2.jpg";
      MyDate.style.cssText =
        "top : 0.42cm ; left : 12.95cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 2.9cm ; left : 0.7cm  ; width : 340px";
      Amount.style.cssText = "top : 2.82cm ; left : 13.2cm  ; width : 105px";
      Amount2.style.cssText =
        "top : 2.82cm ; left : 16.17cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.3cm ; left : 0.8cm   ; width : 540px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.45cm ; left : 3.0cm   ; width : 525px; font-size: 16px ";
      acc_num.style.cssText =
        "top : 1.6cm ; left : 0.8cm ; font-size: 16px; width: 170px; display : block";
      account_num_div.style.cssText = "display : block ";
      Sign_name.style.cssText =
        "top : 2.22cm ; left : 0.8cm   ; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "waha": // مصرف الواحة-أفراد //
      //CheckDiv.style.cssText = "width : 17.7cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-waha.jpg";
      MyDate.style.cssText =
        "top : 0.36cm ; left : 12.9cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 2.8cm ; left : 0.4cm  ; width : 350px";
      Amount.style.cssText = "top : 2.6cm ; left : 13.0cm  ; width : 100px";
      Amount2.style.cssText =
        "top : 2.6cm ; left : 15.9cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.1cm ; left : 3.1cm   ; width : 440px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 3.1cm   ; width : 515px; font-size: 16px ";
      break;

    case "ubb": // المصرف المتحد للتجارة والاستثمار //
      //CheckDiv.style.cssText = "width : 18.2cm ; height : 8.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-ubb.jpg";
      MyDate.style.cssText =
        "top : 0.5cm ; left : 13.2cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 3.0cm ; left : 0.8cm  ; width : 350px";
      Amount.style.cssText = "top : 2.9cm ; left : 13.7cm  ; width : 100px";
      Amount2.style.cssText =
        "top : 2.9cm ; left : 16.6cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 1.1cm   ; width : 540px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.55cm ; left : 3.1cm   ; width : 535px; font-size: 16px ";
      acc_num.style.cssText =
        "top : 1.8cm ; left : 0.95cm ; font-size: 16px; width: 170px; display : block";
      account_num_div.style.cssText = "display : block ";
      Sign_name.style.cssText =
        "top : 2.4cm ; left : 0.95cm   ; display : block; font-size: 16px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "nab": // مصرف شمال افريقيا //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-nab2.jpg";
      MyDate.style.cssText =
        "top : 0.4cm ; left : 12.65cm ; width : 88px; font-size: 15px";
      Payee.style.cssText =
        "top : 2.75cm ; left : 0.6cm  ; width : 330px; font-size: 17px";
      Amount.style.cssText = "top : 2.65cm ; left : 12.9cm  ; width : 110px";
      Amount2.style.cssText =
        "top : 2.65cm ; left : 15.95cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.12cm ; left : 1.1cm   ; width : 515px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.25cm ; left : 3.0cm   ; width : 510px; font-size: 16px ";
      acc_num.style.cssText =
        "top : 1.55cm ; left : 0.8cm ; font-size: 15px; width: 150px; display : block";
      account_num_div.style.cssText = "display : block ";
      Sign_name.style.cssText =
        "top : 2.2cm ; left : 0.7cm   ; display : block; font-size: 15px; width : 160px";
      Sign_Name_div.style.cssText = "display : block ";
      break;

    case "bcd": // مصرف التجارة والتنمية //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-bcd.jpg";
      MyDate.style.cssText =
        "top : 0.35cm ; left : 12.5cm ; width : 88px; font-size: 15px";
      Payee.style.cssText =
        "top : 2.9cm ; left : 0.55cm  ; width : 330px; font-size: 16px";
      Amount.style.cssText = "top : 2.9cm ; left : 12.75cm  ; width : 110px";
      Amount2.style.cssText =
        "top : 2.9cm ; left : 15.8cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.3cm ; left : 0.55cm   ; width : 555px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.45cm ; left : 3.0cm   ; width : 515px; font-size: 16px ";
      break;

    case "yaq": // مصرف اليقين //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 8.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-yaq.jpg";
      MyDate.style.cssText =
        "top : 0.25cm ; left : 13.0cm ; width : 88px; font-size: 15px";
      Payee.style.cssText =
        "top : 2.8cm ; left : 3.25cm  ; width : 305px; font-size: 16px";
      Amount.style.cssText = "top : 2.7cm ; left : 13.4cm  ; width : 110px";
      Amount2.style.cssText =
        "top : 2.7cm ; left : 16.3cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 4.45cm   ; width : 440px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.0cm ; left : 3.4cm   ; width : 530px; font-size: 15px ";
      break;

    case "bnp2": // مصرف الصحارى //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 8.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-bnp2.jpg";
      MyDate.style.cssText = "top : 0.35cm ; left : 12.5cm ; width : 88px";
      Payee.style.cssText =
        "top : 2.9cm ; left : 2.8cm  ; width : 315px; font-size: 16px";
      Amount.style.cssText = "top : 2.85cm ; left : 13.5cm  ; width : 110px";
      Amount2.style.cssText =
        "top : 2.85cm ; left : 16.3cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.3cm ; left : 2.3cm   ; width : 490px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.5cm ; left : 3.0cm   ; width : 535px; font-size: 15px ";
      break;

    case "bnp3": // مصرف الصحارى2 //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 7.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-bnp3.jpg";
      MyDate.style.cssText =
        "top : 0.9cm ; left : 0.35cm ; width : 88px; font-size: 15px";
      Payee.style.cssText =
        "top : 3.33cm ; left : 2.8cm  ; width : 380px; font-size: 16px";
      Amount.style.cssText = "top : 1.2cm ; left : 11.6cm  ; width : 125px";
      Amount2.style.cssText =
        "top : 1.2cm ; left : 14.85cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.72cm ; left : 2.8cm   ; width : 370px ; line-height: 1.3";
      CheckFor.style.cssText = "display : none ";
      Sign_name.style.cssText =
        "top : 1.8cm ; left : 0.1cm   ; display : block; font-size: 15px; width : 110px";
      Sign_Name_div.style.cssText = "display : block ";
      Place.style.cssText =
        "top : 1.95cm ; left : 6.4cm   ; width : 120px; font-size: 15px ; display : block; text-align: center ";

      acc_num.style.cssText =
        "top : 2.55cm ; left : 0.2cm ; font-size: 15px; width: 100px; display : block";
      account_num_div.style.cssText = "display : block ";
      break;

    case "ncb2": // المصرف التجاري الوطني //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 8.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-ncb2.jpg";
      MyDate.style.cssText =
        "top : 0.35cm ; left : 13.1cm ; width : 88px; font-size: 16px";
      Payee.style.cssText =
        "top : 2.9cm ; left : 1.1cm  ; width : 435px; font-size: 16px";
      Amount.style.cssText = "top : 2.77cm ; left : 13.35cm  ; width : 110px";
      Amount2.style.cssText =
        "top : 2.77cm ; left : 16.4cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 3.25cm ; left : 2.0cm   ; width : 510px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.45cm ; left : 2.9cm   ; width : 545px; font-size: 15px ";
      break;

    case "wahda": // مصرف الوحدة //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 7.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ly-wahda.jpg";
      MyDate.style.cssText =
        "top : 0.15cm ; left : 12.3cm ; width : 88px; font-size: 15px";
      Payee.style.cssText =
        "top : 2.5cm ; left : 0.8cm  ; width : 330px; font-size: 16px";
      Amount.style.cssText = "top : 2.35cm ; left : 12.7cm  ; width : 110px";
      Amount2.style.cssText =
        "top : 2.35cm ; left : 15.85cm  ; width : 35px; display : block";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 2.9cm   ; width : 450px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 3.95cm ; left : 2.9cm   ; width : 525px; font-size: 15px ";
      break;

    // ----------------- Kuwait Checks ----------------- //

    case "bob": // بنك بوبيان-صغير //
      //CheckDiv.style.cssText = "width : 15.6cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-bob.jpg";
      MyDate.style.cssText =
        "top : 1.0cm ; left : 12.0cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 2.2cm ; left : 2.2cm  ; width : 435px";
      Amount.style.cssText = "top : 3.5cm ; left : 12.0cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 3.0cm ; left : 1.2cm   ; width : 320px ; line-height: 1.5";
      CheckFor.style.cssText = "display : none ";
      break;

    case "bob3": // بنك بوبيان-كبير //
      //CheckDiv.style.cssText = "width : 17.8cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-bob3.jpg";
      MyDate.style.cssText = "top : 1.25cm ; left : 14.0cm ; width : 88px";
      Payee.style.cssText = "top : 2.55cm ; left : 2.35cm  ; width : 510px";
      Amount.style.cssText = "top : 4.15cm ; left : 13.65cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 3.6cm ; left : 1.2cm   ; width : 320px ; line-height: 1.5";
      CheckFor.style.cssText =
        "top : 4.75cm ; left : 0.8cm   ; width : 430px; font-size: 16px ";
      break;

    case "bob2": // 2بنك بوبيان //
      //CheckDiv.style.cssText = "width : 18cm ; height : 9.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-bob2.jpg";
      MyDate.style.cssText =
        "top : 2.9cm ; left : 14.0cm ; width : 88px; font-size: 17px";
      Payee.style.cssText = "top : 2.9cm ; left : 1.95cm  ; width : 330px";
      Amount.style.cssText = "top : 4.3cm ; left : 13.4cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 3.45cm ; left : 1.5cm   ; width : 380px ; line-height: 2.5; font-size: 16px";
      CheckFor.style.cssText =
        "top : 5.15cm ; left : 1.1cm   ; width : 410px; font-size: 17px ";
      break;

    case "kfh": // بنك التمويل الكويتي //
      //CheckDiv.style.cssText = "width : 15.7cm ; height : 7.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-kfh.jpg";
      MyDate.style.cssText =
        "top : 2.55cm ; left : 12.1cm ; width : 88px; font-size: 15px";
      Payee.style.cssText = "top : 2.45cm ; left : 2.0cm  ; width : 290px";
      Amount.style.cssText = "top : 3.9cm ; left : 11.85cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.9cm ; left : 1.5cm   ; width : 330px ; line-height: 1.9";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.1cm   ; width : 350px; font-size: 16px ";
      break;

    case "kfh3": // بنك التمويل الكويتي2 //
      //CheckDiv.style.cssText = "width : 18.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-kfh3.jpg";
      MyDate.style.cssText = "top : 3.25cm ; left : 14.8cm ; width : 88px";
      Payee.style.cssText = "top : 3.05cm ; left : 1.9cm  ; width : 360px";
      Amount.style.cssText = "top : 4.6cm ; left : 14.0cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 3.45cm ; left : 1.5cm   ; width : 400px ; line-height: 2.2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.95cm ; left : 0.9cm   ; width : 445px; font-size: 17px ";
      break;

    case "nbk2": // بنك الكويت الوطني //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-nbk2.jpg";
      MyDate.style.cssText = "top : 1.9cm ; left : 14.05cm ; width : 88px";
      Payee.style.cssText = "top : 2.85cm ; left : 2.55cm  ; width : 500px";
      Amount.style.cssText = "top : 4.4cm ; left : 13.28cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 3.3cm ; left : 1.3cm   ; width : 390px ; line-height: 1.9; font-size: 17px";
      CheckFor.style.cssText =
        "top : 4.7cm ; left : 1.1cm   ; width : 400px; font-size: 17px ";
      break;

    case "nbk3": // بنك الكويت الوطني2 //
      //CheckDiv.style.cssText = "width : 15.6cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-nbk3.jpg";
      MyDate.style.cssText =
        "top : 1.4cm ; left : 12.0cm ; width : 88px; font-size: 17px";
      Payee.style.cssText =
        "top : 2.05cm ; left : 1.9cm  ; width : 450px; font-size: 17px";
      Amount.style.cssText = "top : 3.25cm ; left : 11.8cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.25cm ; left : 0.8cm   ; width : 350px ; line-height: 1.7; font-size: 16px";
      CheckFor.style.cssText =
        "top : 3.5cm ; left : 0.5cm   ; width : 373px; font-size: 16px ";
      break;

    case "nbk4": // بنك الكويت الوطني3 //
      //CheckDiv.style.cssText = "width : 15.5cm ; height : 7.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-nbk4.jpg";
      MyDate.style.cssText =
        "top : 1.65cm ; left : 12.0cm ; width : 88px; font-size: 16px";
      Payee.style.cssText =
        "top : 2.25cm ; left : 1.9cm  ; width : 450px; font-size: 17px";
      Amount.style.cssText = "top : 3.5cm ; left : 11.8cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.45cm ; left : 0.8cm   ; width : 350px ; line-height: 1.7; font-size: 16px";
      CheckFor.style.cssText =
        "top : 3.7cm ; left : 0.5cm   ; width : 373px; font-size: 16px ";
      break;

    case "cbk": // البنك التجاري الكويتي //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-cbk.jpg";
      MyDate.style.cssText = "top : 2.4cm ; left : 13.8cm ; width : 88px";
      Payee.style.cssText = "top : 3.3cm ; left : 3.2cm  ; width : 480px";
      Amount.style.cssText = "top : 4.85cm ; left : 13.3cm  ; width : 150px";
      Tafk.style.cssText =
        "top : 4.15cm ; left : 2.4cm   ; width : 305px ; line-height: 1.9";
      CheckFor.style.cssText =
        "top : 5.35cm ; left : 0.9cm   ; width : 410px; font-size: 17px ";
      break;

    case "cbk2": // البنك التجاري الكويتي2 //
      //CheckDiv.style.cssText = "width : 15.6cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-cbk3.jpg";
      MyDate.style.cssText =
        "top : 2.3cm ; left : 12.1cm ; width : 88px; font-size: 16px";
      Payee.style.cssText = "top : 2.9cm ; left : 2.8cm  ; width : 420px";
      Amount.style.cssText = "top : 4.25cm ; left : 11.7cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 3.5cm ; left : 2.1cm   ; width : 290px ; line-height: 1.7";
      CheckFor.style.cssText =
        "top : 4.6cm ; left : 0.8cm   ; width : 370px; font-size: 17px ";
      break;

    case "kib": // بنك الكويت الدولي //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-kib.jpg";
      MyDate.style.cssText = "top : 2.9cm ; left : 14.15cm ; width : 88px";
      Payee.style.cssText = "top : 2.85cm ; left : 3.0cm  ; width : 310px";
      Amount.style.cssText = "top : 4.6cm ; left : 13.62cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 2.5cm   ; width : 340px ; line-height: 2.3";
      CheckFor.style.cssText =
        "top : 4.9cm ; left : 1.4cm   ; width : 420px; font-size: 17px ";
      break;

    case "ahli2": // البنك الاهلي المحتد //
      //CheckDiv.style.cssText = "width : 15.5cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-ahli2.jpg";
      MyDate.style.cssText =
        "top : 1.6cm ; left : 11.9cm ; width : 88px ; font-size: 17px";
      Payee.style.cssText =
        "top : 2.15cm ; left : 1.65cm  ; width : 290px ; font-size: 17px";
      Amount.style.cssText = "top : 3.15cm ; left : 11.6cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.5cm ; left : 1.4cm   ; width : 320px ; line-height: 1.5";
      CheckFor.style.cssText = "display : none ";
      break;

    case "ahli5": // البنك الاهلي المحتد2 //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 8.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-ahli5.jpg";
      MyDate.style.cssText = "top : 2.3cm ; left : 13.8cm ; width : 88px";
      Payee.style.cssText = "top : 2.95cm ; left : 1.7cm  ; width : 330px";
      Amount.style.cssText = "top : 4.25cm ; left : 13.2cm  ; width : 155px";
      Tafk.style.cssText =
        "top : 3.3cm ; left : 1.2cm   ; width : 380px ; line-height: 2.0";
      CheckFor.style.cssText =
        "top : 4.55cm ; left : 0.9cm   ; width : 410px; font-size: 17px ";
      break;

    case "abk": // البنك الاهلي الكويتي //
      //CheckDiv.style.cssText = "width : 17.8cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-abk.jpg";
      MyDate.style.cssText =
        "top : 2.95cm ; left : 14.0cm ; width : 88px ; font-size: 17px";
      Payee.style.cssText =
        "top : 2.9cm ; left : 2.7cm  ; width : 330px ; font-size: 17px";
      Amount.style.cssText = "top : 4.7cm ; left : 13.5cm  ; width : 145px";
      Tafk.style.cssText =
        "top : 3.5cm ; left : 2.3cm   ; width : 340px ; line-height: 2.2";
      CheckFor.style.cssText =
        "top : 4.95cm ; left : 0.8cm   ; width : 430px; font-size: 17px ";
      break;

    case "gulf": // بنك الخليج //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-gulf.jpg";
      MyDate.style.cssText =
        "top : 2.6cm ; left : 13.4cm ; width : 80px ; font-size: 15px";
      Payee.style.cssText =
        "top : 2.55cm ; left : 3.25cm  ; width : 225px ; font-size: 16px";
      Amount.style.cssText = "top : 4.2cm ; left : 13.35cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 3.0cm ; left : 1.15cm   ; width : 365px ; line-height: 2.2";
      CheckFor.style.cssText =
        "top : 4.4cm ; left : 0.8cm   ; width : 400px; font-size: 17px ";
      break;

    case "gulf2": // بنك الخليج 2 //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-gulf2.jpg";
      MyDate.style.cssText =
        "top : 2.25cm ; left : 13.2cm ; width : 80px ; font-size: 16px";
      Payee.style.cssText =
        "top : 2.15cm ; left : 3.25cm  ; width : 225px ; font-size: 16px";
      Amount.style.cssText = "top : 3.78cm ; left : 13.0cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 1.45cm   ; width : 350px ; line-height: 2.2";
      CheckFor.style.cssText =
        "top : 3.95cm ; left : 0.85cm   ; width : 400px; font-size: 17px ";
      break;

    case "warba": // بنك وربة //
      //CheckDiv.style.cssText = "width : 15.2cm ; height : 7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-warba.jpg";
      MyDate.style.cssText =
        "top : 1.6cm ; left : 11.35cm ; width : 80px ; font-size: 15px";
      Payee.style.cssText =
        "top : 2.4cm ; left : 3.3cm  ; width : 350px ; font-size: 16px";
      Amount.style.cssText = "top : 3.2cm ; left : 11.0cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 2.15cm   ; width : 245px ; line-height: 1.9";
      CheckFor.style.cssText =
        "top : 3.9cm ; left : 0.8cm   ; width : 325px; font-size: 16px ";
      break;

    case "warba2": // بنك وربة 2//
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-warba2.jpg";
      MyDate.style.cssText =
        "top : 2.2cm ; left : 14.1cm ; width : 80px ; font-size: 17px";
      Payee.style.cssText =
        "top : 3.2cm ; left : 3.8cm  ; width : 430px ; font-size: 17px";
      Amount.style.cssText = "top : 4.1cm ; left : 13.8cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.5cm ; left : 2.35cm   ; width : 320px ; line-height: 1.9";
      CheckFor.style.cssText =
        "top : 4.75cm ; left : 0.7cm   ; width : 440px; font-size: 16px ";
      break;

    case "burg": // بنك برقان //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-burg.jpg";
      MyDate.style.cssText = "top : 2.7cm ; left : 14.35cm ; width : 80px ";
      Payee.style.cssText = "top : 3.72cm ; left : 1.4cm  ; width : 560px ";
      Amount.style.cssText = "top : 4.9cm ; left : 13.7cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 4.05cm ; left : 1.15cm   ; width : 410px ; line-height: 1.6";
      CheckFor.style.cssText =
        "top : 5.15cm ; left : 0.8cm   ; width : 440px; font-size: 16px ";
      break;

    case "hsbc4": // بنك إتش اس بي سي //
      //CheckDiv.style.cssText = "width : 17.9cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-hsbc.jpg";
      MyDate.style.cssText = "top : 0.35cm ; left : 13.22cm ; width : 80px ";
      Payee.style.cssText = "top : 2.6cm ; left : 1.4cm  ; width : 480px ";
      Amount.style.cssText = "top : 4.1cm ; left : 12.9cm  ; width : 155px";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 3.15cm   ; width : 255px ; line-height: 2";
      CheckFor.style.cssText =
        "top : 4.35cm ; left : 0.9cm   ; width : 395px; font-size: 16px ";
      break;

    case "ibk": // بنك الكويت الصناعي //
      //CheckDiv.style.cssText = "width : 18.0cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-ibk.jpg";
      MyDate.style.cssText =
        "top : 3.05cm ; left : 14.2cm ; width : 80px; font-size: 17px ";
      Payee.style.cssText = "top : 3.0cm ; left : 0.7cm  ; width : 440px ";
      Amount.style.cssText = "top : 4.65cm ; left : 14.0cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 2.8cm   ; width : 320px ; line-height: 2.3";
      CheckFor.style.cssText =
        "top : 4.9cm ; left : 0.9cm   ; width : 430px; font-size: 17px ";
      break;

    case "qnb4": // بنك قطر الوطني //
      //CheckDiv.style.cssText = "width : 17.7cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/kw-qnb4.jpg";
      MyDate.style.cssText = "top : 1.6cm ; left : 14.1cm ; width : 80px";
      Payee.style.cssText = "top : 3.3cm ; left : 3.0cm  ; width : 445px ";
      Amount.style.cssText = "top : 4.5cm ; left : 13.6cm  ; width : 145px";
      Tafk.style.cssText =
        "top : 3.65cm ; left : 2.1cm   ; width : 350px ; line-height: 1.7";
      CheckFor.style.cssText =
        "top : 4.75cm ; left : 0.9cm   ; width : 430px; font-size: 16px ";
      break;

    // ----------------- Qatar Checks ----------------- //

    case "doha": // بنك الدوحة //
      //CheckDiv.style.cssText = "width : 18.4cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-doha.jpg";
      MyDate.style.cssText = "top : 1.4cm ; left : 14.2cm";
      Payee.style.cssText =
        "top : 2.7cm ; left : 3.1cm  ; width : 285px; font-size: 17px";
      Amount.style.cssText = "top : 2.82cm ; left : 14.1cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 3.0cm ; left : 0.9cm   ; width : 450px ; line-height: 1.5; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.08cm ; left : 0.9cm   ; width : 440px; font-size: 16px ";
      break;

    case "doha2": // بنك الدوحة 2//
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-doha2.jpg";
      MyDate.style.cssText = "top : 1.3cm ; left : 13.2cm";
      Payee.style.cssText = "top : 2.2cm ; left : 2.8cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 12.6cm  ; width : 170px";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 1.6cm   ; width : 350px ; line-height: 1.9; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.08cm ; left : 1.5cm   ; width : 350px; font-size: 16px ";
      break;

    case "qib": // مصرف قطر الاسلامي //
      //CheckDiv.style.cssText = "width : 18.2cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-qib.jpg";
      MyDate.style.cssText = "top : 1.3cm ; left : 13.6cm";
      Payee.style.cssText =
        "top : 2.8cm ; left : 3.1cm  ; width : 285px; font-size: 17px";
      Amount.style.cssText = "top : 2.82cm ; left : 14.1cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 1.9cm   ; width : 540px ; line-height: 1.5; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "qib2": // مصرف قطر الاسلامي2 //
      //CheckDiv.style.cssText = "width : 17.6cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-qib2.jpg";
      MyDate.style.cssText = "top : 1.4cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.3cm ; left : 3.0cm  ; width : 470px";
      Amount.style.cssText = "top : 3.4cm ; left : 13.3cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.75cm; left : 1.9cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "qib3": // مصرف قطر الاسلامي تميز //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-qib3.jpg";
      MyDate.style.cssText = "top : 1.35cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.2cm ; left : 2.65cm  ; width : 490px";
      Amount.style.cssText = "top : 3.4cm ; left : 13.3cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.65cm; left : 1.55cm   ; width : 350px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.08cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    case "qnb1": // بنك قطر الوطني 1 //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-qnb1.jpg";
      MyDate.style.cssText = "top : 1.3cm ; left : 13.6cm";
      Payee.style.cssText = "top : 2.2cm ; left : 3.0cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.4cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.7cm; left : 1.9cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "qnb2": // بنك قطر الوطني 2 //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-qnb2.jpg";
      MyDate.style.cssText = "top : 1.8cm ; left : 12.0cm; font-size: 14px";
      Payee.style.cssText = "top : 3.3cm ; left : 3.2cm  ; width : 410px";
      Amount.style.cssText =
        "top : 4.1cm ; left : 13.5cm  ; width : 130px; font-size: 15px";
      Tafk.style.cssText =
        "top : 3.65cm; left : 2.4cm   ; width : 320px ; line-height: 1.5; font-size: 15px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "cbq1": // البنك التجاري القطري 1 //
      //CheckDiv.style.cssText = "width : 17.6cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-cbq1.jpg";
      MyDate.style.cssText = "top : 1.35cm ; left : 13.6cm";
      Payee.style.cssText = "top : 2.2cm ; left : 3.0cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.4cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.7cm; left : 1.9cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "cbq2": // البنك التجاري القطري 2 //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-cbq2.jpg";
      MyDate.style.cssText = "top : 1.35cm ; left : 13.6cm";
      Payee.style.cssText = "top : 2.2cm ; left : 3.0cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.4cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.7cm; left : 1.9cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "qiib": // البنك الاسلامي الدولي القطري //
      //CheckDiv.style.cssText = "width : 18.4cm ; height : 7.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-qiib.jpg";
      MyDate.style.cssText = "top : 1.0cm ; left : 13.6cm";
      Payee.style.cssText = "top : 1.9cm ; left : 3.9cm  ; width : 410px";
      Amount.style.cssText = "top : 2.82cm ; left : 13.3cm  ; width : 170px";
      Tafk.style.cssText =
        "top : 2.3cm; left : 2.7cm   ; width : 290px ; line-height: 1.9; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      break;

    case "ahli4": // البنك الاهلي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-ahli4.jpg";
      MyDate.style.cssText = "top : 1.25cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.15cm ; left : 2.9cm  ; width : 470px";
      Amount.style.cssText = "top : 3.3cm ; left : 13.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.6cm; left : 1.8cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.1cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    case "barw": // بنك بروى //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-barw.jpg";
      MyDate.style.cssText = "top : 1.25cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.2cm ; left : 2.9cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.65cm; left : 1.8cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.10cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    case "arab3": // البنك العربي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-arab3.jpg";
      MyDate.style.cssText = "top : 1.25cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.2cm ; left : 2.9cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.65cm; left : 1.8cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.10cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    case "dukh": // بنك دخان //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-dukh.jpg";
      MyDate.style.cssText = "top : 1.25cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.2cm ; left : 2.9cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.65cm; left : 1.8cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.10cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    case "rayn": // مصرف الريان //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-rayn.jpg";
      MyDate.style.cssText = "top : 1.25cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.2cm ; left : 2.9cm  ; width : 470px";
      Amount.style.cssText = "top : 3.35cm ; left : 13.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.65cm; left : 1.8cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.10cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    case "hsbc5": // بنك إتش إس بي سي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/qr-hsbc5.jpg";
      MyDate.style.cssText = "top : 1.35cm ; left : 13.5cm";
      Payee.style.cssText = "top : 2.3cm ; left : 2.9cm  ; width : 470px";
      Amount.style.cssText = "top : 3.45cm ; left : 13.15cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.75cm; left : 1.8cm   ; width : 340px ; line-height: 2; font-size: 16px";
      CheckFor.style.cssText =
        "top : 4.20cm ; left : 1.6cm   ; width : 350px; font-size: 16px ";
      break;

    // ----------------- Morocco Checks ----------------- //

    case "cam": // القرض الفلاحي للمغرب //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-cam.jpg";
      MyDate.style.cssText =
        "top : 3.3cm ; left : 13.2cm ; width : 88px; font-size: 16px";
      Place.style.cssText =
        "top : 3.3cm ; left : 7.75cm   ; width : 150px; font-size: 16px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.75cm ; left : 2.7cm  ; width : 520px; font-size: 16px";
      Amount.style.cssText = "top : 0.5cm ; left : 12.9cm  ; width : 170px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.3cm ; left : 1.4cm ; width : 485px ; line-height: 1.4; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.3cm ; left : 4.3cm   ; width : 385px ; line-height: 1.4";
      }
      break;

    case "cih": // القرض العقاري والسياحي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-cih.jpg";
      MyDate.style.cssText = "top : 3.3cm ; left : 13.7cm ; width : 88px";
      Place.style.cssText =
        "top : 3.3cm ; left : 8.9cm   ; width : 150px; display : block; text-align: center ";

      Payee.style.cssText = "top : 2.4cm ; left : 2.2cm  ; width : 520px";
      Amount.style.cssText = "top : 0.02cm ; left : 12.4cm  ; width : 170px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 0.9cm ; left : 0.9cm ; width : 490px ; line-height: 1.5; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 0.9cm ; left : 3.8cm   ; width : 385px ; line-height: 1.5";
      }
      break;

    case "brid": // البريد بنك //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-brid.jpg";
      MyDate.style.cssText = "top : 3.7cm ; left : 13.4cm ; width : 88px";
      Place.style.cssText =
        "top : 3.7cm ; left : 8.9cm   ; width : 150px; display : block; text-align: center; font-size: 18px ";

      Payee.style.cssText = "top : 3.0cm ; left : 2.2cm  ; width : 520px";
      Amount.style.cssText = "top : 0.7cm ; left : 11.9cm  ; width : 170px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.5cm ; left : 1.0cm ; width : 480px ; line-height: 1.5; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.5cm ; left : 3.6cm   ; width : 390px ; line-height: 1.5";
      }
      break;

    case "pop": // البنك الشعبي //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-pop.jpg";
      MyDate.style.cssText = "top : 3.7cm ; left : 11.8cm ; width : 180px";
      Place.style.cssText =
        "top : 3.7cm ; left : 6.8cm   ; width : 150px; display : block; text-align: center; font-size: 18px ";

      Payee.style.cssText = "top : 3.0cm ; left : 2.2cm  ; width : 520px";
      Amount.style.cssText = "top : 0.2cm ; left : 12.95cm  ; width : 120px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.5cm ; left : 1.1cm ; width : 480px ; line-height: 1.5 ; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.5cm ; left : 3.9cm   ; width : 380px ; line-height: 1.5";
      }
      break;

    case "wafa2": // التجاري وفا بنك //
      //CheckDiv.style.cssText = "width : 17.6cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-wafa2.jpg";
      MyDate.style.cssText = "top : 3.65cm ; left : 11.9cm ; width : 180px";
      Place.style.cssText =
        "top : 3.65cm ; left : 7.3cm   ; width : 150px; display : block; text-align: center; font-size: 18px ";

      Payee.style.cssText = "top : 2.85cm ; left : 2.5cm  ; width : 520px";
      Amount.style.cssText = "top : 0.9cm ; left : 11.6cm  ; width : 180px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.2cm ; left : 1.1cm ; width : 475px ; line-height: 1.5; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.2cm ; left : 3.9cm   ; width : 380px ; line-height: 1.5";
      }

      break;

    case "mrc": // مصرف المغرب //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-mrc.jpg";
      MyDate.style.cssText =
        "top : 3.7cm ; left : 13.05cm ; width : 180px; font-size: 17px";
      Place.style.cssText =
        "top : 3.7cm ; left : 10.6cm   ; width : 130px; display : block; text-align: center; font-size: 17px ";

      Payee.style.cssText = "top : 3.05cm ; left : 3.25cm  ; width : 490px";
      Amount.style.cssText = "top : 0.4cm ; left : 13.0cm  ; width : 120px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.4cm ; left : 1.1cm ; width : 485px ; line-height: 1.6; text-indent: 160px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.4cm ; left : 5.3cm   ; width : 325px ; line-height: 1.6";
      }

      break;

    case "bmce": // البنك المغربي للتجارة الخارجية لإفريقيا //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 7.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-bmce.jpg";
      MyDate.style.cssText =
        "top : 3.25cm ; left : 12.0cm ; width : 180px; font-size : 17px";
      Place.style.cssText =
        "top : 3.25cm ; left : 8.4cm   ; width : 130px; display : block; text-align: left; font-size: 17px ";

      Payee.style.cssText = "top : 2.7cm ; left : 2.5cm  ; width : 500px";
      Amount.style.cssText = "top : 0.55cm ; left : 12.0cm  ; width : 140px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.2cm ; left : 1.1cm ; width : 460px ; line-height: 1.5; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.2cm ; left : 3.9cm   ; width : 360px ; line-height: 1.5";
      }

      break;

    case "wafa3": // التجاري وفا بنك - كمبيالة //
      //CheckDiv.style.cssText = "width : 20cm ; height : 10.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-wafa3.jpg";
      MyDate.style.cssText =
        "top : 3.3cm ; left : 10.9cm ; width : 110px; font-size: 17px";
      Place.style.cssText =
        "top : 3.3cm ; left : 7.3cm   ; width : 130px; display : block; text-align: left; font-size: 17px ";

      Payee.style.cssText =
        "top : 2.4cm ; left : 7.6cm  ; width : 400px; font-size: 17px";
      Amount.style.cssText =
        "top : 1.35cm ; left : 15.25cm  ; width : 130px; font-size: 17px";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 14.2cm   ; width : 190px ; line-height: 1.35";
      CheckFor.style.cssText =
        "top : 4.2cm ; left : 7.2cm   ; width : 245px; font-size: 16px ";
      DueDate.style.cssText =
        "top : 0.42cm ; left : 15.5cm ; width : 110px; font-size: 16px; display : block";
      DueDate_div.style.cssText = "display : block ";
      break;

    case "soce2": // الشركة العامة //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-soce2.jpg";
      MyDate.style.cssText =
        "top : 3.25cm ; left : 11.8cm ; width : 140px; font-size : 17px";
      Place.style.cssText =
        "top : 3.25cm ; left : 6.8cm   ; width : 140px; display : block; font-size: 17px ";

      Payee.style.cssText = "top : 2.55cm ; left : 2.2cm  ; width : 500px";
      Amount.style.cssText = "top : 0.55cm ; left : 12.0cm  ; width : 140px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.0cm ; left : 1.1cm ; width : 460px ; line-height: 1.5; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.0cm ; left : 3.9cm   ; width : 360px ; line-height: 1.5";
      }

      break;

    case "soce": // الشركة العامة - كمبيالة //
      //CheckDiv.style.cssText = "width : 20.1cm ; height : 10.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-soce.jpg";
      MyDate.style.cssText =
        "top : 3.4cm ; left : 11.4cm ; width : 110px; font-size: 15px";
      Place.style.cssText =
        "top : 3.4cm ; left : 8.0cm   ; width : 130px; display : block; text-align: left; font-size: 16px ";

      Payee.style.cssText =
        "top : 2.4cm ; left : 8.2cm  ; width : 400px; font-size: 16px";
      Amount.style.cssText =
        "top : 1.5cm ; left : 15.7cm  ; width : 130px; font-size: 16px";
      Tafk.style.cssText =
        "top : 3.1cm ; left : 15.2cm   ; width : 165px ; line-height: 1.2";
      CheckFor.style.cssText =
        "top : 4.3cm ; left : 7.8cm   ; width : 245px; font-size: 16px ";
      DueDate.style.cssText =
        "top : 0.6cm ; left : 15.8cm ; width : 110px; font-size: 15px; display : block";
      DueDate_div.style.cssText = "display : block ";
      break;

    case "pop2": // البنك الشعبي - كمبيالة //
      //CheckDiv.style.cssText = "width : 20.7cm ; height : 10.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-pop2.jpg";
      MyDate.style.cssText =
        "top : 3.75cm ; left : 12.1cm ; width : 110px; font-size: 16px";
      Place.style.cssText =
        "top : 3.75cm ; left : 8.6cm   ; width : 130px; display : block; text-align: left; font-size: 16px ";

      Payee.style.cssText =
        "top : 2.8cm ; left : 8.9cm  ; width : 400px; font-size: 16px";
      Amount.style.cssText =
        "top : 1.5cm ; left : 16.3cm  ; width : 130px; font-size: 16px";
      Tafk.style.cssText =
        "top : 3.5cm ; left : 15.4cm   ; width : 180px ; line-height: 1.2; font-size : 14px";
      CheckFor.style.cssText =
        "top : 4.4cm ; left : 8.6cm   ; width : 225px; font-size: 16px ";
      DueDate.style.cssText =
        "top : 0.55cm ; left : 16.5cm ; width : 110px; font-size: 15px; display : block";
      DueDate_div.style.cssText = "display : block ";
      break;

    case "bmce2": // البنك المغربي للتجارة الخارجية لإفريقيا-كمبيالة //
      //CheckDiv.style.cssText = "width : 20.5cm ; height : 10.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-bmce2.jpg";
      MyDate.style.cssText =
        "top : 3.70cm ; left : 11.8cm ; width : 110px; font-size: 15px";
      Place.style.cssText =
        "top : 3.70cm ; left : 8.3cm   ; width : 140px; display : block; text-align: left; font-size: 15px ";

      Payee.style.cssText =
        "top : 2.8cm ; left : 8.5cm  ; width : 430px; font-size: 16px";
      Amount.style.cssText =
        "top : 4.55cm ; left : 14.8cm  ; width : 200px; font-size: 15px";
      Tafk.style.cssText =
        "top : 5.1cm ; left : 14.5cm   ; width : 200px ; line-height: 1.2; font-size : 14px ";
      CheckFor.style.cssText =
        "top : 4.55cm ; left : 8.3cm   ; width : 225px; font-size: 15px ";
      DueDate.style.cssText =
        "top : 3.62cm ; left : 16.5cm ; width : 110px; font-size: 15px; display : block";
      DueDate_div.style.cssText = "display : block ";
      break;

    case "cam2": // القرض الفلاحي المغرب-كمبيالة //
      //CheckDiv.style.cssText = "width : 19.5cm ; height : 10.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-cam2.jpg";
      MyDate.style.cssText =
        "top : 3.07cm ; left : 11.5cm ; width : 110px; font-size: 14px";
      Place.style.cssText =
        "top : 3.07cm ; left : 7.5cm   ; width : 140px; display : block; text-align: left; font-size: 14px ";

      Payee.style.cssText =
        "top : 2.15cm ; left : 7.5cm  ; width : 430px; font-size: 14px";
      Amount.style.cssText =
        "top : 1.25cm ; left : 15.2cm  ; width : 130px; font-size: 14px";
      Tafk.style.cssText =
        "top : 2.9cm ; left : 14.5cm   ; width : 170px ; line-height: 1.2; font-size : 14px ";
      CheckFor.style.cssText =
        "top : 3.8cm ; left : 7.6cm   ; width : 230px; font-size: 14px ";
      DueDate.style.cssText =
        "top : 0.32cm ; left : 15.5cm ; width : 110px; font-size: 14px; display : block";
      DueDate_div.style.cssText = "display : block ";
      break;

    case "tgur": // الخزينة العامة للمملكة //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/mr-tgur.jpg";
      MyDate.style.cssText =
        "top : 4.0cm ; left : 12.0cm ; width : 170px; font-size : 17px";
      Place.style.cssText =
        "top : 4.0cm ; left : 6.9cm   ; width : 170px; display : block; font-size: 17px ";

      Payee.style.cssText = "top : 3.25cm ; left : 2.0cm  ; width : 540px";
      Amount.style.cssText = "top : 0.7cm ; left : 12.6cm  ; width : 132px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.4cm ; left : 0.7cm ; width : 505px ; line-height: 1.7; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.4cm ; left : 3.6cm   ; width : 395px ; line-height: 1.7";
      }

      break;

    // ----------------- Yemen Checks ----------------- //

    case "cac": // بنك التسليف التعاوني //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-cac.jpg";
      MyDate.style.cssText = "top : 0.87cm ; left : 11.65cm ; width : 88px";
      Payee.style.cssText = "top : 2.2cm ; left : 3.35cm  ; width : 360px";
      Amount.style.cssText = "top : 4.25cm ; left : 11.8cm  ; width : 170px";
      Tafk.style.cssText =
        "top : 2.55cm ; left : 2.4cm   ; width : 480px ; line-height: 1.6;font-size : 17px";
      CheckFor.style.cssText =
        "top : 3.6cm ; left : 1.0cm   ; width : 560px; font-size: 17px ";
      break;

    case "inch": // بنك اليمن للاشاء والتعمير //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-inch.jpg";
      MyDate.style.cssText = "top : 1.05cm ; left : 11.65cm ; width : 88px";
      Payee.style.cssText = "top : 2.3cm ; left : 3.35cm  ; width : 360px";
      Amount.style.cssText = "top : 4.4cm ; left : 11.8cm  ; width : 170px";
      Tafk.style.cssText =
        "top : 2.65cm ; left : 2.4cm   ; width : 480px ; line-height: 1.6;font-size : 17px";
      CheckFor.style.cssText =
        "top : 3.75cm ; left : 1.0cm   ; width : 560px; font-size: 17px ";
      break;

    case "iby": // بنك اليمن الدولي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-iby.jpg";
      MyDate.style.cssText = "top : 1.4cm ; left : 11.8cm ; width : 88px";
      Payee.style.cssText = "top : 2.5cm ; left : 3.2cm  ; width : 380px";
      Amount.style.cssText = "top : 4.23cm ; left : 12.45cm  ; width : 125px";
      Tafk.style.cssText =
        "top : 2.9cm ; left : 1.5cm   ; width : 510px ; line-height: 2.0;font-size : 17px";
      CheckFor.style.cssText =
        "top : 4.4cm ; left : 1.0cm   ; width : 380px; font-size: 17px ";
      break;

    case "ykb": // بنك اليمن والكويت //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-ykb.jpg";
      MyDate.style.cssText =
        "top : 2.9cm ; left : 12.7cm ; width : 88px; font-size : 16px ; letter-spacing: 4px";
      Payee.style.cssText = "top : 3.55cm ; left : 3.3cm  ; width : 360px";
      Amount.style.cssText = "top : 5.6cm ; left : 13.0cm  ; width : 105px";
      Tafk.style.cssText =
        "top : 3.8cm ; left : 2.7cm   ; width : 460px ; line-height: 1.6 ; font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.9cm ; left : 2.7cm   ; width : 330px; font-size: 16px ";
      break;

    case "saba": // بنك سبأ الاسلامي //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-saba.jpg";
      MyDate.style.cssText = "top : 1.55cm ; left : 13.2cm ; width : 88px";
      Payee.style.cssText = "top : 2.3cm ; left : 3.7cm  ; width : 350px";
      Amount.style.cssText = "top : 3.22cm ; left : 12.7cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 3.05cm   ; width : 300px ; line-height: 1.7 ; font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.0cm ; left : 0.8cm   ; width : 430px; font-size: 16px ";
      break;

    case "center2": //البنك المركزي اليمني //
      //CheckDiv.style.cssText = "width : 17.2cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-center2.jpg";
      MyDate.style.cssText = "top : 0.95cm ; left : 11.6cm ; width : 88px";
      Payee.style.cssText = "top : 2.45cm ; left : 3.5cm  ; width : 360px";
      Amount.style.cssText = "top : 4.8cm ; left : 12.3cm  ; width : 145px";
      Tafk.style.cssText =
        "top : 2.75cm ; left : 2.0cm   ; width : 500px ; line-height: 1.6 ; font-size : 15px";
      CheckFor.style.cssText =
        "top : 3.8cm ; left : 0.4cm   ; width : 610px; font-size: 15px ";
      break;

    case "tadh": //بنك التضامن //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/ym-tadh.jpg";
      MyDate.style.cssText = "top : 0.6cm ; left : 12.3cm ; width : 88px";
      Payee.style.cssText = "top : 2.3cm ; left : 3.4cm  ; width : 360px";
      Amount.style.cssText = "top : 4.9cm ; left : 11.5cm  ; width : 185px";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 2.9cm   ; width : 460px ; line-height: 1.6 ; font-size : 15px";
      CheckFor.style.cssText =
        "top : 3.9cm ; left : 1.0cm   ; width : 580px; font-size: 15px ";
      break;

    // ----------------- Oman Checks ----------------- //

    case "sib": // صحار الدولي //
      //CheckDiv.style.cssText = "width : 17.8cm ; height : 7.5cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-sib2.jpg";
      MyDate.style.cssText = "top : 0.80cm ; left : 13.0cm ; width : 88px";
      Payee.style.cssText = "top : 2.6cm ; left : 2.4cm  ; width : 440px";
      Amount.style.cssText = "top : 3.7cm ; left : 13.8cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 2.85cm ; left : 1.5cm   ; width : 375px ; line-height: 1.7;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.05cm ; left : 0.7cm   ; width : 400px; font-size: 16px ";
      break;

    case "sib2": // صحار الدولي2 //
      //CheckDiv.style.cssText = "width : 17.7cm ; height : 7.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-sib3.jpg";
      MyDate.style.cssText = "top : 1.10cm ; left : 13.5cm ; width : 88px";
      Payee.style.cssText = "top : 2.1cm ; left : 2.4cm  ; width : 450px";
      Amount.style.cssText = "top : 3.0cm ; left : 13.0cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 2.5cm ; left : 1.5cm   ; width : 360px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 3.7cm ; left : 0.7cm   ; width : 415px; font-size: 16px ";
      break;

    case "sib3": // صحار الدولي2 //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-sib4.jpg";
      MyDate.style.cssText = "top : 1.65cm ; left : 14.5cm ; width : 88px";
      Payee.style.cssText = "top : 3.1cm ; left : 2.6cm  ; width : 485px";
      Amount.style.cssText = "top : 4.1cm ; left : 14.1cm  ; width : 125px";
      Tafk.style.cssText =
        "top : 3.6cm ; left : 1.55cm   ; width : 390px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.1cm ; left : 0.9cm   ; width : 440px; font-size: 16px ";
      break;

    case "sib5": // صحار الاسلامي //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-sib5.jpg";
      MyDate.style.cssText = "top : 1.35cm ; left : 14.5cm ; width : 88px";
      Payee.style.cssText = "top : 3.05cm ; left : 2.6cm  ; width : 460px";
      Amount.style.cssText = "top : 4.25cm ; left : 14.2cm  ; width : 160px";
      Tafk.style.cssText =
        "top : 3.6cm ; left : 1.55cm   ; width : 390px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.1cm ; left : 0.9cm   ; width : 440px; font-size: 16px ";
      break;

    case "hsbc3": // بنك إتش سي بي سي //
      //CheckDiv.style.cssText = "width : 20.3cm ; height : 9.6cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-hsbc3.jpg";
      MyDate.style.cssText = "top : 0.30cm ; left : 15.7cm ; width : 88px";
      Payee.style.cssText = "top : 3.2cm ; left : 3.2cm  ; width : 560px";
      Amount.style.cssText = "top : 4.95cm ; left : 15.8cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.95cm ; left : 3.0cm   ; width : 340px ; line-height: 2.6;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.85cm ; left : 1.4cm   ; width : 450px; font-size: 16px ";
      break;

    case "ahli3": // البنك الأهلي //
      //CheckDiv.style.cssText = "width : 19.5cm ; height : 9.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-ahli3.jpg";
      MyDate.style.cssText = "top : 1.65cm ; left : 15.7cm ; width : 88px";
      Payee.style.cssText = "top : 3.35cm ; left : 0.7cm  ; width : 440px";
      Amount.style.cssText = "top : 3.08cm ; left : 14.3cm  ; width : 160px";
      Tafk.style.cssText =
        "top : 3.90cm ; left : 2.2cm   ; width : 340px ; line-height: 2.3;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.5cm ; left : 0.7cm   ; width : 440px; font-size: 16px ";
      break;

    case "ahli6": // البنك الأهلي الاسلامي //
      //CheckDiv.style.cssText = "width : 19.5cm ; height : 9.4cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-ahli6.jpg";
      MyDate.style.cssText = "top : 1.75cm ; left : 15.8cm ; width : 88px";
      Payee.style.cssText = "top : 3.45cm ; left : 0.8cm  ; width : 440px";
      Amount.style.cssText = "top : 3.18cm ; left : 14.4cm  ; width : 160px";
      Tafk.style.cssText =
        "top : 4.0cm ; left : 2.3cm   ; width : 340px ; line-height: 2.3;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.6cm ; left : 0.8cm   ; width : 440px; font-size: 16px ";
      break;

    case "niz": // بنك نزوى //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-niz.jpg";
      MyDate.style.cssText =
        "top : 1.5cm ; left : 15.35cm ; width : 88px;font-size : 17px";
      Payee.style.cssText = "top : 3.30cm ; left : 2.0cm  ; width : 380px";
      Amount.style.cssText = "top : 3.1cm ; left : 14.5cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 3.85cm ; left : 2.15cm   ; width : 360px ; line-height: 2.1;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.35cm ; left : 0.7cm   ; width : 460px; font-size: 16px ";
      break;

    case "musc": // بنك مسقط //
      //CheckDiv.style.cssText = "width : 18.8cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-musc.jpg";
      MyDate.style.cssText = "top : 1.4cm ; left : 14.1cm ; width : 88px";
      Payee.style.cssText = "top : 3.20cm ; left : 2.8cm  ; width : 520px";
      Amount.style.cssText = "top : 4.03cm ; left : 12.4cm  ; width : 100px";
      Amount2.style.cssText =
        "top : 4.03cm ; left : 16.0cm  ; width : 45px; display : block ";
      Tafk.style.cssText =
        "top : 3.6cm ; left : 2.2cm   ; width : 290px ; line-height: 2.1;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.05cm ; left : 0.8cm   ; width : 390px; font-size: 16px ";
      break;

    case "musc2": // بنك مسقط 2 //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-musc2.jpg";
      MyDate.style.cssText = "top : 0.55cm ; left : 14.5cm ; width : 88px";
      Payee.style.cssText = "top : 2.30cm ; left : 3.7cm  ; width : 445px";
      Amount.style.cssText = "top : 3.55cm ; left : 12.7cm  ; width : 120px";
      Amount2.style.cssText =
        "top : 3.55cm ; left : 16.8cm  ; width : 45px; display : block ";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 2.3cm   ; width : 300px ; line-height: 2.3;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.4cm ; left : 0.9cm   ; width : 390px; font-size: 16px ";
      break;

    case "musc3": // بنك مسقط 3 //
      //CheckDiv.style.cssText = "width : 21.2cm ; height : 9.2cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-musc3.jpg";
      MyDate.style.cssText =
        "top : 2.35cm ; left : 1.9cm ; width : 88px; font-size: 19px";
      Payee.style.cssText = "top : 3.25cm ; left : 1.8cm  ; width : 545px";
      Amount.style.cssText =
        "top : 4.4cm ; left : 14.7cm  ; width : 120px; font-size: 15px";
      Amount2.style.cssText =
        "top : 4.4cm ; left : 17.9cm  ; width : 45px; display : block; font-size: 15px ";
      Tafk.style.cssText =
        "top : 3.6cm ; left : 2.1cm   ; width : 420px ; line-height: 2.3;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.95cm ; left : 0.9cm   ; width : 535px; font-size: 16px ";
      break;

    case "dhof": // بنك ظفار //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-dhof.jpg";
      MyDate.style.cssText = "top : 1.7cm ; left : 12.5cm ; width : 88px";
      Payee.style.cssText = "top : 3.35cm ; left : 2.6cm  ; width : 480px";
      Amount.style.cssText = "top : 4.55cm ; left : 14.0cm  ; width : 160px";
      Tafk.style.cssText =
        "top : 3.9cm ; left : 1.7cm   ; width : 380px ; line-height: 1.9;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.2cm ; left : 0.8cm   ; width : 440px; font-size: 16px ";
      break;

    case "thfr": // بنك ظفار2 //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-thfr.jpg";
      MyDate.style.cssText = "top : 1.3cm ; left : 15.2cm ; width : 88px";
      Payee.style.cssText = "top : 3.35cm ; left : 2.4cm  ; width : 550px";
      Amount.style.cssText = "top : 4.25cm ; left : 13.35cm  ; width : 125px";
      Amount2.style.cssText =
        "top : 4.3cm ; left : 17.35cm  ; width : 45px; display : block ";
      Tafk.style.cssText =
        "top : 3.83cm ; left : 2.0cm   ; width : 340px ; line-height: 1.9;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.2cm ; left : 0.6cm   ; width : 440px; font-size: 16px ";
      break;

    case "oarb": // بنك عمان العربي //
      //CheckDiv.style.cssText = "width : 19.0cm ; height : 9.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-oarb.jpg";
      MyDate.style.cssText = "top : 1.0cm ; left : 15.3cm ; width : 88px";
      Payee.style.cssText = "top : 3.1cm ; left : 3.0cm  ; width : 345px";
      Amount.style.cssText = "top : 2.97cm ; left : 15.2cm  ; width : 120px";
      Tafk.style.cssText =
        "top : 3.65cm ; left : 2.1cm   ; width : 380px ; line-height: 2.2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.2cm ; left : 0.8cm   ; width : 470px; font-size: 16px ";
      break;

    case "nbo": // البنك الوطني العماني //
      //CheckDiv.style.cssText = "width : 20.4cm ; height : 9.3cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/om-nbo.jpg";
      MyDate.style.cssText = "top : 1.15cm ; left : 16.1cm ; width : 100px";
      Payee.style.cssText =
        "top : 3.6cm ; left : 3.7cm  ; width : 290px ; font-size : 17px";
      Amount.style.cssText = "top : 3.7cm ; left : 16.3cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 4.1cm ; left : 2.7cm   ; width : 400px ; line-height: 2.2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 5.65cm ; left : 0.85cm   ; width : 520px; font-size: 16px ";
      break;

    // ----------------- Sudan Checks ----------------- //

    case "slm": // مصرف السلام //
      //CheckDiv.style.cssText = "width : 16cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-slm.jpg";
      MyDate.style.cssText = "top : 1.6cm ; left : 12.25cm ; width : 88px";
      Payee.style.cssText = "top : 2.8cm ; left : 1.0cm  ; width : 540px";
      Amount.style.cssText =
        "top : 4.6cm ; left : 12.9cm  ; width : 105px; text-align: left";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 1.7cm   ; width : 465px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.9cm ; left : 0.9cm   ; width : 400px; font-size: 17px ";
      break;

    case "sfb": // البنك السوداني الفرنسي //
      //CheckDiv.style.cssText = "width : 16.1cm ; height : 8.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-sfb.jpg";
      MyDate.style.cssText = "top : 1.6cm ; left : 12.2cm ; width : 88px";
      Payee.style.cssText = "top : 2.35cm ; left : 3.3cm  ; width : 400px";
      Amount.style.cssText = "top : 5.3cm ; left : 10.5cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.75cm ; left : 2.4cm   ; width : 435px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.05cm ; left : 0.9cm   ; width : 550px; font-size: 16px ";
      break;

    case "glf": // بنك الخليج //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.7cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-glf.jpg";
      MyDate.style.cssText = "top : 1.5cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.3cm ; left : 1.7cm  ; width : 490px";
      Amount.style.cssText = "top : 5.1cm ; left : 10.65cm  ; width : 140px";
      Tafk.style.cssText =
        "top : 2.7cm ; left : 2.2cm   ; width : 470px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.0cm ; left : 1.7cm   ; width : 490px; font-size: 16px ";
      break;

    case "khr": // بنك الخرطوم //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-khr.jpg";
      MyDate.style.cssText = "top : 2.0cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.75cm ; left : 1.7cm  ; width : 490px";
      Amount.style.cssText = "top : 5.5cm ; left : 11.7cm  ; width : 100px";
      Tafk.style.cssText =
        "top : 3.1cm ; left : 2.65cm   ; width : 460px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.4cm ; left : 1.1cm   ; width : 540px; font-size: 16px ";
      break;

    case "neel": // بنك النيل //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-neel.jpg";
      MyDate.style.cssText = "top : 1.35cm ; left : 12.7cm ; width : 88px";
      Payee.style.cssText = "top : 3.0cm ; left : 2.8cm  ; width : 450px";
      Amount.style.cssText = "top : 5.45cm ; left : 12.5cm  ; width : 130px";
      Tafk.style.cssText =
        "top : 3.4cm ; left : 2.8cm   ; width : 450px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.6cm ; left : 2.8cm   ; width : 450px; font-size: 16px ";
      break;

    case "ssd": // بنك الادخار والتنمية //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-ssd.jpg";
      MyDate.style.cssText = "top : 1.5cm ; left : 12.6cm ; width : 88px";
      Payee.style.cssText = "top : 2.4cm ; left : 1.7cm  ; width : 500px";
      Amount.style.cssText = "top : 5.15cm ; left : 11.5cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.73cm ; left : 2.25cm   ; width : 480px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.0cm ; left : 1.7cm   ; width : 500px; font-size: 16px ";
      break;

    case "ssb": // البنك السعودي السوداني //
      //CheckDiv.style.cssText = "width : 16.3cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-ssb.jpg";
      MyDate.style.cssText = "top : 1.65cm ; left : 12.5cm ; width : 88px";
      Payee.style.cssText = "top : 2.45cm ; left : 1.65cm  ; width : 500px";
      Amount.style.cssText = "top : 5.35cm ; left : 11.45cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.80cm ; left : 2.15cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.65cm   ; width : 500px; font-size: 16px ";
      break;

    case "fib2": // بنك فيصل الاسلامي 2 //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-fib2.jpg";
      MyDate.style.cssText = "top : 1.8cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.55cm ; left : 1.60cm  ; width : 500px";
      Amount.style.cssText = "top : 5.27cm ; left : 11.45cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.85cm ; left : 2.15cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.15cm   ; width : 540px; font-size: 16px ";
      break;

    case "edb2": // بنك تنمية الصادرات 2 //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-edb2.jpg";
      MyDate.style.cssText = "top : 1.8cm ; left : 12.5cm ; width : 88px";
      Payee.style.cssText = "top : 2.6cm ; left : 1.7cm  ; width : 500px";
      Amount.style.cssText = "top : 5.4cm ; left : 11.55cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.9cm ; left : 2.25cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.2cm ; left : 1.25cm   ; width : 540px; font-size: 16px ";
      break;

    case "nbe2": // البنك الأهلي المصري 2 //
      //CheckDiv.style.cssText = "width : 16.4cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-nbe2.jpg";
      MyDate.style.cssText = "top : 1.8cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.55cm ; left : 1.60cm  ; width : 500px";
      Amount.style.cssText = "top : 5.4cm ; left : 11.45cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.85cm ; left : 2.15cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.15cm   ; width : 540px; font-size: 16px ";
      break;

    case "fcb": // مصرف المزارع التجاري //
      //CheckDiv.style.cssText = "width : 16.4cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-fcb.jpg";
      MyDate.style.cssText = "top : 1.65cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.5cm ; left : 1.60cm  ; width : 500px";
      Amount.style.cssText = "top : 5.35cm ; left : 11.45cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 2.15cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.15cm   ; width : 540px; font-size: 16px ";
      break;

    case "onb": // بنك امدرمان الوطني //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-onb.jpg";
      MyDate.style.cssText = "top : 1.65cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.5cm ; left : 1.60cm  ; width : 500px";
      Amount.style.cssText = "top : 5.35cm ; left : 11.45cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 2.15cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.15cm   ; width : 540px; font-size: 16px ";
      break;

    case "wnb": // بنك العمال الوطني //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-wnb.jpg";
      MyDate.style.cssText = "top : 1.65cm ; left : 12.4cm ; width : 88px";
      Payee.style.cssText = "top : 2.5cm ; left : 1.60cm  ; width : 500px";
      Amount.style.cssText = "top : 5.35cm ; left : 11.45cm  ; width : 115px";
      Tafk.style.cssText =
        "top : 2.8cm ; left : 2.15cm   ; width : 480px ; line-height: 2;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.15cm ; left : 1.15cm   ; width : 540px; font-size: 16px ";
      break;

    case "barq": // بنك البركة //
      //CheckDiv.style.cssText = "width : 16.4cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-barq.jpg";
      MyDate.style.cssText =
        "top : 1.9cm ; left : 12.4cm ; width : 88px;font-size : 17px";
      Payee.style.cssText = "top : 2.70cm ; left : 1.4cm  ; width : 510px";
      Amount.style.cssText = "top : 5.45cm ; left : 12.1cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 3.05cm ; left : 2.1cm   ; width : 480px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.35cm ; left : 0.7cm   ; width : 570px; font-size: 16px ";
      break;

    case "ucb": // بنك المال المتحد //
      //CheckDiv.style.cssText = "width : 16.4cm ; height : 8.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-ucb.jpg";
      MyDate.style.cssText =
        "top : 1.6cm ; left : 12.35cm ; width : 88px;font-size : 17px";
      Payee.style.cssText = "top : 2.40cm ; left : 1.3cm  ; width : 500px";
      Amount.style.cssText = "top : 5.2cm ; left : 11.6cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 2.75cm ; left : 2.1cm   ; width : 480px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.05cm ; left : 1.5cm   ; width : 500px; font-size: 16px ";
      break;

    case "jzjo": // بنك الجزيرة السوداني الأردني //
      //CheckDiv.style.cssText = "width : 16.5cm ; height : 8.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/sd-jzjo.jpg";
      MyDate.style.cssText =
        "top : 1.8cm ; left : 12.5cm ; width : 88px;font-size : 17px";
      Payee.style.cssText = "top : 2.55cm ; left : 1.5cm  ; width : 500px";
      Amount.style.cssText = "top : 5.33cm ; left : 11.5cm  ; width : 110px";
      Tafk.style.cssText =
        "top : 2.9cm ; left : 2.1cm   ; width : 480px ; line-height: 1.8;font-size : 16px";
      CheckFor.style.cssText =
        "top : 4.2cm ; left : 1.5cm   ; width : 500px; font-size: 16px ";
      break;

    // ----------------- Algeria Checks ----------------- //

    case "abc2": // بنك Abc //
      //CheckDiv.style.cssText = "width : 17.1cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-abc2.jpg";
      MyDate.style.cssText =
        "top : 3.75cm ; left : 13.65cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.75cm ; left : 10.45cm   ; width : 110px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.12cm ; left : 3.55cm  ; width : 455px; font-size: 16px";
      Amount.style.cssText = "top : 0.45cm ; left : 13.2cm  ; width : 130px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.45cm ; left : 1.1cm ; width : 520px ; line-height: 1.55; text-indent: 155px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.45cm ; left : 5.1cm   ; width : 370px ; line-height: 1.5";
      }
      break;

    case "alg": // بريد الجزائر //
      //CheckDiv.style.cssText = "width : 17.7cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-alg.jpg";
      MyDate.style.cssText =
        "top : 3.70cm ; left : 14.1cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.70cm ; left : 10.8cm   ; width : 110px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.10cm ; left : 2.7cm  ; width : 520px; font-size: 16px";
      Amount.style.cssText = "top : 0.6cm ; left : 12.85cm  ; width : 150px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.35cm ; left : 0.7cm ; width : 515px ; line-height: 1.4; text-indent: 145px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.35cm ; left : 4.5cm   ; width : 370px ; line-height: 1.4";
      }
      break;

    case "bna": // البنك الوطني الجزائري //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-bna.jpg";
      MyDate.style.cssText =
        "top : 4.35cm ; left : 13.1cm ; width : 88px; font-size: 16px";
      Place.style.cssText =
        "top : 4.35cm ; left : 9.5cm   ; width : 110px; font-size: 16px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.5cm ; left : 2.6cm  ; width : 460px; font-size: 16px";
      Amount.style.cssText = "top : 0.7cm ; left : 13.7cm  ; width : 110px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.75cm ; left : 0.7cm ; width : 515px ; line-height: 1.75; text-indent: 145px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.75cm ; left : 4.5cm   ; width : 375px ; line-height: 1.7";
      }
      break;

    case "bna2": // البنك الوطني الجزائري2 //
      //CheckDiv.style.cssText = "width : 16.7cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-bna2.jpg";
      MyDate.style.cssText =
        "top : 3.85cm ; left : 12.7cm ; width : 88px; font-size: 16px";
      Place.style.cssText =
        "top : 3.85cm ; left : 9.1cm   ; width : 110px; font-size: 16px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.0cm ; left : 2.3cm  ; width : 460px; font-size: 16px";
      Amount.style.cssText = "top : 0.48cm ; left : 13.45cm  ; width : 120px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.2cm ; left : 0.5cm ; width : 515px ; line-height: 1.75; text-indent: 145px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.2cm ; left : 4.1cm   ; width : 375px ; line-height: 1.8";
      }
      break;

    case "bdl": // بنك الفلاحة والتنمية الريفية //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-bdl.jpg";
      MyDate.style.cssText =
        "top : 4.15cm ; left : 13.4cm ; width : 88px; font-size: 16px";
      Place.style.cssText =
        "top : 4.15cm ; left : 10.35cm   ; width : 100px; font-size: 16px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.35cm ; left : 2.8cm  ; width : 460px; font-size: 16px";
      Amount.style.cssText = "top : 0.4cm ; left : 13.8cm  ; width : 110px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.40cm ; left : 0.9cm ; width : 515px ; line-height: 1.9; text-indent: 145px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.40cm ; left : 4.6cm   ; width : 375px ; line-height: 1.9";
      }
      break;

    case "sga": // سوسيتي جنرال الجزائر //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-sga.jpg";
      MyDate.style.cssText =
        "top : 4.5cm ; left : 13.85cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 4.5cm ; left : 10.78cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.12cm ; left : 2.0cm  ; width : 530px; font-size: 15px";
      Amount.style.cssText = "top : 0.50cm ; left : 13.6cm  ; width : 120px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.75cm ; left : 0.5cm ; width : 560px ; line-height: 1.35; text-indent: 120px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.75cm ; left : 3.5cm   ; width : 450px ; line-height: 1.35";
      }
      break;

    case "cpa": // القرض الشعبي الجزائري //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.1cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-cpa.jpg";
      MyDate.style.cssText =
        "top : 3.05cm ; left : 13.80cm ; width : 88px; font-size: 14px";
      Place.style.cssText =
        "top : 3.05cm ; left : 10.2cm   ; width : 100px; font-size: 14px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.5cm ; left : 2.8cm  ; width : 485px; font-size: 15px";
      Amount.style.cssText =
        "top : 0.60cm ; left : 13.4cm  ; width : 130px; font-size: 17px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 0.8cm ; left : 0.75cm ; width : 530px ; line-height: 1.55; text-indent: 150px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 0.8cm ; left : 4.5cm   ; width : 390px ; line-height: 1.5";
      }
      break;

    case "bdl2": // بنك التنمية المحلية //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-bdl2.jpg";
      MyDate.style.cssText =
        "top : 3.78cm ; left : 13.80cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.78cm ; left : 9.7cm   ; width : 105px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.85cm ; left : 2.4cm  ; width : 515px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.50cm ; left : 13.55cm  ; width : 115px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.67cm ; left : 0.8cm ; width : 495px ; line-height: 1.2; text-indent: 110px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.67cm ; left : 3.7cm   ; width : 385px ; line-height: 1.2";
      }
      break;

    case "bnp": // بي إن بي باريبا //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-bnp.jpg";
      MyDate.style.cssText =
        "top : 3.6cm ; left : 14.10cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.6cm ; left : 11.0cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.80cm ; left : 2.9cm  ; width : 500px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.45cm ; left : 14.0cm  ; width : 115px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.35cm ; left : 0.8cm ; width : 545px ; line-height: 1.2; text-indent: 155px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.30cm ; left : 5.0cm   ; width : 385px ; line-height: 1.3";
      }
      break;

    case "hous": // بنك الاسكان - الجزائر //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-hous.jpg";
      MyDate.style.cssText =
        "top : 4.0cm ; left : 12.7cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 4.0cm ; left : 9.1cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.5cm ; left : 2.7cm  ; width : 480px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.35cm ; left : 11.7cm  ; width : 140px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.9cm ; left : 0.6cm ; width : 455px ; line-height: 1.4; text-indent: 142px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.9cm ; left : 4.4cm   ; width : 310px ; line-height: 1.4";
      }
      break;

    case "brka3": // بنك البركة - الجزائر //
      //CheckDiv.style.cssText = "width : 17.0cm ; height : 7.8cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-brka3.jpg";
      MyDate.style.cssText =
        "top : 3.6cm ; left : 13.5cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.6cm ; left : 10.2cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.8cm ; left : 2.9cm  ; width : 480px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.55cm ; left : 13.1cm  ; width : 140px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.25cm ; left : 0.9cm ; width : 540px ; line-height: 1.5; text-indent: 155px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.25cm ; left : 4.8cm   ; width : 390px ; line-height: 1.5";
      }
      break;

    case "slm2": // بنك السلام //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-slm2.jpg";
      MyDate.style.cssText =
        "top : 4.1cm ; left : 14.1cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 4.1cm ; left : 10.9cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.45cm ; left : 2.3cm  ; width : 520px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.50cm ; left : 13.1cm  ; width : 140px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.9cm ; left : 0.7cm ; width : 485px ; line-height: 1.5; text-indent: 105px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.9cm ; left : 3.6cm   ; width : 375px ; line-height: 1.5";
      }
      break;

    case "gulf3": // بنك الخليج الجزائر //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-gulf3.jpg";
      MyDate.style.cssText =
        "top : 3.65cm ; left : 14.15cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.65cm ; left : 11.0cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.0cm ; left : 2.3cm  ; width : 520px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.4cm ; left : 13.3cm  ; width : 140px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.3cm ; left : 0.7cm ; width : 485px ; line-height: 1.5; text-indent: 110px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.3cm ; left : 3.4cm   ; width : 390px ; line-height: 1.5";
      }
      break;

    case "cndp": // الصندوق الوطني للتوفير والاحتياط //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-cndp.jpg";
      MyDate.style.cssText =
        "top : 3.7cm ; left : 13.9cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.7cm ; left : 10.9cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.95cm ; left : 2.3cm  ; width : 520px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.6cm ; left : 13.0cm  ; width : 140px; font-size: 16px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.3cm ; left : 0.6cm ; width : 570px ; line-height: 1.5; text-indent: 140px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.3cm ; left : 4.2cm   ; width : 435px ; line-height: 1.5";
      }
      break;

    case "trst": // بنك الثقة //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-trst.jpg";
      MyDate.style.cssText =
        "top : 3.4cm ; left : 14.0cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 3.4cm ; left : 10.5cm   ; width : 100px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.8cm ; left : 2.1cm  ; width : 540px; font-size: 14px";
      Amount.style.cssText =
        "top : 0.3cm ; left : 14.0cm  ; width : 110px; font-size: 15px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.25cm ; left : 0.6cm ; width : 500px ; line-height: 1.5; text-indent: 115px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.25cm ; left : 3.5cm   ; width : 390px ; line-height: 1.5";
      }
      break;

    case "ntx": // بنك ناتيكسيس //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/alg-ntx.jpg";
      MyDate.style.cssText =
        "top : 4.2cm ; left : 13.7cm ; width : 88px; font-size: 16px";
      Place.style.cssText =
        "top : 4.2cm ; left : 10.0cm   ; width : 100px; font-size: 16px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.2cm ; left : 2.1cm  ; width : 540px; font-size: 16px";
      Amount.style.cssText =
        "top : 0.7cm ; left : 13.5cm  ; width : 135px; font-size: 15px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.25cm ; left : 0.6cm ; width : 525px ; line-height: 1.7; text-indent: 120px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.25cm ; left : 3.7cm   ; width : 400px ; line-height: 1.7";
      }
      break;

    // ----------------- Tunisia Checks ----------------- //

    case "biat": // بنك تونس العربي الدولي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/tn-biat.jpg";
      MyDate.style.cssText =
        "top : 5.4cm ; left : 7.0cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 5.4cm ; left : 4.15cm   ; width : 110px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.9cm ; left : 2.4cm  ; width : 530px; font-size: 16px";
      Amount.style.cssText = "top : 0.5cm ; left : 13.3cm  ; width : 140px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.1cm ; left : 0.5cm ; width : 460px ; line-height: 1.6; text-indent: 228px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.1cm ; left : 6.5cm   ; width : 390px ; line-height: 1.6 ; text-indent: 155px; text-align : right";
      }
      break;

    case "Attj": // التجاري بنك //
      //CheckDiv.style.cssText = "width : 17.3cm ; height : 8.0cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/tn-Attj.jpg";
      MyDate.style.cssText =
        "top : 3.6cm ; left : 14.0cm ; width : 88px; font-size: 14px";
      Place.style.cssText =
        "top : 3.6cm ; left : 11.10cm   ; width : 110px; font-size: 14px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 3.0cm ; left : 1.7cm  ; width : 540px; font-size: 15px";
      Amount.style.cssText =
        "top : 0.2cm ; left : 12.2cm  ; width : 160px; font-size: 17px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.7cm ; left : 0.5cm ; width : 440px ; line-height: 1.4; text-indent: 210px ; text-align : left; font-size: 14px";
      } else {
        Tafk.style.cssText =
          "top : 1.6cm ; left : 6.0cm   ; width : 390px ; line-height: 1.6 ; text-indent: 160px; text-align : right; font-size: 14px";
      }
      break;

    // ----------------- Djibouti Checks ----------------- //

    case "cac2": // بنك التسليف التعاوني والزراعي //
      //CheckDiv.style.cssText = "width : 17.5cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/dj-cac2.jpg";
      MyDate.style.cssText =
        "top : 4.5cm ; left : 12.8cm ; width : 88px; font-size: 15px";
      Place.style.cssText =
        "top : 4.5cm ; left : 8.35cm   ; width : 110px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 1.95cm ; left : 4.1cm  ; width : 370px; font-size: 15px";
      Amount.style.cssText =
        "top : 1.05cm ; left : 12.4cm  ; width : 135px; font-size: 15px";
      Tafk.style.cssText =
        "top : 2.85cm ; left : 2.0cm   ; width : 510px ; line-height: 1.5;font-size : 15px";
      CheckFor.style.cssText =
        "top : 3.85cm ; left : 0.7cm   ; width : 600px; font-size: 15px ";
      break;

    // ----------------- France Checks ----------------- //

    case "bpop": // البنك الشعبي //
      //CheckDiv.style.cssText = "width : 17.4cm ; height : 7.9cm";
      //CheckImg.src = "https://print.cheque-at.com/img/checks/fr-bpop.jpg";
      MyDate.style.cssText =
        "top : 3.55cm ; left : 13.8cm ; width : 88px; font-size: 16px";
      Place.style.cssText =
        "top : 3.55cm ; left : 9.35cm   ; width : 110px; font-size: 15px ; display : block; text-align: center ";

      Payee.style.cssText =
        "top : 2.75cm ; left : 0.6cm  ; width : 400px; font-size: 15px";
      Amount.style.cssText = "top : 2.68cm ; left : 13.1cm  ; width : 150px";
      CheckFor.style.cssText = "display : none ";
      if (localStorage.getItem("currency_align") == "left") {
        Tafk.style.cssText =
          "top : 1.1cm ; left : 0.5cm ; width : 430px ; line-height: 1.6; text-indent: 107px ; text-align : left";
      } else {
        Tafk.style.cssText =
          "top : 1.1cm ; left : 3.3cm   ; width : 320px ; line-height: 1.6";
      }
      break;

    default:
      alert(
        " Sorry ... The module under construction \n عذرا .. نموذج الشيك المطلوب قيد التجهيز "
      );
  }

  newWin.print();
  newWin.close();
};
