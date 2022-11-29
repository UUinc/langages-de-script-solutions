var Images = [
    "Images/img1.jpg",
    "Images/img2.jpg",
    "Images/img3.png",
    "Images/img4.png",
    "Images/img5.png",
];

var compteur = 0;

//Get element
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
var image = document.getElementById("image");

function ResetCursor() {
    arrowLeft.style.cursor = "pointer";
    arrowRight.style.cursor = "pointer";
}
function SwipeLeft() {
    compteur--;
    ResetCursor();
    if (compteur < 0) {
        compteur++;
        arrowLeft.style.cursor = "not-allowed";
        return;
    }
    image.setAttribute("src", Images[compteur]);
}
function SwipeRight() {
    compteur++;
    ResetCursor();
    if (compteur >= Images.length) {
        compteur--;
        arrowRight.style.cursor = "not-allowed";
        return;
    }
    image.setAttribute("src", Images[compteur]);
}

arrowLeft.addEventListener("click", SwipeLeft);
arrowRight.addEventListener("click", SwipeRight);
