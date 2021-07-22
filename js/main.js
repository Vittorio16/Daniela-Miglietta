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
//richiamo funzioni
funzione_menu();
