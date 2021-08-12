let now = moment();
let currentDay = $('#currentDay');
let checkIt;
let container = document.querySelector('.container');
let saveIt = document.querySelectorAll('.saveBtn');
let el;
let presentHour;
let currentHour;
let storeTime;
let storeThingy;
let timeDay;
let toDo;
let datData;
let textData;
setInterval(getHour, 1000);
setInterval(checkHour, 1000);

init();

function init(){
if (
    localStorage === undefined ||
    localStorage.length === 0 ) {
    storeTime = localStorage.setItem("timeDay", JSON.stringify([]));
    storeThingy = localStorage.setItem("toDo", JSON.stringify([]));
    storeTime = JSON.parse(localStorage.getItem("timeDay"));
    storeThingy = JSON.parse(localStorage.getItem("toDo"));
  } else {
    storeTime = JSON.parse(localStorage.getItem("timeDay"));
    storeThingy = JSON.parse(localStorage.getItem("toDo"));
  }
}

function getHour(){
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(rightNow);
    
}
function checkHour(){
   
    currentHour = moment().hour();
   
    /*This function will need to pull the current hour
    then it will need to evaluate which element with class hour matches
    that same number. If it matches then it will get present class added
    if it is below then it will get a past class added, and if it's above then
    it will get future class added need to also make sure the class isn't already there before adding*/ 
 for (let i=0; i < 9; i++ ){
 el = container.children[i].children[1];
 presentHour = el.getAttribute('data-hour');
 
 if (presentHour == currentHour){
    if (presentHour.includes('present')){

    }else {
        el.classList.remove('future');
        el.classList.add('present');
    }
} else if (presentHour > currentHour || currentHour > 17){
    if (presentHour.includes('future')){

 } else{
       el.classList.add('future'); 
    } 
 } else if (presentHour < currentHour){
    if (presentHour.includes('past')){

    }else{
        el.classList.add('past');  
    }
 }

}
    

}
document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => { 
        console.log("you saved me");
         let textAr = event.target.previousElementSibling;
         textData = textAr.value;
         let datAr = textAr.previousElementSibling;
         datData = datAr.innerText;
         console.log(textAr);
         console.log(textData);
         console.log(datAr);
         console.log(datData);




      })
})
//      event.preventDefault(); 
    
//      console.log(event);
//     let textAr = event.target.sibling[1];
//      let datAr = event.target.sibling[0];
//      console.log(textAr);
//      console.log(datAr);

// });


// saveIt.forEach(el => el.addEventListener("click", event => {
//   let textAr = event.target.sibling[1];
//   let datAr = event.target.sibling[0];
//   console.log(textAr);
//   console.log(datAr);
// //     timeDay = el.sibling[0].innerText;
// //     console.log(timeDay);
// //     toDo = el.sibling[1].value;
// //   console.log(toDo);

//     // if (userName === "") {
//     //     displayMessage("error", "userName cannot be blank");
//     // } else  {
//     //     displayMessage("success", "Registered successfully");
//     //     storeUser.push(userName);
//     //     storeScore.push(daScore);
//     //     //local storage is storing it to index 1 and 2 and not moving from there.
//     //     localStorage.setItem("userName", JSON.stringify(storeUser));
//     //     localStorage.setItem("score", JSON.stringify(storeScore));
//     //     showWinners();

//     // }
// }));