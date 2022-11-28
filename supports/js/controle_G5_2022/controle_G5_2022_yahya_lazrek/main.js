var champA = document.getElementById("card-input-a");
var champB = document.getElementById("card-input-b");

var champOperator = document.getElementById("card-input-op");

var BTN_Addition = document.getElementById("card-operators-addition");
var BTN_Soustraction = document.getElementById("card-operators-soustraction");
var BTN_Division = document.getElementById("card-operators-division");
var BTN_Multiplication = document.getElementById(
    "card-operators-multiplication"
);

var champResultat = document.getElementById("card-result-input");

function Addition() {
    //check champ
    if (champA.value === "" || champB.value === "") {
        alert("Remplire les deux cases");
        return;
    }
    //afficher le signe
    champOperator.value = "+";
    //calcul
    var a = parseFloat(champA.value);
    var b = parseFloat(champB.value);
    champResultat.value = a + b;
}
function Soustraction() {
    //check champ
    if (champA.value === "" || champB.value === "") {
        alert("Remplire les deux cases");
        return;
    }
    //afficher le signe
    champOperator.value = "-";
    //calcul
    var a = parseFloat(champA.value);
    var b = parseFloat(champB.value);
    champResultat.value = a - b;
}
function Division() {
    //check champ
    if (champA.value === "" || champB.value === "") {
        alert("Remplire les deux cases");
        return;
    }
    //afficher le signe
    champOperator.value = "/";
    //calcul
    var a = parseFloat(champA.value);
    var b = parseFloat(champB.value);
    champResultat.value = (a / b).toFixed(2);
    console.log(a / b);
}
function Multiplication() {
    //check champ
    if (champA.value === "" || champB.value === "") {
        alert("Remplire les deux cases");
        return;
    }
    //afficher le signe
    champOperator.value = "*";
    //calcul
    var a = parseFloat(champA.value);
    var b = parseFloat(champB.value);
    champResultat.value = a * b;
}

BTN_Addition.addEventListener("click", Addition);
BTN_Soustraction.addEventListener("click", Soustraction);
BTN_Division.addEventListener("click", Division);
BTN_Multiplication.addEventListener("click", Multiplication);
