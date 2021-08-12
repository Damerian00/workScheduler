let now = moment();
let currentDay = $('#currentDay');
let container = document.querySelector('.container');
let el;
let presentHour;
let currentHour;
let storeTimes;
let storeNotes;
let timeDay;
let toDo;
let storageArray = [{
    hour: "9AM",
    message: "",
},
{
    hour: "10AM",
    message: "",
},
{
    hour: "11AM",
    message: "",
},
{
    hour: "12PM",
    message: "",
},
{
    hour: "1PM",
    message: "",
},
{
    hour: "2Pm",
    message: "",
},
{
    hour: "3PM",
    message: "",
},
{
    hour: "4PM",
    message: "",
},
{
    hour: "5PM",
    message: "",
},];
let tempVarArray;
setInterval(getHour, 1000);
setInterval(checkHour, 1000);

init();

function init() {
    if (
        localStorage === undefined ||
        localStorage.length === 0) {
        storeNotes = JSON.parse(localStorage.getItem("toDo"));
        storageArray = storeNotes;
    } else {
        storeNotes = JSON.parse(localStorage.getItem("toDo"));
        storageArray = storeNotes;
    }
    if (storageArray === undefined || storageArray === null) {

    } else {
        for (i = 0; i < 9; i++) {
            let newstorageArray = JSON.parse(localStorage.getItem("storageArray"));
            let theMessage = storageArray[i].message;
            container.children[i].children[1].value = theMessage;
        }
    }

}


function getHour() {
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(rightNow);

}
function checkHour() {

    currentHour = moment().hour();

    for (let i = 0; i < 9; i++) {
        el = container.children[i].children[1];
        presentHour = el.getAttribute('data-hour');

        if (presentHour == currentHour) {
            if (presentHour.includes('present')) {

            } else {
                el.classList.remove('future');
                el.classList.add('present');
            }
        } else if (presentHour > currentHour || currentHour > 17) {
            if (presentHour.includes('future')) {

            } else {
                el.classList.add('future');
            }
        } else if (presentHour < currentHour) {
            if (presentHour.includes('past')) {

            } else {
                el.classList.remove('present');
                el.classList.add('past');
            }
        }

    }


}

document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => {
        let textAr = event.target.previousElementSibling;
        toDo = textAr.value;
        let datAr = textAr.previousElementSibling;
        timeDay = datAr.innerText;
        if (storageArray != null) {


            for (let i = 0; i < storageArray.length; i++) {
                let tempVar = container.children[i].children[0]
                if (timeDay === tempVar.innerText) {
                    let eventMessage = storageArray[i];
                    eventMessage.message = toDo;
                    let newEventMessage = eventMessage.message;
                }

            }
            localStorage.setItem("toDo", JSON.stringify(storageArray));

        } else {

        }
    })

})
