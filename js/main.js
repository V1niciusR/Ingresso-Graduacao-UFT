window.onscroll = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('navbar').classList.add('scrolled');
    } else {
        document.getElementById('navbar').classList.remove('scrolled');
    }
}

// AOS
AOS.init({
    duration: 800,
});



/* ===== FAQs ===== */
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach((acco, index) => {
  acco.onclick = () => {
    const isActive = acco.classList.contains('active');

    accordions.forEach(subAcco => {
      subAcco.classList.remove('active');
    });

    if (!isActive) {
      acco.classList.add('active');
    }
  };

  // Feche todas as FAQs ao iniciar o site
  acco.classList.remove('active');
});