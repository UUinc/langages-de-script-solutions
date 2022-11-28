const studentsData = [
    {
        nom: "CHAKIR",
        prenom: "Ali",
        age: 12,
        photo: "3iir/etud1.png",
    },
    {
        nom: "ZAHIR",
        prenom: "Ouissal",
        age: 11,
        photo: "3iir/etud2.png",
    },
    {
        nom: "AMEKSA",
        prenom: "Yahya",
        age: 10,
        photo: "3iir/etud3.png",
    },
    {
        nom: "ELAMRI",
        prenom: "Houda",
        age: 12,
        photo: "3iir/etud4.png",
    },
];

var select = document.getElementById("choix-select");
var card = document.getElementById("result-card-info");
//info
var nom = document.getElementById("result-card-info-nom");
var prenom = document.getElementById("result-card-info-prenom");
var age = document.getElementById("result-card-info-age");
var image = document.getElementById("result-card-info-image");

function Afficher() {
    var prenomSelected = select.options[select.selectedIndex].value;

    card.style.visibility = "hidden";
    for (student in studentsData) {
        if (studentsData[student].prenom === prenomSelected) {
            nom.innerText = studentsData[student].nom;
            prenom.innerText = studentsData[student].prenom;
            age.innerText = studentsData[student].age;
            image.setAttribute("src", studentsData[student].photo);

            card.style.visibility = "visible";
            break;
        }
    }
}

select.addEventListener("change", Afficher);
