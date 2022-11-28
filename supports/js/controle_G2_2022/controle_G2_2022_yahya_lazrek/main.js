var etudiant = [];

function AjoutEtudiant() {
    const nom = document.getElementById("cart-input-nom");
    const age = document.getElementById("cart-input-age");

    if (nom.value.trim() === "" || age.value === "") {
        alert(
            "Essayer de remplir les deux champs\nEx:\nNom Prenom: AMEKSA Mohammed\nAge: 26"
        );
        return;
    }

    //show table
    document.getElementById("data").style.visibility = "visible";

    etudiant.unshift([nom.value, age.value]);

    var table = document.getElementById("data");
    var tableRow = document.createElement("tr");
    //insert nom et prenom
    var tableRowData = document.createElement("td");
    tableRowData.innerText = nom.value;
    tableRow.appendChild(tableRowData);
    //insert age
    tableRowData = document.createElement("td");
    tableRowData.innerText = age.value;
    tableRow.appendChild(tableRowData);

    table.appendChild(tableRow);

    nom.value = "";
    age.value = "";
}

document.getElementById("cart-button").addEventListener("click", AjoutEtudiant);
