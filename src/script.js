const box = document.getElementById("box")
const remove_button = document.getElementById("remove_button")
const add_button = document.getElementById("add_button")
const reset_button = document.getElementById("reset_button")

let count = 0
function increase(){
    count ++;
    box.innerText = count;
}

function dicrease(){
    if(count > 0){
        count--;
    }
    box.innerText = count;
}


function reset(){
    count = 0;
    box.innerText = count;
}