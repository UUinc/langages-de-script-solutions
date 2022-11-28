var liste = document.querySelector('#List');
var flag = document.querySelector('.container');
var container
var tab = [];
fetch('https://restcountries.com/v3.1/all')
.then(s => s.json())
.then(data => data.forEach(pays => {
    let element = document.createElement('option');
    element.textContent = `${pays.name.common}`;
     let p = {
        nom: pays.name.common,
        capital: pays.capital,
        flag: pays.flags.svg
     };
     liste.appendChild(element);
     tab.push(p);
}))
.catch(error => console.log(error));

console.log(tab)

// let html = `<img src = ${o.flags.svg}>`
function searchCap(nom){
    let string;
    tab.forEach(element => {
         if(nom == element.nom)
            string = element.capital;
    });
    return string;
}
function returnFlag(nom){
    let image;
    tab.forEach(element => {
         if(nom == element.nom)
          image = element.flag;
    });
    return image;
}

liste.addEventListener('change',(e)=>{
    if(flag.lastElementChild.className == "hadi")
        flag.lastElementChild.remove();
     let img = document.createElement('img');
     img.setAttribute('class','hadi');
     img.src = `${returnFlag(e.target.value)}`;
     document.getElementById('capital').value = searchCap(e.target.value);
     flag.append(img);
})