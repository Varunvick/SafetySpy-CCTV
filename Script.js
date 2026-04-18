window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YWQT5PBQBS');

  AOS.init({ duration: 600, once: true });

  
    const navToggle = document.getElementById('navToggle');
    const navbar = document.getElementById('navbar');
    navToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

  
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) navbar.classList.remove('active');
      });
    });

    AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});