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

    {"name": "19",
    "img": "assets/pict-inspiration/19.jpg",
    "alt": "Mistery nature"}
]

let k;
let wrapper = document.querySelector(".gallery");

document.addEventListener("DOMContentLoaded", () => {
    for(let k=0; k<19; k++){
        let card = `<div class = "gallery__card">
        <img src="${cardsData[k].img}" alt="${cardsData[k].alt}">
        </div>`;

        wrapper.innerHTML += card;
    }
})

/*------MODAL CARDS--------*/
