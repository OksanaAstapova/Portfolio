let keyboard = document.querySelector('.page__button_keyboard');
let shelter = document.querySelector('.page__button_shelter');
let mem = document.querySelector('.page__button_mem');
let screenKeyboard = document.querySelector('.screen_keyboard');
let screenShelter = document.querySelector('.screen_shelter');
let screenMem = document.querySelector('.screen_mem');

keyboard.addEventListener('click', () => {
   keyboard.classList.add('page__button_active'); 
   shelter.classList.remove('page__button_active');
   mem.classList.remove('page__button_active');

   screenKeyboard.classList.add('screen_active');
   screenShelter.classList.remove('screen_active');
   screenMem.classList.remove('screen_active'); 
})

shelter.addEventListener('click', () => {
   shelter.classList.add('page__button_active'); 
   keyboard.classList.remove('page__button_active');
   mem.classList.remove('page__button_active');
   
   screenShelter.classList.add('screen_active'); 
   screenKeyboard.classList.remove('screen_active');
   screenMem.classList.remove('screen_active');
})

mem.addEventListener('click', () => {
    mem.classList.add('page__button_active'); 
    keyboard.classList.remove('page__button_active');
    shelter.classList.remove('page__button_active');
 
    screenMem.classList.add('screen_active'); 
    screenShelter.classList.remove('screen_active');
    screenShelter.classList.remove('screen_active');
})

