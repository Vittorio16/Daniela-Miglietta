let body = document.body;
//menu mobile
function menu() {
   let header = document.querySelector(".header"); //header
   let header_mob = document.querySelector(".header-mob"); //header mobile
   let button = header_mob.querySelector(".button i"); //bottone
   let menu = document.querySelectorAll(".menu ul li a"); //menu
   let main = document.querySelector("main");
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
   //clicco punto morto
   main.onclick = () => {
      header.classList.remove("active");
      button.classList.remove("bx-x");
      body.classList.remove("active");
   };
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
function type() {
   new Typed("#typed", {
      strings: ["Testo1", "Test2", "Testo3, Testo4"],
      typeSpeed: 120,
      delaySpeed: 300,
      backSpeed: 70,
      backDelay: 1300,
      loop: true,
   });
}
function theme() {
   //bottoni
   let light = document.querySelector("#light");
   let dark = document.querySelector("#dark");
   let bottoni = [dark, light];
   //cambio tema in base al tema del dispositivo
   let change = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
   //condizione per far comparire il bottone giusto
   if (change.matches == true) {
      dark.classList.add("active");
      light.classList.remove("active");
   } else {
      dark.classList.remove("active");
      light.classList.add("active");
   }
   //clicco bottone dark
   bottoni[0].onclick = () => {
      document.body.setAttribute("data-theme", "light");
      dark.classList.remove("active");
      light.classList.add("active");
   };
   //clicco bottone light
   bottoni[1].onclick = () => {
      document.body.setAttribute("data-theme", "dark");
      light.classList.remove("active");
      dark.classList.add("active");
   };
}
function modale() {
   //elementi servizi
   let servizi = document.querySelector("#servizi");
   let buttonServizi = servizi.querySelectorAll(".ser .bottone");
   //elemeneti modali
   let modale = document.querySelector(".modal-hero");
   let modaleButton = modale.querySelector(".exit");
   //far comparire il modale
   buttonServizi.forEach((bottone) => {
      bottone.onclick = () => {
         modale.classList.add("active");
         body.classList.add("noScroll");
      };
   });
   //far scomparire il modale
   modaleButton.onclick = () => {
      modale.classList.remove("active");
      body.classList.remove("noScroll");
   };
   //far scomparire il modale al clicco su una parte nulla
   modale.onclick = () => {
      modale.classList.remove("active");
      body.classList.remove("noScroll");
   };
}
//richiamo le funzioni
menu();
type();
theme();
modale();
