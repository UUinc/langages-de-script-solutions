//Global Variables
var section = "js";
const minRecord = 10;
var showToggle = false;
var recordNumber = minRecord;

var Data;

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
    var downloadUrl = "";
    if(recordUrl.includes("/index.html"))
        downloadUrl = recordUrl.replace("/index.html", "");
    else
        downloadUrl = recordUrl.replace("/index.php", "");

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
function LoadData(numberToShow, filterType) {
    //Fetch data.json
    fetch("src/data.json")
        .then((obj) => obj.json())
        .then((data) => {
            Data = data;
            ShowData(numberToShow, filterType);
        });
}
//number To Show less or equal 0 show all
function ShowData(numberToShow, filterType) {
    //Empty Table
    const table = document.getElementById("table-data");
    table.innerHTML = "";

    let count = 0;
    for (let record in Data) {
        //stop laoding record
        count++;
        if (count > numberToShow && numberToShow > 0) {
            count--;
            break;
        }
        if (Data[record].info.section !== section) {
            count--;
            continue;
        }
        if (Data[record].info.value !== filterType && filterType !== "none") {
            count--;
            continue;
        }
        //Add record
        addRecord(
            Data[record].info.type,
            Data[record].name,
            Data[record].url,
            Data[record].description,
            Data[record].developer.name,
            Data[record].developer.url,
            Data[record].date
        );
    }
    document.getElementById("counter").innerText = `${count}/${DataCount(
        filterType
    )}`;
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
    ShowData(recordNumber, option);
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
    ShowData(recordNumber, option);
    showToggle = !showToggle;
}

function SetLanguage(_section) {
    section = _section;
    filterSelect();
}

function DataCount(filterType) {
    let count = 0;
    for (let record in Data) {
        count++;

        if (filterType === undefined || filterType === "none") continue;
        if (Data[record].info.value !== filterType && filterType !== "none") {
            count--;
        }
    }
    return count;
}

//Set current year
document.getElementById("footer-credit-year").innerText =
    new Date().getFullYear();

//Initialize App
LoadData(minRecord, "none");
