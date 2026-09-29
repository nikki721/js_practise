//digital clock 
//using date object

function updateClock(){
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hour}:${min}:${sec}`;
    document.getElementById("clock").textContent=timeString;
}
//call the func
updateClock();
//call it rep
setInterval(updateClock,1000);