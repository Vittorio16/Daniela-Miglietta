let body = document.body;

//FUNZIONE RELATIVA AL TYPE
const type = (() => {
   new Typed("#typed", {
      strings: ["Dimagrimento rapido", "Dimagrimento localizzato", "Dimagrimento duraturo"],
      typeSpeed: 120,
      delaySpeed: 300,
      backSpeed: 70,
      backDelay: 1300,
      loop: true,
   });
})();

//FUNZIONE RELATIVA AL TEMA
const theme = (() => {
   //dichiarazione variabili
   let bottoni, change;
   bottoni = [dark, light];
   light = document.querySelector("#light"); //icona light
   dark = document.querySelector("#dark"); //icona dark
   //comparsa e scomparsa icona cambio tema
   const icon = (() => {
      let change = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
      if (change.matches == true) {
         dark.classList.add("active");
         light.classList.remove("active");
      } else {
         dark.classList.remove("active");
         light.classList.add("active");
      }
   })();
   //clicco delle icone per il cambio tema
   const clickIcon = (() => {
      //clicco bottone dark
      dark.onclick = () => {
         document.body.setAttribute("data-theme", "light");
         dark.classList.remove("active");
         light.classList.add("active");
      };
      //clicco bottone light
      light.onclick = () => {
         document.body.setAttribute("data-theme", "dark");
         light.classList.remove("active");
         dark.classList.add("active");
      };
   })();
})();

