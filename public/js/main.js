// exo 1 ---------------------------------
let input = document.getElementsByTagName("input")[0];

input.addEventListener("focus", function () {
    input.style.background = "blue"
})

// exo 2 -----------------------------------
input.addEventListener("focusout", function () {
    input.style.background = ""
})

// exo 3 ------------------------------------------

let p = document.getElementsByClassName("premierParagraphe")[0];
let q = document.getElementsByClassName("secondParagraphe")[0];
let s = document.getElementsByClassName("dernierParagraphe")[0];

let btn = document.getElementsByClassName("buttonExo");
// console.log(btn[0].innerText);

p.innerText += q.innerText
s.innerText += q.innerText

console.log(p.innerText);
console.log(q.innerText);
console.log(s.innerText);


// exo4 -----------------------------------------

let btn2 = document.getElementsByClassName("buttonExo")[1]
let input2 = document.getElementsByTagName("input")[2];
let p2 = document.getElementById("exo4");

console.log(p2.innerText);
console.log(input2.innerText);

// input2.addEventListener("input", function () {
//     btn2.addEventListener("click", renome(p2, input2) )
// })

btn2.addEventListener("click", function () {
    p2.innerText = input2.value
})


// input2.addEventListener("input", function () {
//     btn2.addEventListener("click", function () {
//         p2.innerText = input2.value
//     })

// })

// exo5 ----------------------------------------

let x = document.getElementsByClassName("btn btn-primary mb-2")[0];

// console.log(x);
let y = x.previousElementSibling.previousElementSibling.innerText;
// console.log(y.length);
// console.log(y.substring(9,32));
// console.log(y);

let z = y.substring(9,32)

let img = document.getElementsByClassName("img-responsive")[0]
// console.log(img);


x.addEventListener("click", function () {
    img.setAttribute("src", z)
})

// exo 6 ------------------------------------------

let imgExo6 = document.getElementsByClassName("img-responsive")[1]
console.log(imgExo6);
// imgExo6.setAttribute("src", "z")

let t;
let imgExo6b = document.getElementsByClassName("img-responsive")[2]

imgExo6.addEventListener("click", function () {
    t = imgExo6.getAttribute("src")
    console.log(t);
})

imgExo6b.addEventListener("click", function () {
    imgExo6b.src = t
})

// exo 7 ------------------------------------------

let xx = document.querySelectorAll("button")[3];
console.log(xx);

let imgx = xx.previousElementSibling;

let imgy = xx.nextElementSibling;

let fff;
let zzz;
xx.addEventListener("click", function () {
    zzz = imgy.innerText
    fff = imgx.innerText
    imgy.innerText = fff
    imgx.innerText = zzz 
})





