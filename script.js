"use strict"

let day =  document.getElementById("Day");
let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec =  document.getElementById("sec");

var countDownDate = new Date("Dec 02, 2023 11:30:00").getTime();
 
var x = setInterval(function() 
{

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
  console.log("countDownDate: "+countDownDate);
  console.log("now: "+now);
  console.log("distance: "+distance)

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
  console.log("days: "+days);
  console.log("hours: "+hours);
  console.log("minutes: "+minutes);
  console.log("seconds: "+seconds);

  console.log(distance / (1000 * 60 * 60 * 24));
  console.log((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log((distance % (1000 * 60 * 60)) / (1000 * 60));
  console.log((distance % (1000 * 60)) / 1000);
  
  day.innerHTML= days +" "+"DAYS";
  hour.innerHTML= hours +" "+"HOURS";
  min.innerHTML= minutes +" "+"MIN";
  sec.innerHTML= seconds +" "+"SECS";
    
  if (distance < 0) 
  {
    day.innerHTML= "00 Day";
    hour.innerHTML= "00 hours";
    min.innerHTML= " 00 minutes";
    sec.innerHTML= "00  seconds" ;
  }
  
}, 1000);
