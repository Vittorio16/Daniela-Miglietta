//funzione per menu
function funzione_menu() {
   let button = document.getElementById("menu_open");
   let menu = document.querySelector(".navbar ul");
   let x = menu.querySelector("#x");
   button.onclick = () => {
      menu.classList.toggle("active");
      button.classList.toggle("uil-times");
   };
}

//funzione animazioneScroll
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
//funzione blocco tasti
function funzione_blocco() {
   //disabilito tasto destro
   function blocco_tastoDestro() {
      return false;
   }
   document.oncontextmenu = blocco_tastoDestro;
   document.onkeydown = function (blocco_tasti) {
      if (event.keyCode == 123) {
         return false;
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == "I".charCodeAt(0)) {
         return false;
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == "C".charCodeAt(0)) {
         return false;
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == "J".charCodeAt(0)) {
         return false;
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.keyCode == "U".charCodeAt(0)) {
         return false;
      }
   };
}
//richiamo tutte le funzioni
funzione_animazioneScroll();
funzione_menu();
