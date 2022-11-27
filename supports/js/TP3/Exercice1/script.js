var input_red = document.getElementById("app-input-red");
var input_green = document.getElementById("app-input-green");
var input_blue = document.getElementById("app-input-blue");
var input_padding = document.getElementById("app-input-padding");
var input_height = document.getElementById("app-input-height");
var input_width = document.getElementById("app-input-width");
var input_arrondi = document.getElementById("app-input-arrondi");
var input_rotation = document.getElementById("app-input-rotation");

//text
var input_color_text = document.getElementById("app-input-color-text");
var input_padding_text = document.getElementById("app-input-padding-text");
var input_height_text = document.getElementById("app-input-height-text");
var input_width_text = document.getElementById("app-input-width-text");
var input_arrondi_text = document.getElementById("app-input-arrondi-text");
var input_rotation_text = document.getElementById("app-input-rotation-text");

//add event listener
input_red.addEventListener("change", UpdateObject);
input_green.addEventListener("change", UpdateObject);
input_blue.addEventListener("change", UpdateObject);
input_padding.addEventListener("change", UpdateObject);
input_height.addEventListener("change", UpdateObject);
input_width.addEventListener("change", UpdateObject);
input_arrondi.addEventListener("change", UpdateObject);
input_rotation.addEventListener("change", UpdateObject);

var _object = document.getElementById("app-result-object");

function UpdateObject() {
    //Couleur de font
    input_color_text.innerText =
        "rgb(" +
        input_red.value +
        "," +
        input_green.value +
        "," +
        input_blue.value +
        ")";
    _object.style.backgroundColor = input_color_text.innerText;
    //Padding
    input_padding_text.innerText = input_padding.value + "px";
    _object.style.padding = input_padding_text.innerText;
    //Height
    input_height_text.innerText = input_height.value + "px";
    _object.style.height = input_height_text.innerText;
    //Width
    input_width_text.innerText = input_width.value + "px";
    _object.style.width = input_width_text.innerText;
    //Arrondi
    input_arrondi_text.innerText = input_arrondi.value + "px";
    _object.style.borderRadius = input_arrondi_text.innerText;
    //Rotation
    input_rotation_text.innerText = "rotate(" + input_rotation.value + "deg)";
    _object.style.transform = input_rotation_text.innerText;
}
UpdateObject();
