//classList
let buttons = document.querySelectorAll(".myButton");

//buttons.classList.add(enabled); => buttons is a nodelist
//we iterate thru the node list
buttons.forEach(button => {
    button.classList.add("enabled");
    //you gotta use ""
});
//adding event listener
//syntax .addEventListener(event,callback);
//we use arrow func for callback 
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    });
});
buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button => {
    
    button.addEventListener("click",event=>{

        if(event.target.classList.contains("disabled")){
            event.target.textContent = "oops!";
        }
        else{
            event.target.classList.replace("enabled","disabled");
            //replace syntax(old,new);

        }

         
    });
});
