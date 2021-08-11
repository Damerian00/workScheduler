let now = moment();
let currentDay = $('#currentDay');

setInterval(getHour, 1000);



function getHour(){
    
    let rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentDay.text(rightNow);
   
}
function checkHour(){
    let cNow = now.hour();
    if(Cnow > 12){
        Cnow-12;
    }

}