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
  