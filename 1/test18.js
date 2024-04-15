function randRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

var changeDetail = document.querySelector("body")

changeDetail.onclick = function(){
    document.querySelector('body').style.backgroundColor = randRGB()
}