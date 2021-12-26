// exo 1 ======================================

let input_exo1 = document.getElementsByTagName("input")[0];
input_exo1.setAttribute("class", "bg-info");
input_exo1.addEventListener("mouseover", function () {
    input_exo1.classList.toggle("bg-info")
})

// remarque : j'ai mis l'affectation d'une classe avec son contenu en dehors de l'écouteur pour pouvoir mettre un toggle plus stylé mais pas demandé dans l'exo

// exo 2 =================================================

let input_exo2 = document.getElementsByTagName("input")[1];
input_exo2.addEventListener("mouseover", function () {
    input_exo2.className = "bg-info"
})
input_exo2.addEventListener("mouseleave", function () {
    input_exo2.className = " "
})

// exo 3 ==================================================

let p1 = document.getElementsByClassName("premierParagraphe")[0];
let p2 = document.getElementsByClassName("secondParagraphe")[0];
let p3 = document.getElementsByClassName("dernierParagraphe")[0];
let btn_exo2 = p3.nextElementSibling

btn_exo2.addEventListener("click", function () {
    p1.innerText = p2.innerText;
    p3.innerText = p2.innerText;
})


// exo 4 ===================================================

let p_nico = document.getElementById("exo4");
console.log(p_nico);

let input_nico = p_nico.nextElementSibling.firstElementChild.firstElementChild;
console.log(input_nico);

let btn_nico = document.querySelectorAll("button")[1]
console.log(btn_nico);

btn_nico.addEventListener("click",  function () {
    p_nico.innerText = input_nico.value
})


// exo 5 ====================================================


let i_exo5 = document.querySelectorAll("i")[0];
let btn_exo5 = i_exo5.parentElement;
let img_exo5 = btn_exo5.previousElementSibling;
let p_chemin = img_exo5.previousElementSibling;

let chemin = p_chemin.innerText.replace("Chemin : ", "")

btn_exo5.addEventListener("click", function () {
    img_exo5.src = chemin
})


// exo 6 ====================================================

let img_exo6_acopier = document.getElementsByClassName("img-responsive")[1];
let img_exo6_amettre = document.getElementsByClassName("img-responsive")[2];

let temp;
img_exo6_acopier.addEventListener("click", function () {
    temp = img_exo6_acopier.src
    console.log(temp);
})

img_exo6_amettre.addEventListener("click", function () {
    img_exo6_amettre.src = temp
})


// exo 7 ====================================================

let div_exo7 = document.getElementsByClassName("container")[0].lastElementChild;
console.log(div_exo7);

let p1_exo7 = div_exo7.getElementsByTagName("p")[0]
let p2_exo7 = div_exo7.getElementsByTagName("p")[1]
let btn_exo7 = p1_exo7.nextElementSibling

let tempo;
btn_exo7.addEventListener("click", function () {
    tempo = p1_exo7.innerText
    p1_exo7.innerText = p2_exo7.innerText
    p2_exo7.innerText = tempo
})






