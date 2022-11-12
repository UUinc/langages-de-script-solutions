var Matieres = ['JS', 'Unix', 'PHP', 'SGBD', 'BI', 'ML', 'AI', 'LaTex'];
var list = document.querySelector('#list');
var ajouter = document.querySelector('#add');
var listMatiere = document.querySelector('#MatiereList');
var remplacer = document.querySelector('#remplacer');
var check = document.querySelector('#verifier');
//retirer le dernier element : 
const affichage = () => {
  list.innerHTML = "";
  listMatiere.innerHTML = "";
  Matieres.forEach((name) => {
    let item = `<option value=${name}>${name}</option>`
    listMatiere.innerHTML += item;
    let html = `<li>${name}</li>`;
    list.innerHTML += html;
  })
}
affichage();

Matieres.push("Python");

Matieres.forEach((name,index) => {
      if(name.toLowerCase() == "sgbd")
        Matieres[index] = name.replace(name,"Sql");
})
Matieres.forEach((name,index) => {
    if(name.toLowerCase() == "ai")
      console.log(index,name)
})

//le nombre de valeur : 
console.log(Matieres[2]);

ajouter.addEventListener('click',(event) => {
   event.preventDefault();
   if(document.getElementById('index').value != "" && document.getElementById('nom').value != "")
   {
      Matieres.splice(parseInt(document.getElementById('index').value)-1,0,document.getElementById('nom').value);
   } else if(document.getElementById('index').value == "" || isNaN(document.getElementById('index').value))
        Matieres.push(document.getElementById('nom').value);
    list.innerHTML = "";
      affichage();
});

remplacer.addEventListener('click',(e) => {
  Matieres.forEach((name,index) => {
    if(name == listMatiere.value)
      Matieres[index] = name.replace(name,document.getElementById('nomMatiere').value);
  })
  affichage();
})

check.addEventListener('click',(e) => {
   Matieres.forEach(matiere => {
     if(matiere.toLocaleLowerCase() == (document.getElementById('name').value).toLocaleLowerCase()) 
        alert('le nom existe ');
   })
})