const getRandomNote = () => Math.random()*20;

var data = document.querySelector('#row');
var superieur = document.querySelector('#sup10');
var max = document.querySelector('#max');
var trier = document.querySelector('#trie');
var para = document.querySelector('.content');
var moyenne = document.querySelector('#moyenne');
var rechercher = document.querySelector('#recherche');
var search = document.querySelector('#search');
var content = document.querySelector('.content');
var form = document.querySelector('#form');
var pa = [];
var etudiants = [];

//traiter le fichier sous format json car il est en format binaire bson : 
//elle retourne un promise : 
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(users => users.forEach(user => {
    //pour chaque user je cree un etudiant : 
    let etudiant = {
         nom: user.name,
         note: parseFloat(getRandomNote().toFixed(2))
    }
    let html = `
      
        <tr>
            <td>${etudiant.nom}</td>
            <td>${etudiant.note}</td>
        </tr>
    `;
    data.innerHTML += html;
    etudiants.push(etudiant);
}))
.catch(error => console.log(error));

//etudiant > 10 : 

superieur.addEventListener('click',(event) => {
    let count = 0;
    let flag = false;
    event.preventDefault();
    for(let i = 0;i < etudiants.length;i++) 
    {
        if(etudiants[i].note > 10) 
            count++;
    } 
    for(let i = 0; i < pa.length;i++)
    {
        if(pa[i] == `Les etudiant de plus de 10 : ${count}`)
        {
            flag = true;
            break;
        }   
    }
    if(!flag)   
        {
              pa.push(`Les etudiant de plus de 10 : ${count}`);
              para.innerHTML += `<li>Les etudiant de plus de 10 : ${count}</li>`;
        }
})

//moyenne  :
moyenne.addEventListener('click',(event) => {
     let somme = 0.0;
     let flag = false;
     for(let i = 0; i < etudiants.length;i++)
          somme+=etudiants[i].note;
    for(let i = 0; i < pa.length;i++)
    {
        if(pa[i] == `La moyenne est  : ${(somme/etudiants.length).toFixed(2)}`)
        {
            flag = true;
            break;
        }   
    }
    if(!flag)   
        {
              pa.push(`La moyenne est  : ${(somme/etudiants.length).toFixed(2)}`);
              para.innerHTML += `<li>La moyenne est  : ${(somme/etudiants.length).toFixed(2)}</li>`;
        }
})

//max : 
max.addEventListener('click',(event) => { 
    let max = etudiants[0].note;
    let name = etudiants[0].nom;
    let flag = false;
    etudiants.forEach(etudiant => {
         if(max < etudiant.note)
         {
            max = etudiant.note;
            name = etudiant.nom;
         }
    })
    for(let i = 0; i < pa.length;i++)
    {
        if(pa[i] == `la note maximal est : ${max} son nom est : ${name}`)
        {
            flag = true;
            break;
        }   
    }
    if(!flag)   
    {
            pa.push(`la note maximal est : ${max} son nom est : ${name}`);
            para.innerHTML += `<li>la note maximal est : ${max} son nom est : ${name}</li>`;
    }
})

//trie : 

trier.addEventListener('click',(event) => { 
    etudiants.sort((a,b) => {
         return a.nom-b.nom;
    })
    data.innerHTML = "";
    data.innerHTML = `<tr>
            <th>Prènom et Nom :</th>
            <th>Note : </th>
    </tr>`
    etudiants.forEach(etudiant => {
        let html = `
        <tr>
            <td>${etudiant.nom}</td>
            <td>${etudiant.note}</td>
        </tr>
    `;
    data.innerHTML += html;
    })
    console.log(pa);
})

//rechercher : 
rechercher.addEventListener('click',(event) => {
    document.querySelector('.search').style.display = "block";
})

search.addEventListener('click',(event) => {
    let tab  = [];
    let count = 0;
    for(let i = 0;i < etudiants.length;i++)
    {
         if(isNaN(document.getElementById('student').value))
         {
            if(etudiants[i].nom.toLowerCase().search((document.getElementById('student').value).toLowerCase()) != -1)
            {
                tab[count++] = etudiants[i];
                console.log("inserting : " + etudiants[i]);
            }
         } else 
         {
            if(parseInt(etudiants[i].note) == parseInt(document.getElementById('student').value))
            {
                tab[count++] = etudiants[i];
                console.log("inserting : " + etudiants[i]);
            }
         }
         
    }
    if(tab.length > 0)
    {
        data.innerHTML = "";
        data.innerHTML = 
        `<tr>
            <th>Prènom et Nom :</th>
            <th>Note : </th>
         </tr>`;
        for(let i = 0;i<tab.length;i++)
        {
            let html = `
            <tr>
                <td>${tab[i].nom}</td>
                <td>${tab[i].note}</td>
            </tr>
         `;
          data.innerHTML += html;
        }
    }
});

form.addEventListener('click',(event) => {
     event.preventDefault();
     if(event.target.tagName == "BUTTON")
     {
        if(document.getElementById('nom').value != "" && document.getElementById('prenom').value != ""&& document.getElementById('note').value != "" && !isNaN(document.getElementById('note').value))
        {
            etudiants.push({
                nom: document.getElementById('nom').value + " " + document.getElementById('prenom').value,
                note: document.getElementById('note').value
            })
                let html = `
                <tr>
                    <td>${document.getElementById('nom').value + " " + document.getElementById('prenom').value}</td>
                    <td>${document.getElementById('note').value}</td>
                </tr>
            `;
            data.innerHTML += html;
            form.reset();
        } else if(isNaN(document.getElementById('note').value)) {
            alert('Veuillez resaisir la note correctement : ');
        }
       
     }
})