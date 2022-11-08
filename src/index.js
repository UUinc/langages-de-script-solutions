function addRecord(
    recordIcon,
    recordName,
    recordUrl,
    description,
    developerName,
    developerUrl,
    date
) {
    //set record icon
    switch (recordIcon) {
        case "course":
            recordIcon = "course.png";
            break;
        case "exam":
            recordIcon = "exam.png";
            break;
        default:
            recordIcon = "assignment.png";
            break;
    }

    //get record download url
    const downloadUrl = recordUrl.replace("/index.html", "");

    var objTo = document.getElementById("table-data");
    var record = document.createElement("tr");
    record.innerHTML =
        "<td class='align-middle'> <div class='d-flex align-items-center'> <div> <img class='table-body-item-icon' src='src/assets/icons/" +
        recordIcon +
        "' alt='assignment icon' /> </div> <div class='ms-3 lh-1'> <h5 class='mb-1'> <a class='text-inherit' href='" +
        recordUrl +
        "' target='_blank' >" +
        recordName +
        "</a> </h5> </div> </div> </td> <td class='align-middle'>" +
        description +
        "</td> <td class='align-middle'> <a class='btn btn-success' href='" +
        developerUrl +
        "' target='_blank' > " +
        developerName +
        " </a> </td> <td class='align-middle'>" +
        date +
        "</td> <td class='align-middle'> <a class='btn btn-success' href='https://minhaskamal.github.io/DownGit/#/home?url=https:%2F%2Fgithub.com%2FUUinc%2FJS-Solutions%2Ftree%2Fmain%2F" +
        downloadUrl +
        "' target='_blank' > download </a> </td>";
    objTo.appendChild(record);
}

//Static setting data
addRecord(
    "",
    "Exercice 1",
    "supports/TP1/Exercice1/index.html",
    "TP1 Exercice 1 ...",
    "Yahya Lazrek",
    "https://github.com/UUinc",
    "01/10/2022"
);
addRecord(
    "",
    "Exercice 2",
    "supports/TP1/Exercice2/index.html",
    "TP1 Exercice 2 ...",
    "Yahya Lazrek",
    "https://github.com/UUinc",
    "01/10/2022"
);
addRecord(
    "",
    "Exercice 3",
    "supports/TP1/Exercice3/index.html",
    "TP1 Exercice 3 ...",
    "Yahya Lazrek",
    "https://github.com/UUinc",
    "01/10/2022"
);
addRecord(
    "",
    "Exercice 4",
    "supports/TP1/Exercice4/index.html",
    "TP1 Exercice 4 ...",
    "Yahya Lazrek",
    "https://github.com/UUinc",
    "02/10/2022"
);
