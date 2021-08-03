//menu mobile
function menu() {
   let body = document.body;
   let header = document.querySelector(".header"); //header
   let header_mob = document.querySelector(".header-mob"); //header mobile
   let button = header_mob.querySelector(".button i"); //bottone
   let menu = document.querySelectorAll(".menu ul li a");
   //clicco del bottone
   button.onclick = () => {
      header.classList.toggle("active");
      button.classList.toggle("bx-x");
      body.classList.toggle("active");
      header_mob.classList.add("active");
   };
   //clicco dei li
   menu.forEach((li) => {
      li.onclick = () => {
         header.classList.remove("active");
         button.classList.remove("bx-x");
         body.classList.remove("active");
      };
   });
   //allo scroll aggiungere e rimuovere background header mobile
   window.onscroll = () => {
      const y = window.pageYOffset;
      if (y >= 220) {
         header_mob.classList.add("active");
      } else {
         header_mob.classList.remove("active");
      }
   };
}
menu();
