// EMAILJS INIT
(function(){
  emailjs.init("XbMRmroBfw89lY3Uj");
})();

// FORM SUBMIT
document.getElementById("contact-form")
.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_5prkx2m", "template_bbtgnjg", this)
  .then(function(){
    alert("✅ Request Sent Successfully!");

    document.getElementById("contact-form").reset();
  }, function(error){
    alert("❌ Failed. Try Again.");
  });
});