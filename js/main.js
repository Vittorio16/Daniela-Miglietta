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
//funzione per lo scroll al clicco di quel bottone
function funzione_scroll() {
   let button = document.querySelector(".scroll");
   button.onclick = () => {
      console.log("scroll");
   };
}
//richiamo funzioni
funzione_menu();
funzione_scroll();
