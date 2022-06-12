let welcomeBtn = document.querySelector(".menu__button_welcome");
let projectsBtn = document.querySelector(".menu__button_projects");
let inspirationBtn = document.querySelector(".menu__button_inspiration");
let contactsBtn = document.querySelector(".menu__button_contacts");
let start_pageBtn = document.querySelector(".info__button");

welcomeBtn.addEventListener("click", ()=>{
    welcomeBtn.classList.add("menu__button_active");
    projectsBtn.classList.remove("menu__button_active");
    inspirationBtn.classList.remove("menu__button_active");
    contactsBtn.classList.remove("menu__button_active");

    document.querySelector(".start-page").style.visibility = "visible";
    document.querySelector(".start-page").style.opacity = "1";
    document.querySelector(".projects-page").style.visibility = "hidden";
    document.querySelector(".projects-page").style.opacity = "0";
    document.querySelector(".inspiration-page").style.visibility = "hidden";
    document.querySelector(".inspiration-page").style.opacity = "0";
    document.querySelector(".contacts-page").style.visibility = "hidden";
    document.querySelector(".contacts-page").style.opacity = "0";
})

projectsBtn.addEventListener("click", ()=>{
    projectsBtn.classList.add("menu__button_active");
    welcomeBtn.classList.remove("menu__button_active");
    inspirationBtn.classList.remove("menu__button_active");
    contactsBtn.classList.remove("menu__button_active");

    document.querySelector(".projects-page").style.visibility = "visible";
    document.querySelector(".projects-page").style.opacity = "1";
    document.querySelector(".start-page").style.visibility = "hidden";
    document.querySelector(".start-page").style.opacity = "0";
    document.querySelector(".inspiration-page").style.visibility = "hidden";
    document.querySelector(".inspiration-page").style.opacity = "0";
    document.querySelector(".contacts-page").style.visibility = "hidden";
    document.querySelector(".contacts-page").style.opacity = "0";


})

inspirationBtn.addEventListener("click", ()=>{
    inspirationBtn.classList.add("menu__button_active");
    welcomeBtn.classList.remove("menu__button_active");
    projectsBtn.classList.remove("menu__button_active");
    contactsBtn.classList.remove("menu__button_active");

    document.querySelector(".inspiration-page").style.visibility = "visible";
    document.querySelector(".inspiration-page").style.opacity = "1";
    document.querySelector(".projects-page").style.visibility = "hidden";
    document.querySelector(".projects-page").style.opacity = "0";
    document.querySelector(".start-page").style.visibility = "hidden";
    document.querySelector(".start-page").style.opacity = "0";
    document.querySelector(".contacts-page").style.visibility = "hidden";
    document.querySelector(".contacts-page").style.opacity = "0";

})

contactsBtn.addEventListener("click", ()=>{
    contactsBtn.classList.add("menu__button_active");
    welcomeBtn.classList.remove("menu__button_active");
    projectsBtn.classList.remove("menu__button_active");
    inspirationBtn.classList.remove("menu__button_active");

    document.querySelector(".contacts-page").style.visibility = "visible";
    document.querySelector(".contacts-page").style.opacity = "1";
    document.querySelector(".projects-page").style.visibility = "hidden";
    document.querySelector(".projects-page").style.opacity = "0";
    document.querySelector(".inspiration-page").style.visibility = "hidden";
    document.querySelector(".inspiration-page").style.opacity = "0";
    document.querySelector(".start-page").style.visibility = "hidden";
    document.querySelector(".start-page").style.opacity = "0";

})

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".start-page").style.visibility = "visible";
    document.querySelector(".start-page").style.opacity = "1";

    
   
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

