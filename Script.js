window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YWQT5PBQBS');

  
    document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("navToggle");
  const navbar = document.getElementById("navbar");

  navToggle.addEventListener("click", function () {
    navbar.classList.toggle("open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
});

function calculateStorage(){

const cameratype = document.getElementById("cameratype").value;

let cameras=parseInt(document.getElementById("camera").value);

let resolution=parseFloat(document.getElementById("resolution").value);

let compression=parseFloat(document.getElementById("compression").value);

let recording=parseFloat(document.getElementById("recording").value);

let days=parseInt(document.getElementById("days").value);

let bitrate=resolution*2;

let daily=((bitrate*3600*24)/8)/1024;

daily=daily*compression;

daily=daily*recording;

let total=daily*cameras*days;

let hdd="";

if(total<=1000)
hdd="1 TB HDD";
else if(total<=2000)
hdd="2 TB HDD";
else if(total<=4000)
hdd="4 TB HDD";
else if(total<=6000)
hdd="6 TB HDD";
else if(total<=8000)
hdd="8 TB HDD";
else if(total<=10000)
hdd="10 TB HDD";
else
hdd="12 TB or Above";

document.getElementById("daily").innerHTML=
"<b>Daily Storage:</b> "+daily.toFixed(1)+" GB / Camera";

document.getElementById("total").innerHTML=
"<b>Total Storage Required:</b> "+(total/1024).toFixed(2)+" TB";

document.getElementById("hdd").innerHTML=
"<b>Recommended HDD:</b> "+hdd;

document.getElementById("result").style.display="block";

}


function sendWhatsAppQuote(){

  const phone = "+916300195805"; 

let cameraType=document.getElementById("cameratype").value;
let cameras=document.getElementById("camera").value;
let days=document.getElementById("days").value;
let totalStorage=document.getElementById("total").innerText;

const message= `
Hello SafetySpy,
I need CCTV Installation.
Camera Type : ${cameraType}
No. of Cameras : ${cameras}
Days : ${days}
Required Storage : ${totalStorage}
Please send me the best quotation.
Thank You.`;
const url =`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

window.open(url, "_blank");

}
  