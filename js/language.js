let buttonBel = document.querySelector(".language__bel");
let buttonEng = document.querySelector(".language__eng");
let buttonRus = document.querySelector(".language__ru");
let buttonLit = document.querySelector(".language__lt");

let inputName = document.querySelector(".contact-form__input_name");
let inputPhone= document.querySelector(".contact-form__input_phone");


buttonBel.addEventListener("click", ()=>{
    
    document.querySelector(".menu-mobile").textContent = "Меню";
    document.querySelector(".menu__button_welcome").textContent = "Вiтаю";
    document.querySelector(".menu__button_projects").textContent = "Праекты";
    document.querySelector(".menu__button_inspiration").textContent = "Натхненне";
    document.querySelector(".menu__button_contacts").textContent = "Кантакты";

    document.querySelector(".info__text").textContent = "Добры дзень! Я Аксана Астапава. Я вэб-дызайнер і Front-end распрацоўшчык з Беларусі";
    document.querySelector(".info__button").textContent = "Спасылкi";

    document.querySelector('.page__go-project_keyboard').textContent = "Віртуальная клавіятура";
    document.querySelector('.page__go-project_shelter').textContent = "Прытулак";
    document.querySelector('.page__go-project_mem').textContent = "CSS-мем-слайдэр";

    document.querySelector('.page__button_keyboard').textContent = "Віртуальная клавіятура";
    document.querySelector('.page__button_shelter').textContent = "Прытулак";
    document.querySelector('.page__button_mem').textContent = "CSS-мем-слайдэр";
    document.querySelector(".screen_keyboard > figcaption > p").textContent = "Мая віртуальная клавiятура на чыстым JavaScript";
    document.querySelector(".screen_shelter > figcaption > p").textContent = "Мой праект Прытулак для хатніх жывёл";
    document.querySelector(".screen_mem > figcaption > p").textContent = "Мой праект Мем-Слайдэр на чыстым CSS без JS";

    document.querySelector(".call-me__btn_text").textContent = "Пазванiце мне";
    document.querySelector(".text-me__btn_text").textContent = "Напiшыце мне";
    document.querySelector(".call-me__heading").textContent = "Пазванiце мне";
    document.querySelector(".text-me__heading").textContent = "Напiшыце мне";
   

})

buttonEng.addEventListener("click", ()=>{

    document.querySelector(".menu-mobile").textContent = "Menu";

    document.querySelector(".menu__button_welcome").textContent = "Welcome";
    document.querySelector(".menu__button_projects").textContent = "Projects";
    document.querySelector(".menu__button_inspiration").textContent = "Inspiration";
    document.querySelector(".menu__button_contacts").textContent = "Contacts";

    document.querySelector(".info__text").textContent = "Hello! I am Oksana Astapova. I am web designer and Front-end developer from Belarus";
    document.querySelector(".info__button").textContent = "Links";

    document.querySelector('.page__go-project_keyboard').textContent = "Virtual Keybord";
    document.querySelector('.page__go-project_shelter').textContent = "Shelter";
    document.querySelector('.page__go-project_mem').textContent = "CSS-Mem-Slider";

    document.querySelector('.page__button_keyboard').textContent = "Virtual Keybord";
    document.querySelector('.page__button_shelter').textContent = "Shelter";
    document.querySelector('.page__button_mem').textContent = "CSS-Mem-Slider";
    document.querySelector(".screen_keyboard > figcaption > p").textContent = "My virtual Keybord on pure JavaScript";
    document.querySelector(".screen_shelter > figcaption > p").textContent = "My project shelter for pets";
    document.querySelector(".screen_mem > figcaption > p").textContent = "My Mem-Slider on pure CSS without JavaScript";

    document.querySelector(".call-me__btn_text").textContent = "Call me";
    document.querySelector(".text-me__btn_text").textContent = "Text me";
    document.querySelector(".call-me__heading").textContent = "Call me";
    document.querySelector(".call-you__heading").textContent = "Text me";
    document.querySelector(".text-me__button").textContent = "Send";

})

