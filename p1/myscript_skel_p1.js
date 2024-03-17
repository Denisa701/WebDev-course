
addEventListener("load", (my_funct) => {
    alert("ALERTA");
});



document.getElementById("header_1").innerHTML = "newText";


/**
 * TODO - Display a message when the button with the id = "btn"
 *        is clicked
 *  - you can either display it as an alert, or as a text in the page
 */
function idk() {
    const elm = document.getElementById("btn")
    alert("ai apasat pe buton");

}
document.addEventListener("click", idk);

/**
 * Don't change
 */

let curr = ``;
let ids = [];

for (let i = 0; i < 10; i++) {
    let aux = "d_" + i;
    ids.push(aux);

    curr += `<div class="ex2" id = ${ids[i]}> </div>`;
}

// use console.log() to check the content of ids
console.log(ids);

document.getElementById('res').innerHTML = curr;

for (let i = 0; i < 10; i++) {
    randColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(ids[i]).style.backgroundColor = "#" + randColor;
}

for (let i = 0; i < 10; i = i + 2) {
    let aux = "d_" + i;
    document.getElementById(aux).classList.remove("ex2")
    document.getElementById(aux).classList.add("ex")

}




array = document.querySelectorAll('.ex2')
array.forEach(element => {
    element.style.border = "thick solid #0000FF";
});