//FUNZIONE RELATIVA AL MENU
const menu = (() => {
   //dichiarazione variabili
   let header, menu, header_mob, button, main;
   header = document.querySelector(".header");
   menu = header.querySelectorAll("ul li a");
   header_mob = document.querySelector(".header-mob");
   button = header_mob.querySelector(".button i");
   main = document.querySelector("main");

   //clicco icona hamburger
   button.onclick = () => {
      body.classList.toggle("active");
      header.classList.toggle("active");
      header_mob.classList.add("active");
      button.classList.toggle("bx-x");
   };

   //clicco dei li che fa scomparire il menu
   menu.forEach((li) => {
      li.onclick = () => {
         body.classList.remove("active");
         header.classList.remove("active");
         button.classList.remove("bx-x");
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

   //clicco punto morto
   main.onclick = () => {
      if (header.classList.contains("active")) {
         body.classList.remove("active");
         header.classList.remove("active");
         button.classList.remove("bx-x");
      }
   };
})();

//FUNZIONE RELATIVA AL VIDEO
const video = (() => {
   //dichiarazione variabili
   let container, video, play, close;
   container = document.querySelector(".video-container");
   video = container.querySelector("video");
   play = document.querySelector(".play");
   close = document.querySelector("#remove");
   //clicco delle icone
   const clickIcon = (() => {
      //clicco pulsante play
      play.onclick = () => {
         body.classList.add("noScroll");
         container.classList.add("active");
         video.play();
      };

      //clicco pulsante close
      close.onclick = () => {
         body.classList.remove("noScroll");
         container.classList.remove("active");
         video.pause();
      };
   })();
})();

//FUNZIONE RELATIVA AL MODALE
const modale = (() => {
   //attuo la funzione asincrona per richiamare il json
   (async () => {
      //dichiaro le variabili che mi permettono di accedere al json
      const response = await fetch("/js/modale.json");
      const text = await response.json();
      //dichiaro le variabili
      let servizi, buttonServizi, modale, modaleButton, modaleTitle, modaleContenuto;
      servizi = document.querySelector("#servizi");
      buttonServizi = servizi.querySelectorAll(".ser .bottone");
      modale = document.querySelector(".modal-hero");
      modaleButton = modale.querySelector(".exit");
      modaleTitle = modale.querySelector(".title");
      modaleContenuto = modale.querySelector(".contenuto");

      //funzione relativa alla comparsa e il contenuto
      const comparsa = (() => {
         buttonServizi[0].onclick = () => {
            modale.classList.add("active");
            body.classList.add("active");
            modaleTitle.innerText = text.primo.title;
            modaleContenuto.innerText = text.primo.content;
         };
         buttonServizi[1].onclick = () => {
            modale.classList.add("active");
            body.classList.add("active");
            modaleTitle.innerText = text.secondo.title;
            modaleContenuto.innerText = text.secondo.content;
         };
         buttonServizi[2].onclick = () => {
            modale.classList.add("active");
            body.classList.add("active");
            modaleTitle.innerText = text.terzo.title;
            modaleContenuto.innerText = text.terzo.content;
         };
         buttonServizi[3].onclick = () => {
            modale.classList.add("active");
            body.classList.add("active");
            modaleTitle.innerText = text.quarto.title;
            modaleContenuto.innerText = text.quarto.content;
         };
      })();

      //funzione relativa alla  scomparsa del modale
      const scomparsa = (() => {
         //far scomparire il modale
         modaleButton.onclick = () => {
            modale.classList.remove("active");
            body.classList.remove("active");
         };
         modale.onclick = () => {
            if (modale.classList.contains("active")) {
               modale.classList.remove("active");
               body.classList.remove("active");
            }
         };
      })();
   })();
})();

//FUNZIONE RELATIVA AL FORM
const form = (() => {
   let name, tel, number, data, form, errore, place;
   //dichiarazioni variabili
   form = document.querySelector("form");
   error = document.querySelector(".errore");
   place = document.querySelector(".place");
   input = form.querySelectorAll("input");
   //input particolari
   name = form.querySelector("#name");
   tel = form.querySelector("#tel");
   number = form.querySelector("#persone");
   data = form.querySelector("#data");

   //funzione relativa alla validazione
   const validate = () => {
      //switch controllo
      switch (true) {
         //Controllo tutti i campi
         case name.value == "" || tel.value == "" || number.value == "" || data.value == "":
            input.forEach((single) => {
               single.classList.add("active");
            });
            error.classList.add("active");
            error.innerText = "Compila tutti i campi";
            return false;
            break;
         //controllo la validità del numero di telefono
         case !tel.value.match(/^((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7}([\,\;]((00|\+)\d{2}[\. ]??)??3\d{2}[\. ]??\d{6,7})*$/):
            tel.classList.add("active");
            error.classList.add("active");
            error.innerText = "Numero di telefono non valido";
            return false;
            break;
      }
   };

   //funzione relativa alla  scomparsa dei bordi
   const errori = () => {
      input.forEach((single) => {
         single.onfocus = () => {
            single.classList.remove("active");
            error.classList.remove("active");
            place.classList.add("togli");
         };
      });
   };

   //funzione relativa al placeholder dell'input data
   const dateValidator = (() => {
      data.onfocus = () => {
         place.classList.add("togli");
      };
      data.onblur = () => {
         if (data.value == "") {
            place.classList.remove("togli");
         } else {
            data.classList.add("color");
         }
      };
   })();

   //sumbit al form
   form.onsubmit = () => {
      errori();
      return validate();
   };
})();

//FUNZIONE RELATIVA ALLE ANIMAZIONI
const animation = (() => {
   ScrollReveal().reveal(".animazione", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      interval: 450,
      duration: 2000,
   });
   ScrollReveal().reveal(".animazione-bottom", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      distance: "120px",
      interval: 450,
      duration: 800,
   });
   ScrollReveal().reveal(".animazione-zoom", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      interval: 250,
      scale: 0.1,
      delay: 300,
   });
   ScrollReveal().reveal(".animazione-zoomreverse", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      interval: 650,
      scale: 1.4,
      delay: 550,
   });
   ScrollReveal().reveal(".animazione-libro", {
      easing: "cubic-bezier(.93,.03,0,1)",
      interval: 350,
      scale: 0.05,
      delay: 550,
   });

   ScrollReveal().reveal(".animazione-resume", {
      easing: "cubic-bezier(.215,.61,.355,1)",
      distance: "120px",
      interval: 500,
      duration: 550,
   });
})();

// FUNZIONE BLOCCO TASTI
const blocco = (() => {
   //return false tasto destro
   const falso = () => {
      return false;
   };
   //blocco
   const block = (blocco_tasti) => {
      if (event.keyCode == 123) {
         falso();
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == "I".charCodeAt(0)) {
         falso();
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == "C".charCodeAt(0)) {
         falso();
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == "J".charCodeAt(0)) {
         falso();
      }
      if (blocco_tasti.ctrlKey && blocco_tasti.keyCode == "U".charCodeAt(0)) {
         falso();
      }
   };
   document.oncontextmenu = falso;
   document.onkeydown = block;
})();
