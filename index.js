const currdate=document.getElementById("date");
const weathercon=document.getElementById("weathercon");
const tempStatus="Clouds";
const getCurrentDay=()=>{
    let currtime=new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    return weekday[currtime.getDay()];
}

const getCurrentDate=()=>{
    var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    var dateObj = new Date();
    var month = dateObj.getUTCMonth(); //months from 1-12
    var day = dateObj.getUTCDate();
    let hours=dateObj.getHours();
    let min=dateObj.getMinutes();
    let time="";
    if(hours>11){
        time="PM";
        if(hours>12){
            hours-=12;
        }
    }
    else{
        time="AM";
    }
    if(min<10){
        min='0'+min;
    }
    //console.log(months[month]+"/"+day);
    //const dateSection =document.getElementById("date");
    currdate.innerHTML=`${getCurrentDay()} | ${day} ${months[month]} | ${hours}:${min}${time}`;

}

getCurrentDate();