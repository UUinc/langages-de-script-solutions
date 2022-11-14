var _NameField = document.querySelector(".DisplayName-field");
var _NumberField = document.querySelector(".DisplayNumber-field");
var _AddToList = document.querySelector("#AddToList");
var _length;
var Names = [];
function GenerateArray() {
    let Array = [];
    for (let i = 0; i <= _length; i++) {
        Array.push(Math.floor(Math.random() * _length));
    }
    return Array;
}
function Pow(Array) {
    for (let i = 0; i < Array.length; i++) {
        Array[i] = Math.pow(Array[i], 2);
    }
    return Array;
}
function Capitalize(Name) {
    for (let i = 0; i < Name.length; i++) {
        Name[i] =
            Name[i].charAt(0).toUpperCase() + Name[i].slice(1).toLowerCase();
    }
    /*
        - Name[i].charAt(0) : retourne le premier caractère de chaine 
        - toUpperCase(): Convertir la première lettre en majuscule
        - slice(1) :  pour éliminer le premier caractère de la chaîne
    */
    return Name;
}

// Ajouter un nouveau nom
function AddNewName() {
    let newName = _AddToList.value.trim();
    if (newName != "" && Names.length < _length) {
        Names.push(newName);
        Display_Names(Names);
        Display_Capitalize(Names);
        _AddToList.value = "";
    } else if (Names.length == _length) {
        document.querySelector(".AddName-field").style.visibility = "hidden";
    } else {
        alert("Veuillez saisir le champ");
    }
}
//Détecter l'appui sur la touche Entrée
_AddToList.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        AddNewName();
    }
});

//----------------------------------------------------------------------//
//Afficher le tableau de nombres
function Display_Array(Array) {
    let items = "<label>Tableau</label><br>";
    for (let i = 0; i < Array.length; i++) {
        items += "<li>" + Array[i] + "</li>";
        console.log(Array[i]);
    }
    document.querySelector(".Number").innerHTML =
        "<ol start=" + 0 + ">" + items + "</ol>";
}
function Display_Square(Array) {
    Array = Pow(Array);
    let items = "<label>Carré du tableau</label><br>";
    for (let i = 0; i < Array.length; i++) {
        items += "<li>" + Array[i] + "</li>";
    }
    document.querySelector(".Square").innerHTML =
        "<ol start=" + 0 + ">" + items + "</ol>";
}

//Afficher le tableau de Prenoms
function Display_Names(Array) {
    let items = "<label>Liste des Prénoms</label><br>";
    for (let i = 0; i < Array.length; i++) {
        items += "<li>" + Array[i] + "</li>";
    }
    document.querySelector(".Name").innerHTML =
        "<ol start=" + 0 + ">" + items + "</ol>";
}
function Display_Capitalize(Array) {
    Array = Capitalize(Array);
    let items = "<label>Première lettre en majuscul </label><br>";
    for (let i = 0; i < Array.length; i++) {
        items += "<li>" + Array[i] + "</li>";
    }
    document.querySelector(".Capitalize").innerHTML =
        "<ol start=" + 0 + ">" + items + "</ol>";
}

//----------------------------------------------------------------------//
function BtnNumber() {
    let Array = [];
    _length = parseFloat(document.getElementById("length").value) - 1;

    if (Number.isInteger(_length)) {
        document.getElementById("Length-field").style.display = "none";
        document.querySelector(".Button").style.display = "block";

        if (_NameField.style.display == "flex") {
            _NameField.style.display = "none";
        }
        _NumberField.style.display = "flex";

        Array = GenerateArray();
        Display_Array(Array);
        Display_Square(Array);
    } else {
        alert("Veuillez vérifier les champs");
    }
}
function BtnName() {
    _length = parseFloat(document.getElementById("length").value);

    if (Number.isInteger(_length)) {
        document.getElementById("Length-field").style.display = "none";
        document.querySelector(".Button").style.display = "block";

        if (_NumberField.style.display == "flex") {
            _NumberField.style.display = "none";
        }
        _NameField.style.display = "flex";
        document.querySelector(".AddName-field").style.visibility = "visible";
    } else {
        alert("Veuillez vérifier les champs");
    }
}
