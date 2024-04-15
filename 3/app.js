const reviewList = [
    {
        id: 1,
        name: "Choonsik1",
        type: "indoor",
        img: "OIP.jpg",
        text: "춘식이는 세계 최강이다"
    },
    {
        id: 2,
        name: "Choonsik2",
        type: "outdoor",
        img: "OIP (1).jpg",
        text: "춘식이는 세계 최강이다!!!!!"
    },
    {
        id: 3,
        name: "Choonsik3",
        type: "indoor",
        img: "OIP (2).jpg",
        text: "춘식이는 세계 최강이다아ㅏㅇ아ㅏ아아아아아아아앙!!!!!"
    }
]

const mainImg = document.querySelector("#main-img");
const foodName = document.querySelector("#food-name");
const type = document.querySelector("#type");
const info = document.querySelector("#info");

const preBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

let currentIndex = 1;

window.addEventListener("DOMContentLoaded", function() {
    let item = reviewList[currentIndex];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
})