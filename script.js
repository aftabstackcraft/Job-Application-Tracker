const companyName = document.getElementById("company-name");
const jobTitle = document.getElementById("job-title");
const jobUrl = document.getElementById("job-url");
const appStatus = document.getElementById("application-status");
const appDate = document.getElementById("application-date");
const appNotes = document.getElementById("application-notes");
const btnPrimary = document.getElementById("add-application-button");
const appTableBody = document.getElementById("applications-table-body");
const totalAppCount = document.getElementById
    ("total-applications-count");
const appliedCount = document.getElementById("applied-count");
const interviewCount = document.getElementById("interviews-count");
const offerCount = document.getElementById("offers-count");
const appSearch = document.getElementById("application-search");
const statusFilter = document.getElementById("status-filter");
const sortApp = document.getElementById("sort-applications");


let dataOfApp = JSON.parse(localStorage.getItem("data")) || [];
dashboardStat();
addToTable(dataOfApp)

let currentState = "add";
let editingId = null;

function addApplication() {

    if (currentState === "edit") {

        const elementToEdit = dataOfApp.find((data) => data.id === editingId);

        elementToEdit.company = companyName.value;
        elementToEdit.jobtitle = jobTitle.value;
        elementToEdit.joburl = jobUrl.value;
        elementToEdit.appstatus = appStatus.value;
        elementToEdit.appdate = appDate.value;
        elementToEdit.appnotes = appNotes.value;

        localStorage.setItem("data", JSON.stringify(dataOfApp));
        addToTable(dataOfApp);

        currentState = "add";
        editingId = null;
        btnPrimary.textContent = "Add Application";

        companyName.value = "";
        jobTitle.value = "";
        jobUrl.value = "";
        appStatus.value = "applied";
        appDate.value = "";
        appNotes.value = "";

    }
    else {

        dataOfApp.push({
            id: crypto.randomUUID(),
            company: companyName.value,
            jobtitle: jobTitle.value,
            joburl: jobUrl.value,
            appstatus: appStatus.value,
            appdate: appDate.value,
            appnotes: appNotes.value
        })

        localStorage.setItem("data", JSON.stringify(dataOfApp));

        companyName.value = "";
        jobTitle.value = "";
        jobUrl.value = "";
        appStatus.value = "applied";
        appDate.value = "";
        appNotes.value = "";
    }
}

function addToTable(data) {

    appTableBody.innerHTML = "";

    data.forEach(lastElement => {

        const { id, company, jobtitle, joburl, appstatus, appdate, appnotes } = lastElement;


        appTableBody.innerHTML +=
            `
            <tr id="${id}">
                <td data-label="Company">${company}</td>
                <td data-label="Position">${jobtitle}</td>
                <td data-label="Status">
                <span class="status-badge status-${appstatus}">${(appstatus[0]).toUpperCase() + appstatus.slice(1)}</span>
                </td>
                <td data-label="Date">${appdate}</td>
                <td data-label="Actions">
                <div class="action-buttons">
                <button class="button button-secondary edit-button" type="button">Edit</button>
                <button class="button button-danger delete-button" type="button">Delete</button>
                </div>
                </td>
            </tr>
            `;

    });

}

function deleteElement(elementToDelete) {

    const closestElement = elementToDelete.closest("tr");

    const idOfElement = closestElement.id;

    dataOfApp = dataOfApp.filter(({ id }) => id !== idOfElement);
    localStorage.setItem("data", JSON.stringify(dataOfApp));
    addToTable(dataOfApp);

}

function editElement(elementToEdit) {

    const closestElement = elementToEdit.closest("tr");

    const idOfElement = closestElement.id;

    const dataToDisplay = dataOfApp.find((data) => data.id === idOfElement);

    const { id, company, jobtitle, joburl, appstatus, appdate, appnotes } = dataToDisplay;

    companyName.value = company;
    jobTitle.value = jobtitle;
    jobUrl.value = joburl;
    appStatus.value = appstatus;
    appDate.value = appdate;
    appNotes.value = appnotes;

    currentState = "edit";
    editingId = idOfElement;

}

function dashboardStat() {

    const totalApp = dataOfApp.length;
    const totalApplied = dataOfApp.filter((data) => data.appstatus === "applied").length;
    const totalInterview = dataOfApp.filter((data) => data.appstatus === "interview").length;
    const totalOffer = dataOfApp.filter((data) => data.appstatus === "offer").length;

    totalAppCount.textContent = totalApp;
    appliedCount.textContent = totalApplied;
    interviewCount.textContent = totalInterview;
    offerCount.textContent = totalOffer;

}

function searching(input) {

    const filteredArray = dataOfApp.filter((data) =>
        data.company.toLowerCase().includes(input.toLowerCase()) || data.jobtitle.toLowerCase().includes(input.toLowerCase()));

    addToTable(filteredArray);
}

function finalSearching(){

    const valueOfSearch = appSearch.value ;
    const valueOfStatus = statusFilter.value ;
    const valueOfSort = sortApp.value ;


    const searchedArray = dataOfApp.filter((data) =>
        data.company.toLowerCase().includes(valueOfSearch.toLowerCase()) || data.jobtitle.toLowerCase().includes(valueOfSearch.toLowerCase()));

    const statusArray = valueOfStatus !== "all" ? searchedArray.filter((data)=> data.appstatus === valueOfStatus) : searchedArray;

    const copySort = [...statusArray];

    if(valueOfSort === "newest"){
        copySort.sort((a ,b )=> new Date(b.appdate) - new Date(a.appdate));
    }
    else if(valueOfSort === "oldest"){
        copySort.sort((a ,b )=> new Date(a.appdate) - new Date(b.appdate));
    }
    else if(valueOfSort === "company"){
        copySort.sort((a,b) => a.company.localeCompare(b.company));
    }
    else{
        copySort.sort((a,b)=> a.appstatus.localeCompare(b.appstatus));
    }
    

    addToTable(copySort);

}

btnPrimary.addEventListener("click", (event) => {
    event.preventDefault();
    addApplication();
    addToTable(dataOfApp);
    dashboardStat();

});

appTableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        deleteElement(event.target);
        dashboardStat();
    }
});

appTableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
        editElement(event.target);
        btnPrimary.innerText = "Update Application";
        dashboardStat();
    }
});

appSearch.addEventListener("input",finalSearching);
statusFilter.addEventListener("change",finalSearching);
sortApp.addEventListener("change",finalSearching);