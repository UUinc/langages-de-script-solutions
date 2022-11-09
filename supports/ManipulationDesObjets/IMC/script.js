// ce type des sélécteurs en JS nous renovoie un tableaux 
var inputs = document.querySelectorAll("input");
var reset = document.querySelector(".reset");
var valide = document.querySelector(".valide");
var submit = document.querySelector(".submit");


var fullName = document.querySelector("#name")
    // équivalence à document.getElementById('name');
var mass = document.querySelector("#mass")
    // équivalence à document.getElementById('masse');
var height = document.querySelector("#taill")
    // équivalence à document.getElementById('taill');


// ici on déclare un tableau pour stocker les objets 
var listObject = [];

reset.addEventListener("click", function(c) {
    // ici on supprime l'action par défaut
    c.preventDefault();
    // ensuite on parcoure les inputs récupéré dans la premier partie
    inputs.forEach((e) => {
            // et à chaque fois on supprime le contenu 
            e.value = "";
        })
        // aussi on supprime l'ensemble des objets créé
    listObject = [];
})

// ici on assigne un événement "click" au l'élément valid 
valide.addEventListener("click", (c) => {
    // ici on supprime l'action par défaut
    c.preventDefault();
    /* et à chaque fois l'utilisateur click sur ce boutton 
       nous allons créer un objet dont on stock les informations 
       saisissé par l'utilisateur
    */
    let newObjec = {
            fullName: fullName.value,
            mass: mass.value,
            height: height.value
        }
        // une fois l'objet est là on lui ajoute au tableau listObject
    listObject.push(newObjec);
    // puis on vide les champs input 
    inputs.forEach((e) => {
        e.value = "";
    })
})

/* ce boutton sert à calculer IMC de chaque objet de notre liste finale 
et de nous renvoi l'élément qu'a le plus grands IMC
*/
submit.addEventListener("click", (c) => {
    c.preventDefault();
    var resultCalcul = [];
    listObject.map((e) => {
        var calcule = (e.mass / (e.height * e.height))
        resultCalcul.push(calcule);
    })
    console.log(listObject);
    let winner = resultCalcul.indexOf(Math.max(...resultCalcul));
    alert("the winner is " + listObject[winner].fullName)
    listObject = [];
    resultCalcul = [];

})