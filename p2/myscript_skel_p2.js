const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';

const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {

    document.body.classList.toggle("active");

    x = document.getElementsByClassName("text-mode");
    for (var i = 0; i < x.length; i++) {
        x[i].innerText = "Day Mode";

    }
   
    if(document.body.classList.contains("active"))
       {
            document.querySelector(".text-mode").style.color = "#ffc107";
            iconMoon.style.display = 'none';
            iconSun.style.display = 'block';
    }

});
