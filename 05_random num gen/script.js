const mybtn = document.getElementById("myBtn");
const l1 = document.getElementById("label1");
const l2 = document.getElementById("label2");
const l3 = document.getElementById("label3");
let min = 1;
let max = 6;
let r1;
let r2;
let r3;

mybtn.onclick = function(){
    r1 = Math.floor(Math.random() * (max - min + 1)) + min;
    r2 = Math.floor(Math.random() * (max - min + 1)) + min;
    r3 = Math.floor(Math.random() * (max - min + 1)) + min;

    l1.textContent = r1;
    l2.textContent = r2;
    l3.textContent = r3;

}