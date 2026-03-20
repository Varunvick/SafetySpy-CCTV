// EMAILJS INIT
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

// FORM SUBMIT
document.getElementById("contact-form")
.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
  .then(function(){
    alert("✅ Request Sent Successfully!");
  }, function(error){
    alert("❌ Failed. Try Again.");
  });
});