buttonRus.addEventListener("click", ()=>{

    document.querySelector(".menu-mobile").textContent = "Меню";

    document.querySelector(".menu__button_welcome").textContent = "Привет";
    document.querySelector(".menu__button_projects").textContent = "Проекты";
    document.querySelector(".menu__button_inspiration").textContent = "Вдохновение";
    document.querySelector(".menu__button_contacts").textContent = "Контакты";

    document.querySelector(".info__text").textContent = "Привет! Меня зовут Оксана Астапова. Я веб дизайнер и Front-end разработчик из Беларуси";
    document.querySelector(".info__button").textContent = "Ссылки";

    document.querySelector('.page__go-project_keyboard').textContent = "Виртуальная клавиатура";
    document.querySelector('.page__go-project_shelter').textContent = "Приют";
    document.querySelector('.page__go-project_mem').textContent = "CSS-мем-слайдер";

    document.querySelector('.page__button_keyboard').textContent = "Виртуальная клавиатура";
    document.querySelector('.page__button_shelter').textContent = "Приют";
    document.querySelector('.page__button_mem').textContent = "CSS-мем-слайдер";
    document.querySelector(".screen_keyboard > figcaption > p").textContent = "Моя Виртуальная клавиатура на чистом JS";
    document.querySelector(".screen_shelter > figcaption > p").textContent = "Мой проект Приют для домашних животных";
    document.querySelector(".screen_mem > figcaption > p").textContent = "Мой CSS-мем-слайдер на чистом CSS без JS";

    document.querySelector(".call-me__btn_text").textContent = "Позвоните мне";
    document.querySelector(".text-me__btn_text").textContent = "Напишите мне";
    document.querySelector(".call-me__heading").textContent = "Позвоните мне";
    document.querySelector(".text-me__heading").textContent = "Напишите мне";

})

buttonLit.addEventListener("click", ()=>{
    document.querySelector(".menu-mobile").textContent = "Meniu";

    document.querySelector(".menu__button_welcome").textContent = "Sveiki";
    document.querySelector(".menu__button_projects").textContent = "Projektus";
    document.querySelector(".menu__button_inspiration").textContent = "Įkvėpimas";
    document.querySelector(".menu__button_contacts").textContent = "Kontaktai";

    document.querySelector(".info__text").textContent = "Sveiki! Esu Oksana Astapova. Esu interneto dizaineris ir front-end kūrėjas iš Baltarusijos";
    document.querySelector(".info__button").textContent = "Nuorodos";

    document.querySelector('.page__go-project_keyboard').textContent = "Virtualioji klaviatūra";
    document.querySelector('.page__go-project_shelter').textContent = "Prieglauda";
    document.querySelector('.page__go-project_mem').textContent = "CSS-memų-slankiklis";

    document.querySelector('.page__button_keyboard').textContent = "Virtualioji klaviatūra";
    document.querySelector('.page__button_shelter').textContent = "Prieglauda";
    document.querySelector('.page__button_mem').textContent = "CSS-memų-slankiklis";
    document.querySelector(".screen_keyboard > figcaption > p").textContent = "Mano virtualioji klaviatūra naudojant gryną „JavaScript“.";
    document.querySelector(".screen_shelter > figcaption > p").textContent = "Mano projekto Prieglauda augintiniams";
    document.querySelector(".screen_mem > figcaption > p").textContent = "Mano CSS-memų-slankiklis gryname CSS be „JavaScript“";

    document.querySelector(".call-me__btn_text").textContent = "Paskambink man";
    document.querySelector(".text-me__btn_text").textContent = "Parašyk man";
    document.querySelector(".call-me__heading").textContent = "Paskambink man";
    document.querySelector(".text-me__heading").textContent = "Parašyk man";

})