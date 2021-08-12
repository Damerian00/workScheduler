let now = moment();
let currentDay = $('#currentDay');
let checkIt;
let container = document.querySelector('.container');
let el;
let presentHour;
let currentHour;


setInterval(getHour, 1000);
setInterval(checkHour, 1000);

init ();

function initi(){
if (
    localStorage === undefined ||
    localStorage.length === 0 ) {
    storeUser = localStorage.setItem("userName", JSON.stringify([]));
    storeScore = localStorage.setItem("score", JSON.stringify([]));
    storeUser = JSON.parse(localStorage.getItem("userName"));
    storeScore = JSON.parse(localStorage.getItem("score"));
  } else {
    storeUser = JSON.parse(localStorage.getItem("userName"));
    storeScore = JSON.parse(localStorage.getItem("score"));
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
 console.log(el);
 console.log(presentHour);
 if (presentHour == currentHour){
    if (presentHour.includes('present')){

    }else {
        el.classList.remove('future');
        el.classList.add('present');
    }
 } else if (presentHour < currentHour){
    if (presentHour.includes('past')){

    }else{
        el.classList.add('past');  
    }
 } else {
     if (presentHour.includes('future')){

  } else{
        el.classList.add('future'); 
     }

 }
 console.log(el);
 console.log(presentHour);
}
    

}