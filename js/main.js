let welcomeBtn = document.querySelector(".menu__button_welcome");
let projectsBtn = document.querySelector(".menu__button_projects");
let inspirationBtn = document.querySelector(".menu__button_inspiration");
let contactsBtn = document.querySelector(".menu__button_contacts");
let start_pageBtn = document.querySelector(".info__button");
let inspiration = document.querySelector(".inspiration-page");

window.onload = function () {
    window.setTimeout(function () {
     document.querySelector('.preloader').style.visibility = 'hidden';
     document.querySelector('.preloader').style.opacity = '0';
    }, 2010);
  }

welcomeBtn.addEventListener("click", ()=>{
    welcomeBtn.classList.add("menu__button_active");
    
    document.querySelectorAll('.menu__button:not(.menu__button_welcome)').forEach(btn =>{
        btn.classList.remove("menu__button_active");
    })

    document.querySelector(".start-page").classList.add('visible');

    document.querySelectorAll('section:not(.start-page)').forEach(section =>{
        section.classList.remove("visible");
    })

  })

projectsBtn.addEventListener("click", ()=>{
    projectsBtn.classList.add("menu__button_active");
    
    document.querySelectorAll('.menu__button:not(.menu__button_projects)').forEach(btn =>{
        btn.classList.remove("menu__button_active");
    })

    document.querySelector(".projects-page").classList.add('visible');
    document.querySelectorAll('section:not(.projects-page)').forEach(btn =>{
        btn.classList.remove("visible");
    })

})

inspirationBtn.addEventListener("click", ()=>{
    inspirationBtn.classList.add("menu__button_active");
    
    document.querySelectorAll('.menu__button:not(.menu__button_inspiration)').forEach(btn =>{
        btn.classList.remove("menu__button_active");
    })

    inspiration.classList.add('visible');
    document.querySelectorAll('section:not(.inspiration-page)').forEach(btn =>{
        btn.classList.remove("visible");
    })

})

contactsBtn.addEventListener("click", ()=>{
    contactsBtn.classList.add("menu__button_active");

    document.querySelectorAll('.menu__button:not(.menu__button_contacts)').forEach(btn =>{
        btn.classList.remove("menu__button_active");
    })

    document.querySelector(".contacts-page").classList.add('visible');
    document.querySelectorAll('section:not(.contacts-page)').forEach(btn =>{
        btn.classList.remove("visible");
    })

    callMe_btn.classList.add("call-me__btn_up");
    textMe_btn.classList.add("text-me__btn_down");

    removeScale();
    removeClip();

   

})

document.querySelectorAll(".menu__button:not(.menu__button_contacts)").forEach(button =>{
    button.addEventListener("click", ()=>{
        removeAnimation_contactBtn();
        removeScale();
        removeClip();
    })
})

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".start-page").classList.add('visible');
})

start_pageBtn.addEventListener("click", ()=>{
    document.querySelector(".links").classList.toggle("links_appear");
})

/*-------Mobile Menu--------------*/

let menuBtn = document.querySelector(".menu-mobile");
let menu = document.querySelector(".menu");

menuBtn.addEventListener("click", ()=>{

    menuBtn.classList.toggle("menu-mobile_color");
    menu.classList.toggle("menu-appear");
})

document.querySelectorAll("li").forEach(k => {

    k.addEventListener("click", ()=>{

    menu.classList.remove("menu-appear");
    menuBtn.classList.remove("menu-mobile_color");
    })
})

/*-------PROJECTS-------------*/

let keyboard = document.querySelector('.page__button_keyboard');
let shelter = document.querySelector('.page__button_shelter');
let mem = document.querySelector('.page__button_mem');
let mkBaltic = document.querySelector('.page__button_mk-baltic');
 
keyboard.addEventListener('click', () => {
   keyboard.classList.add('page__button_active'); 
   document.querySelectorAll('.page__button:not(.page__button_keyboard)').forEach(btn =>{
    btn.classList.remove("page__button_active");
})

    document.querySelector('.screen_keyboard').classList.add('screen_active');
    document.querySelectorAll('.screen:not(.screen_keyboard)').forEach(btn =>{
    btn.classList.remove("screen_active");
}) 

   removeScale();

})

