var add = document.querySelector('#ajouter');
var tableEm = document.querySelector('table');
var namel = document.querySelector('#nomPr');
var salaire = document.querySelector('#salaire');
var employes = [];
var info = document.querySelector('#info');
var infoBtn;
var modifier = document.querySelector('#modifier');
var index = -1;
//effacer le contenu : 
const clearContent = () => {
        document.querySelector('#salaire').value = "";
        document.querySelector('#nomPr').value = "";
}
const getRandom = () => Math.floor(Math.random()*20);
//la recherche par id : 
const searchId = (id) => {
    if(employes.length > 0) {
        for(let i = 0; i<employes.length;i++)
        {
            if(employes[i].idEm == id)
                return true;
        }
    }
    return false;
} 
//supprimer un objet du tableau : 
const deleteObject = (id) => {
    employes.forEach((employe,index) => {
         if(employe.idEm == id)
         {
            console.log(id);
            employes.splice(index,1);
         }
    })
} 
//retour de l'index de l'objet dans le tableau : 
const getIndexObject = (id) => {
    let indice = -1;
    employes.forEach((employe,index) => {
        if(employe.idEm == id)
            indice = index;
   })
   return indice;
}
//ajouter un employé
add.addEventListener('click',(e) => {
    e.preventDefault();
    let salaire = document.querySelector('#salaire').value;
    let nomEm = document.querySelector('#nomPr').value;
    let id;
    if(employes.length <= 19){
        if(!isNaN(salaire) && nomEm != "" && salaire != "") {
            //ajouter au tableau person 
            do{
                id = getRandom();
            } while(searchId(id))
            let person = {
                name: nomEm,salaire: parseFloat(salaire),idEm: id
            };
            employes.push(person);
            //ajouter au DOM : 
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            let td3 = document.createElement('td');
            let iconInfo = document.createElement('i');
            let inconSuppr = document.createElement('i');
            let iconModifier  =document.createElement('i');
            iconModifier.className = "fa m-1 bg-primary text-white p-1 rounded fa-edit";
            iconInfo.name = "info";
            iconInfo.className = "fa cursor-pointer bg-info rounded p-1 fa-info-circle text-dark";
            tr.id = id;
            iconModifier.setAttribute('name','edit');
            iconInfo.setAttribute('name','info');
            inconSuppr.className = "fa bg-danger p-1 rounded text-white fa-trash text-dark";
            inconSuppr.setAttribute('name','delete');
            td1.textContent = nomEm;
            td2.textContent = salaire;
            td3.appendChild(iconInfo);
            td3.appendChild(iconModifier);
            td3.appendChild(inconSuppr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tableEm.appendChild(tr);
            // let html = `
            //     <tr id=${id}>
            //         <td scope="row">${nomEm}</td>
            //         <td>${salaire}</td>
            //         <td></td>
            //     </tr>
            //  ` 
            // tableEm.appendChild(tr) += html;
            // tableEm.parentElement.
        }
    }
    clearContent();
})
//pour chaque tache : (delete),(edit),(info)
tableEm.addEventListener('click',(e) => {
    if(e.target.tagName == "I" && e.target.attributes.name.nodeValue == "edit"){
    {
        modifier.disabled = false;
        add.disabled = true;
        let id = e.target.parentElement.parentElement.id;
        let employeeInfo = e.target.parentElement.parentElement.innerText.split('\t');
        namel.value = employeeInfo[0];
        salaire.value = employeeInfo[1];
        index = getIndexObject(id);
    }
    } else if(e.target.tagName == "I" && e.target.attributes.name.nodeValue == "delete"){
        let id = e.target.parentElement.parentElement.getAttribute('id');
        deleteObject(id);
        e.target.parentElement.parentElement.remove();
        console.log(employes);
    } else if(e.target.tagName == "I" && e.target.attributes.name.nodeValue == "info") {
        let employeeInfo = e.target.parentElement.parentElement.innerText.split('\t');
        let html = 
        `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employeeInfo[0]}</h5>
                    <p class="card-text">Avec un salaire de : ${employeeInfo[1]}</p>
                    <button class="btn btn-danger" id="infoBtn">D'accord</button>
                </div>
            </div>
        `
        info.innerHTML = html;
        infoBtn = document.querySelector('#infoBtn');
        infoBtn.addEventListener('click',(e) => {
            info.innerHTML = "";
        })
    }
})
//modifier un employé : 
modifier.addEventListener('click',(event) => {
    event.preventDefault();
     if(index != -1)
     {
        let infoNom = namel.value;
        let l = salaire.value;
        employes[index].name = infoNom;
        employes[index].salaire = parseFloat(l);
        tableEm.innerHTML = "";
        tableEm.innerHTML = `
             <thead>
                  <tr>
                    <th scope="col">Nom et Prénom</th>
                    <th scope="col">Salaire</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>`
        employes.forEach((element) => {
            let html = `
                    <tr id=${element.idEm}>
                        <td scope="row">${element.name}</td>
                        <td>${element.salaire}</td>
                        <td><i name='info' class="fa bg-info rounded p-1 fa-info-circle text-dark"></i><i name='edit' class="fa bg-primary m-1 text-white p-1 rounded fa-edit "></i><i name='delete' class="fa  bg-danger p-1 rounded text-white fa-trash text-dark"></i></td>
                    </tr>
                `;
            tableEm.innerHTML += html;
        });
        console.log(employes);
        modifier.disabled = true;
        add.disabled = false;
        clearContent();
     }
})
