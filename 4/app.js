const reviewList = [
    {
        id: 1,
        name: "Choonsik1",
        type: "indoor",
        img: "img/OIP (1).jpg",
        text: "춘식이는 세계 제일"
    },
    {
        id: 2,
        name: "Choonsik2",
        type: "outdoor",
        img: "img/OIP (2).jpg",
        text: "춘식이는 세계 제일!!!!!!!" 
    },
    {
        id: 3,
        name: "Choonsik3",
        type: "indoor",
        img: "img/OIP (3).jpg",
        text: "춘식이는 세계 제일!!!!!!!!!!"
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

function showReview(index) {
    const item = reviewList[index];
    mainImg.src = item.img;
    foodName.textContent = item.name;
    type.textContent = item.type;
    info.textContent = item.text;
}

preBtn.addEventListener("click", function() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = reviewList.length -1
    }
    showReview(currentIndex);
})

nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex>= reviewList.length) {
        currentIndex = 0
    }
    showReview(currentIndex);   
})