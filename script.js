const companyName = document.getElementById("company-name");
const jobTitle = document.getElementById("job-title");
const jobUrl = document.getElementById("job-url");
const appStatus = document.getElementById("application-status");
const appDate = document.getElementById("application-date");
const appNotes = document.getElementById("application-notes");
const btnPrimary = document.getElementById("add-application-button");
const appTableBody = document.getElementById("applications-table-body");
const deleteBtn = document.querySelectorAll(".delete-button")

let dataOfApp = JSON.parse(localStorage.getItem("data")) || [];
addToTable()

function addApplication() {
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
}

function addToTable() {

    appTableBody.innerHTML = "";

    dataOfApp.forEach(lastElement => {

        const { id, company, jobtitle, joburl, appstatus, appdate, appnotes } = lastElement ;

        
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

function deleteElement(elementToDelete){

    const closestElement = elementToDelete.closest("tr");

    const idOfElement = closestElement.id ;

    dataOfApp = dataOfApp.filter(({id})=> id !== idOfElement);
    localStorage.setItem("data", JSON.stringify(dataOfApp));
    addToTable();

}

btnPrimary.addEventListener("click", (event) => {
    event.preventDefault();
    addApplication();
    addToTable();

});

appTableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-button")) {
        deleteElement(event.target);
    }
});