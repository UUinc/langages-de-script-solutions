//Global Variables
var section = "js";
const minRecord = 10;
var showToggle = false;
var recordNumber = minRecord;

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
            let count = 0;
            for (let record in data) {
                //stop laoding record
                count++;
                if (count > numberToShow && numberToShow > 0) return;
                if (data[record].info.section !== section) {
                    count--;
                    continue;
                }
                if (
                    data[record].info.value !== filterType &&
                    filterType !== "none"
                ) {
                    count--;
                    continue;
                }
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
    const filterBTN = document.getElementById("card-filter-btn");
    var url = "";

    //Download or show support
    if (option === "none") {
        filterBTN.innerText = "download all solutions";

        url =
            "https://minhaskamal.github.io/DownGit/#/home?url=https://github.com/UUinc/langages-de-script-solutions/tree/main/supports";
    } else {
        filterBTN.innerText = "show";

        //Set show button url
        const optionValue = option.trim();
        url =
            "supports/" +
            section +
            "/" +
            optionValue +
            "/" +
            optionValue +
            ".pdf";
    }
    filterBTN.setAttribute("href", url);

    //Filter records
    LoadData(recordNumber, option);
}

function Show_MoreLess() {
    const showMoreLessBTN = document.getElementById("card-footer-showMoreLess");
    const option = document.getElementById("card-filter-select").value;
    if (!showToggle) {
        recordNumber = 0;
        showMoreLessBTN.innerText = "show less";
    } else {
        recordNumber = minRecord;
        showMoreLessBTN.innerText = "show more";
    }
    LoadData(recordNumber, option);
    showToggle = !showToggle;
}

function SetLanguage(_section) {
    section = _section;
    filterSelect();
}

//Set current year
document.getElementById("footer-credit-year").innerText =
    new Date().getFullYear();

//Initialize App
LoadData(minRecord, "none");
