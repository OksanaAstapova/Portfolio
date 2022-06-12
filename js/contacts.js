let callMe_btn = document.querySelector(".call-me__btn");
let callMe_content = document.querySelector(".call-me__content");
let callYou_btn = document.querySelector(".call-you__btn");
let callYou_content = document.querySelector(".contact-form");
let callMe_cancel = document.querySelector(".call-me__cancel");
let callYou_cancel = document.querySelector(".call-you__cancel");

callMe_btn.addEventListener("click",()=>{

    callMe_content.style.visibility = "visible";
    callMe_content.style.opacity = "1";

})


callYou_btn.addEventListener("click",()=>{

    callYou_cancel.style.display = "flex";
    callYou_content.style.visibility = "visible";
    callYou_content.style.opacity = "1";

})

callMe_cancel.addEventListener("click", ()=>{
    callMe_content.style.visibility = "hidden";
    callMe_content.style.opacity = "0";  
    
})

callYou_cancel.addEventListener("click", ()=>{
    callYou_content.style.visibility = "hidden";
    callYou_content.style.opacity = "0";  
    
})
