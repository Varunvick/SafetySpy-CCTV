window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YWQT5PBQBS');

  AOS.init({ duration: 600, once: true });

  
    const navToggle = document.getElementById('navToggle');
    const navbar = document.getElementById('navbar');
    navToggle.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });

  
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if (navbar.classList.contains('open')) navbar.classList.remove('open');
      });
    });

    AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});