shelter.addEventListener('click', () => {
   shelter.classList.add('page__button_active'); 

   document.querySelectorAll('.page__button:not(.page__button_shelter)').forEach(btn =>{
    btn.classList.remove("page__button_active");
})
   
    document.querySelector('.screen_shelter').classList.add('screen_active'); 
   document.querySelectorAll('.screen:not(.screen_shelter)').forEach(btn =>{
    btn.classList.remove("screen_active");
}) 
   
   removeScale();

})

mem.addEventListener('click', () => {
    mem.classList.add('page__button_active'); 

     document.querySelectorAll('.page__button:not(.page__button_mem)').forEach(btn =>{
    btn.classList.remove("page__button_active");
})
 
    document.querySelector('.screen_mem').classList.add('screen_active'); 
    document.querySelectorAll('.screen:not(.screen_mem)').forEach(btn =>{
        btn.classList.remove("screen_active");
    })  

   removeScale();

})

mkBaltic.addEventListener('click', () => {
    mem.classList.remove('page__button_active'); 

    document.querySelectorAll('.page__button:not(.page__button_mk-baltic)').forEach(btn =>{
    btn.classList.remove("page__button_active");
})
    document.querySelector('.screen_mk-baltic').classList.add('screen_active'); 
    document.querySelectorAll('.screen:not(.screen_mk-baltic)').forEach(btn =>{
        btn.classList.remove("screen_active");
    }) 

   removeScale();

})


document.querySelector(".menu__button_projects").addEventListener("click", ()=>{

   document.querySelector(".go-project_right_keyboard").classList.add("transition-right");
   document.querySelector(".go-project_right_mem").classList.add("transition-right");
   document.querySelector(".go-project_left_shelter").classList.add("transition-left");
   document.querySelector(".go-project_left_mk-baltic").classList.add("transition-left");

})

document.querySelectorAll(".menu__button_click").forEach(k => {

    k.addEventListener("click", ()=>{

      document.querySelector(".go-project_right_keyboard").classList.remove("transition-right");
      document.querySelector(".go-project_right_mem").classList.remove("transition-right");
      document.querySelector(".go-project_left_shelter").classList.remove("transition-left");
      document.querySelector(".go-project_left_mk-baltic").classList.remove("transition-left");


    })
})

const screen = document.querySelectorAll(".screen__screenshot");

screen.forEach(s => {
    s.addEventListener("mouseover", ()=>{
        document.querySelectorAll(".button-go").forEach(go =>{
            go.classList.add("button-go_scale");
        })
    })
})

function removeScale(){
    document.querySelectorAll(".button-go").forEach(go =>{
        go.classList.remove("button-go_scale");
    })
}


/*-------INSPIRATION-------------*/

const cardsData = [
    {"name": "1",
    "img": "assets/pict-inspiration/1.jpg",
    "alt": "Fairyland"},

    {"name": "2",
    "img": "assets/pict-inspiration/2.jpg",
    "alt": "Mistery nature"},

    {"name": "3",
    "img": "assets/pict-inspiration/3.jpg",
    "alt": "Adorable sunset with butterfly"},

    {"name": "4",
    "img": "assets/pict-inspiration/4.jpg",
    "alt": "Dew colorfull leaves"},

    {"name": "5",
    "img": "assets/pict-inspiration/5.jpg",
    "alt": "Wonderful autumn nature"},

    {"name": "6",
    "img": "assets/pict-inspiration/6.jpg",
    "alt": "A girl with the sunset"},

    {"name": "7",
    "img": "assets/pict-inspiration/7.jpg",
    "alt": "Adorable yellow flower"},

    {"name": "8",
    "img": "assets/pict-inspiration/8.jpg",
    "alt": "Awsome lavender field"},

    {"name": "9",
    "img": "assets/pict-inspiration/9.jpg",
    "alt": "Mistery double rainbow"},

    {"name": "10",
    "img": "assets/pict-inspiration/10.jpg",
    "alt": "Stone towers by the sea"},

    {"name": "11",
    "img": "assets/pict-inspiration/11.jpg",
    "alt": "Wonderful flower field"},

    {"name": "12",
    "img": "assets/pict-inspiration/12.jpg",
    "alt": "Pink clouds"},

    {"name": "13",
    "img": "assets/pict-inspiration/13.jpg",
    "alt": "Adorable sunset over the pier"},

    {"name": "14",
    "img": "assets/pict-inspiration/14.jpg",
    "alt": "Wonderful colorfull rose"},

    {"name": "15",
    "img": "assets/pict-inspiration/15.jpg",
    "alt": "Awsome water droplets butterfly"},

    {"name": "16",
    "img": "assets/pict-inspiration/16.jpg",
    "alt": "Mistery pink nature"},

    {"name": "17",
    "img": "assets/pict-inspiration/17.jpg",
    "alt": "Wonderful soap bubble"},

    {"name": "18",
    "img": "assets/pict-inspiration/18.jpg",
    "alt": "Mistery nature"},

]

