//Global Variables
var section = "js";

//Functions
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
        "</td> <td class='align-middle'> <a class='btn btn-outline-success' href='" +
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

//number To Show less or equal 0 show all
function LoadData(numberToShow, filterType) {
    //Empty Table
    const table = document.getElementById("table-data");
    table.innerHTML = "";
    //Fetch data.json
    fetch("src/data.json")
        .then((obj) => obj.json())
        .then((data) => {
            for (let record in data) {
                //stop laoding record
                if (record > numberToShow - 1 && numberToShow > 0) return;
                if (data[record].info.section !== section) continue;
                if (
                    data[record].info.value !== filterType &&
                    filterType !== "none"
                )
                    continue;
                //Add record
                addRecord(
                    data[record].info.type,
                    data[record].name,
                    data[record].url,
                    data[record].description,
                    data[record].developer.name,
                    data[record].developer.url,
                    data[record].date
                );
            }
        });
}

function filterSelect() {
    const option = document.getElementById("card-filter-select").value;

    //Show button visibility
    if (option === "none") {
        document.getElementById("card-filter-show").style.visibility = "hidden";
    } else {
        document.getElementById("card-filter-show").style.visibility =
            "visible";
    }

    //Filter records
    LoadData(10, option);

    //Set show button url
    const optionValue = option.trim();
    const url =
        "supports/" + section + "/" + optionValue + "/" + optionValue + ".pdf";
    document.getElementById("card-filter-show").setAttribute("href", url);
}

function Show_MoreLess() {
    const showMoreLessBTN = document.getElementById("card-footer-showMoreLess");
    const option = document.getElementById("card-filter-select").value;
    if (showMoreLessBTN.innerText === "show more") {
        LoadData(0, option);
        showMoreLessBTN.innerText = "show less";
    } else {
        LoadData(10, option);
        showMoreLessBTN.innerText = "show more";
    }
}

function SetLanguage(_section) {
    section = _section;
    filterSelect();
}

//Initialize App
LoadData(10, "none");
