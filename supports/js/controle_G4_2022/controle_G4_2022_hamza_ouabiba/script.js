var image = document.querySelector("#image");
var ImageBtn = document.getElementById("changer");
var inputHauter = document.getElementById("hauteur");
var inputLarg = document.getElementById("largeur");
var inputArrondi = document.getElementById("arrondi");

function changeLargeur() {
    let labelLar = document.getElementById("valLar");
    let largeur = inputLarg.value;
    image.style.width = largeur + "px";
    labelLar.innerText = largeur + "px";
}
function changeHauteur() {
    let labelHau = document.getElementById("valHau");
    let hauteur = inputHauter.value;
    image.style.height = hauteur + "px";
    labelHau.innerText = hauteur + "px";
}
function changeArrondi() {
    let labelArr = document.getElementById("valAr");
    let arrondi = inputArrondi.value;
    image.style.borderRadius = arrondi + "%";
    labelArr.innerText = arrondi + "%";
}

function changerImage() {
    let source = prompt(
        "Donner le nom de l'image\nExamples: etud1, etud2 ..."
    ).toString();
    if (source != "")
        image.setAttribute("src", "3iirImages/" + source + ".png");
}
//boutton changer image :
ImageBtn.addEventListener("click", changerImage);
//changer la largeur :
inputLarg.addEventListener("change", changeLargeur);
//changer la hauteur :
inputHauter.addEventListener("change", changeHauteur);
//changer le border radius :
inputArrondi.addEventListener("change", changeArrondi);