let k;
let wrapper = document.querySelector(".gallery");



document.addEventListener("DOMContentLoaded", () => {
    for(let k=0; k<18; k++){
        let card = `<div class = "gallery__card" onclick="openModal(${k})">
        <img src="${cardsData[k].img}" alt="${cardsData[k].alt}">
        </div>`;

        wrapper.innerHTML += card;
    }
})


/*------MODAL CARDS--------*/

let modal = document.querySelector(".modal-card");
let blackBack = document.querySelector(".black-back");
let cancel = document.querySelector(".modal-card__close-btn");
let body = document.querySelector(".body");
let modalWrapper = document.querySelector("modal-card__wrapper");

function openModal(k){

    blackBack.style.visibility = "visible";
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
    modal.classList.add('animation-modal');
    inspiration.style.overflow = "hidden";


    let modalWrapper = `<button class="modal-card__close-btn" onclick="closeModal()">
                <img src="assets/icons/close-btn.png" alt="close button">
                        </button>
                        <div class="modal-card__wrapper">
                <img src="${cardsData[k].img}" alt="${cardsData[k].alt}"> 
                        </div>`;
                       

        modal.innerHTML += modalWrapper;
       
}

function closeModal(){
    modal.innerHTML = "";
    blackBack.style.visibility = "hidden";
    modal.style.visibility = "hidden";
    modal.style.opacity - "0";
    inspiration.style.overflow = "scroll";

    
}

blackBack.addEventListener("click", closeModal);


/*-------CONTACTS-------------*/
const callMe = document.querySelector(".call-me");
const textMe = document.querySelector(".text-me");

let callMe_btn = document.querySelector(".call-me__btn");
let callMe_content = document.querySelector(".call-me__content");
let textMe_content = document.querySelector(".text-me__content");
let textMe_btn = document.querySelector(".text-me__btn");
let callMe_cancel = document.querySelector(".call-me__cancel");
let textMe_cancel = document.querySelector(".text-me__cancel");

callMe_btn.addEventListener("click",()=>{

    callMe_content.classList.add("visible");

})


textMe_btn.addEventListener("click",()=>{

    textMe_content.classList.add("visible");

})

function removeAnimation_contactBtn(){
    callMe_btn.classList.remove("call-me__btn_up");
    textMe_btn.classList.remove("text-me__btn_down");
}

document.querySelectorAll(['.call-me__cancel, .text-me__cancel']).forEach(button =>{
    button.addEventListener("click", ()=>{
    
        textMe_content.classList.remove("visible");
        callMe_content.classList.remove("visible");

    })
});
   

callMe.addEventListener("mouseover", ()=>{
    document.querySelector(".call-me__heading").classList.add("contact-text_clip");
    document.querySelector(".text-me__heading").classList.remove("contact-text_clip");

})

textMe.addEventListener("mouseover", ()=>{
    document.querySelector(".text-me__heading").classList.add("contact-text_clip");
    document.querySelector(".call-me__heading").classList.remove("contact-text_clip");

})

document.querySelectorAll(['.call-me', '.text-me']).forEach(k =>{
    k.addEventListener("mouseout", removeClip);
})

function removeClip(){
    document.querySelector(".text-me__heading").classList.remove("contact-text_clip");
    document.querySelector(".call-me__heading").classList.remove("contact-text_clip");

}

