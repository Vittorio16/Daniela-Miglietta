//funzione per il menu
function menu() {
   let button = document.querySelector("#menu_open");
   let nav = document.querySelector(".navbar");
   let menu = nav.querySelector("ul");
   //click del bottone
   button.onclick = () => {
      const y = window.pageYOffset;
      if (y < 50) {
         menu.classList.toggle("active");
      } else {
         menu.classList.toggle("active1");
      }
   };
   //nav colorata allo scroll
   window.onscroll = () => {
      const y = window.pageYOffset;
      if (y >= 50) {
         nav.classList.add("active-nav");
      } else {
         nav.classList.remove("active-nav");
      }
   };
}

//funzione per lo scroll al clicco di quel bottone
function funzione_scroll() {
   let button = document.querySelector(".scroll");
   button.onclick = () => {
      window.scrollTo(0, 1000);
   };
}
function funzione_animazioneScroll() {
   ScrollReveal().reveal(".animazione", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      interval: 450,
      duration: 2000,
   });
   ScrollReveal().reveal(".animazione-bottom", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      distance: "60px",
      interval: 450,
      duration: 2000,
   });
   ScrollReveal().reveal(".animazione-zoom", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      interval: 650,
      scale: 0.1,
      delay: 550,
   });
   ScrollReveal().reveal(".animazione-zoomreverse", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      interval: 650,
      scale: 1.4,
      delay: 550,
   });
   ScrollReveal().reveal(".animazione-galleria", {
      easing: "cubic-bezier(.93,.03,0,1)",
      interval: 450,
      scale: 0.05,
      delay: 350,
   });

   ScrollReveal().reveal(".animazione1", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      distance: "120px",
      interval: 550,
      duration: 2300,
   });
}
//richiamo funzioni
funzione_scroll();
menu();
funzione_animazioneScroll();
