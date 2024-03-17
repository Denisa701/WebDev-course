addEventListener("load", (my_funct) => {
    alert("Pentru a incepe numaratoarea apasa OK");
});

// timer stopwatch whatever

let Date = null;
let [days, hours, minutes, seconds, milliseconds] = [0, 0, 0, 0, 0];
let items = document.querySelectorAll('.timer-fmt');

getTimer();



function getTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
                if (hours == 24) {
                    hours = 0;
                    days++;
                }

            }
        }
    }

        x = document.getElementsByClassName("days");
        x[0].innerHTML = days

        x = document.getElementsByClassName("hours");
        x[0].innerHTML = hours

        x = document.getElementsByClassName("minutes");
        x[0].innerHTML = minutes

        x = document.getElementsByClassName("seconds");
        x[0].innerHTML = seconds

        x = document.getElementsByClassName("milliseconds");
        x[0].innerHTML = milliseconds
}


    // timer buttons
    document.getElementById('startTimer').addEventListener('click', () => {
        if (Date !== null) {
            clearInterval(Date);
        }
        Date = setInterval(getTimer, 10);
    });



    document.getElementById('pauseTimer').addEventListener('click', () => {
        clearInterval(Date);
    });


    document.getElementById('resetTimer').addEventListener('click', () => {
        clearInterval(Date);
        [days, hours, minutes, seconds, milliseconds] = [0, 0, 0, 0, 0];

        x = document.getElementsByClassName("days");
        x[0].innerHTML = days

        x = document.getElementsByClassName("hours");
        x[0].innerHTML = hours

        x = document.getElementsByClassName("minutes");
        x[0].innerHTML = minutes

        x = document.getElementsByClassName("seconds");
        x[0].innerHTML = seconds

        x = document.getElementsByClassName("milliseconds");
        x[0].innerHTML = milliseconds
        
    });

    // space functions

    document.body.onkeyup = () => {
        if (Date !== null) {
            clearInterval(Date);
        }
        Date = setInterval(getTimer, 10);
        document.body.onkeyup = () =>{
            clearInterval(Date);
        }
    }




    // night-day mode
    const iconMoon = document.querySelector('.night');
    const iconSun = document.querySelector('.day');

    const body = document.body;

    iconMoon.style.display = 'block';
    iconSun.style.display = 'none';

    const btnMode = document.querySelector('.btn');
    btnMode.addEventListener('click', () => {

        document.body.classList.toggle("active");


        if (document.body.classList.contains("active")) {
            x = document.getElementsByClassName("text-mode");
            for (var i = 0; i < x.length; i++) {
                x[i].innerText = "Night Mode";
                x[i].style.color = "white"

            }
            document.querySelector(".text-mode").style.color = "#ffc107";
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
        }
        else {
            x = document.getElementsByClassName("text-mode");
            for (var i = 0; i < x.length; i++) {
                x[i].innerText = "Day Mode";
                x[i].style.color = "black"

            }
        }

    });


