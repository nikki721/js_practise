const decreasebtn = document.getElementById("decreaseBtn");
const increasebtn = document.getElementById("increaseBtn");
const resetbtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increasebtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
resetbtn.onclick = function(){
    count=0;
    countLabel.textContent = count;
}