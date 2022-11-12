var Fruits = [ "Pomme", "Raisin", "Banane", "Kiwi" ];
var Cart = [];
var _inputAddToCart = document.getElementById("AddToCart");
var _inputAddToList = document.getElementById("AddToList");


// Afficher la liste des fruits
function DisplayList(){
    let items = " ";
    for (let i = 0; i < Fruits.length; i++) {
       items += "<li>"+Fruits[i]+"</li>";
    }
    document.querySelector(".Display").innerHTML = "<ol>" + items + "</ol>";
}  
// Afficher le panier 
function DisplayCart(){
    let items = " ";
    document.getElementById("Title-cart").textContent = "Panier";
    for (let i = 0; i < Cart.length; i++) {
       items += "<li>"+Cart[i]+"</li>";
    }
    document.querySelector(".DisplayCart").innerHTML = "<ol>" + items + "</ol>";
}  
// Chercher si le fruit est dans la liste
function Search(Fruit){  
    for (let i = 0; i < Fruits.length; i++) {
        if(Fruits[i].toLowerCase() == Fruit.toLowerCase()){
            return i;
        }
    }
    return -1;
}

// Organiser les fruits alphabétiquement
function Sort(){
    Fruits.sort();
    DisplayList();
}
// Inverser les éléments du tableau
function Reverse(){
    Fruits.reverse();
    DisplayList();
}
//Détecter l'appui sur la touche Entrée
_inputAddToCart.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        AddToCart();
    }
});
_inputAddToList.addEventListener("keypress",(event)=>{
    if(event.key === "Enter"){
        AddToList();
    }
});
// Ajouter au panier
function AddToCart(){
    let Fruit = document.getElementById("AddToCart").value.trim();
    let Index = Search(Fruit);
    if(Index!=-1 && Fruit!=""){
         
        Cart.push(Fruits[Index]);// Ajouter au tableau de panier
        Fruits.splice(Index,1); // supprimer le fruit dans le tableau (Fruits)

        DisplayCart(); 
        DisplayList();

        document.getElementById("AddToCart").value = "";
    }else if(Fruit==""){
        alert("Veuillez saisir le champ");
    }
    else{
        alert("Indisponible");
    }
}
//Ajouter au liste des fruits
function AddToList(){
    let Fruit = document.getElementById("AddToList").value.trim();
    if(Search(Fruit)==-1 && Fruit!=""){
        Fruits.push(Fruit);
        DisplayList();
        document.getElementById("AddToList").value = "";
    }else if(Fruit==""){
        alert("Veuillez saisir le champ");
    }else{
        alert("Disponible");
    }
}