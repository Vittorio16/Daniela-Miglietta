let body = document.body;
//menu mobile
const menu = () => {
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
   //swipe per aprire il menu
};
const type = () => {
   new Typed("#typed", {
      strings: ["Dimagrimento rapido", "Dimagrimento localizzato", "Dimagrimento duraturo"],
      typeSpeed: 120,
      delaySpeed: 300,
      backSpeed: 70,
      backDelay: 1300,
      loop: true,
   });
};
const theme = () => {
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
};
const video = () => {
   let play, container, video, remove;
   container = document.querySelector(".video-container");
   play = document.querySelector(".play"); //pulsante play
   remove = document.querySelector("#remove"); // pulsante remove
   video = container.querySelector("video");
   //clicco pulsante play
   play.onclick = () => {
      container.classList.add("active");
      body.classList.add("noScroll");
      video.play();
   };
   //clicco pulsante remove
   remove.onclick = () => {
      container.classList.remove("active");
      body.classList.remove("noScroll");
      video.pause();
   };
};
const modale = () => {
   //dichiarazione oggetto per modale dinamico
   let text = {
      primo: {
         title: "Calorimetria",
         content: `Il Metabolismo basale, può essere misurato anche tramite la calorimetria diretta (camera calorimetrica).
                   Il termine calorimetria significa letteralmente 𝗺𝗶𝘀𝘂𝗿𝗮 𝗱𝗲𝗹 𝗰𝗮𝗹𝗼𝗿𝗲 𝗰𝗼𝗺𝗲 𝗲𝗳𝗳𝗲𝘁𝘁𝗼 𝗱𝗶 𝗿𝗲𝗮𝘇𝗶𝗼𝗻𝗶 𝗯𝗶𝗼𝗰𝗵𝗶𝗺𝗶𝗰𝗵𝗲 𝗰𝗵𝗲 𝗮𝘃𝘃𝗲𝗻𝗴𝗼𝗻𝗼 𝗮𝗹𝗹’𝗶𝗻𝘁𝗲𝗿𝗻𝗼 𝗱𝗲𝗹𝗹’𝗼𝗿𝗴𝗮𝗻𝗶𝘀𝗺𝗼.
           🔹“𝐌𝐞𝐭𝐚𝐛𝐨𝐥𝐢𝐬𝐦𝐨 𝐛𝐚𝐬𝐚𝐥𝐞”si riferisce quindi alle calorie che il soggetto necessita ed adopera quotidianamente per soddisfare tutte le funzioni fisiologiche 
           indispensabili.
           🔺Il corrispettivo valore non è generico per tutti gli individui, ma presenta un’alta variabilità individuale in base a diversi parametri 
           tra cui l’età, il peso, l’altezza ed altro.
           🔸La maggior parte delle persone in sovrappeso, può perdere peso con una dieta pari al Metabolismo misurato.`,
      },
      secondo: {
         title: "Impedenziometria",
         content: `L'𝐈𝐌𝐏𝐄𝐃𝐄𝐍𝐙𝐈𝐎𝐌𝐄𝐓𝐑𝐈𝐀 è l'UNICO esame che ci permette di individuare la percentuale si grasso, muscoli, acqua, eventuali infiammazioni, 
         disidratazione ed altre preziose informazioni che durante un 𝐏𝐄𝐑𝐂𝐎𝐑𝐒𝐎 𝐍𝐔𝐓𝐑𝐈𝐙𝐈𝐎𝐍𝐀𝐋𝐄, ci permette di valutare la 𝐏𝐄𝐑𝐃𝐈𝐓𝐀 𝐝𝐢 𝐏𝐄𝐒𝐎 𝐢𝐧 𝐭𝐞𝐫𝐦𝐢𝐧𝐞 𝐝𝐢 𝐌𝐀𝐒𝐒𝐀 𝐆𝐑𝐀𝐒𝐒𝐀`,
      },
      terzo: {
         title: "Non si sa",
         content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis consequatur labore unde deserunt accusantium culpa repudiandae`,
      },
      quarto: {
         title: "Scopri i servizi",
         content: `Stai per essere indirizzato su un altra pagina,relativa a tutti i servizi,
         sei sicuro di proseguire?`,
      },
   };
   //dichiarazione variabili
   let servizi, buttonServizi, modale, modaleButton, modaleTitle, modaleContenuto;
   servizi = document.querySelector("#servizi");
   buttonServizi = servizi.querySelectorAll(".ser .bottone");
   modale = document.querySelector(".modal-hero");
   modaleButton = modale.querySelector(".exit");
   modaleTitle = modale.querySelector(".title");
   modaleContenuto = modale.querySelector(".contenuto");
   //funzione relativa alla comparsa e il contenuto
   const comparsa = () => {
      //clicco del primo
      buttonServizi[0].onclick = () => {
         modale.classList.add("active");
         body.classList.add("noScroll");
         modaleTitle.innerText = text.primo.title;
         modaleContenuto.innerText = text.primo.content;
      };
      //clicco del secondo
      buttonServizi[1].onclick = () => {
         modale.classList.add("active");
         body.classList.add("noScroll");
         modaleTitle.innerText = text.secondo.title;
         modaleContenuto.innerText = text.secondo.content;
      };
      //clicco del terzo
      buttonServizi[2].onclick = () => {
         modale.classList.add("active");
         body.classList.add("noScroll");
         modaleTitle.innerText = text.terzo.title;
         modaleContenuto.innerText = text.terzo.content;
      };
      //clicco del quarto
      buttonServizi[3].onclick = () => {
         modale.classList.add("active");
         body.classList.add("noScroll");
         modaleTitle.innerText = text.quarto.title;
         modaleContenuto.innerText = text.quarto.content;
      };
   };
   //funzione relativa alla  scomparsa del modale
   const scomparsa = () => {
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
   };
   comparsa();
   scomparsa();
};
const form = () => {
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

   //funzione relativa al placeholder dell'input data
   const dateValidator = () => {
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
   };

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

   //sumbit al form
   form.onsubmit = () => {
      errori();
      return validate();
   };
   //richiamo date Validator
   dateValidator();
};
const funzione_animazioneScroll = () => {
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
};
//richiamo le funzioni
menu();
type();
theme();
video();
modale();
funzione_animazioneScroll();
form();
