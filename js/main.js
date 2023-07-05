/* ===== Transição das abas do site ===== */
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


/*
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
*/

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