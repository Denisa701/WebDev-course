const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
  
let message = document.querySelector('.msg');
let timer = document.querySelector('.timer');

document.getElementById('btn').addEventListener('click', () => {
  alert("Alerta?");
});

const webDate = new Date(2023, 10, 22, 21, 0, 0);

/**
 * Don't change
 * 
 * Retrieve the data from webDate
 */
let year = webDate.getFullYear();
let month = months[webDate.getMonth()];
let date = webDate.getDate();
let hours = webDate.getHours();
let weekday = weekDays[webDate.getDay()];

/**
 * >> Hint - you can use the <message> variable ????
 */
  const h = document.createElement("h4")
  h.classList.add("msg")
  x = document.getElementsByClassName("msg");
  for (var i = 0; i < x.length; i++) {
      x[i].innerText = "Web Classes end on " + weekday+ " " +  date+ " " + month+ " " + year+ " " + hours+ ":00";

  }
  
  document.body.appendChild(h)



/**
 * Get the total time in millis from webDate
 */
const timeLeft = webDate.getTime();

/**
 * vals -> millis
 *    1s = 1000ms
 *    1m = 60s
 *    1hr = 60m
 *    1d = 24hr
 */
const MILLIS = 1000;

const oneDay = 24 * 60 * 60 * MILLIS;
const oneHour = 60 * 60 * MILLIS;
const oneMinute = 60 * MILLIS;

let items = document.querySelectorAll('.timer-fmt h4');

/**
 * Call the function to set the initial values
 */
getCountdownTime();


function getCountdownTime() {
  let currTime = new Date().getTime();
  let t = timeLeft - currTime;
  days = parseInt(t/oneDay)
  hours = parseInt((t%oneDay)/oneHour)
  mins = parseInt(((t%oneDay)%oneHour)/oneMinute)
  seconds = parseInt((((t%oneDay)%oneHour)%oneMinute)/MILLIS)
  
  x = document.getElementsByClassName("days");
  x[0].innerHTML = days

  x = document.getElementsByClassName("hours");
  x[0].innerHTML = hours
  
  x = document.getElementsByClassName("minutes");
  x[0].innerHTML = mins

  x = document.getElementsByClassName("seconds");
  x[0].innerHTML = seconds
  

  /**
   * TODO - Update the time
  */
}

setInterval(getCountdownTime,1000);
/**
 * TODO 2 - use setInterval(@params...) to call getCountdownTime()
 *          function and set the values for days, hours, minutes, seconds
 *          fields in .html
 * 
 * > Hint - how _often_ do you need to call it? its not a hint if you ask me stuff i dont know 
 */
  