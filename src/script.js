const box = document.getElementById("box")
const remove_button = document.getElementById("remove_button")
const add_button = document.getElementById("add_button")
const reset_button = document.getElementById("reset_button")
const maximum_part = document.getElementById("maximum")

let count = 0


if(localStorage.getItem("data") !== ''){
    showData();
}else{
    localStorage.setItem("data",0)
    showData()
}

function saveData() {
    localStorage.setItem("data", count )
}

function showData() {
    box.innerText = localStorage.getItem("data");
    count = localStorage.getItem("data")
}


function increase() {
    count++;
    box.innerText = count;

    if (count >= 10) {
        count = 10;
        box.innerText = count;
        maximum_part.innerHTML = `<p  class="bg-red-400 font-extrabold p-1 rounded">Maximum limit reached</p>`
    }
    saveData()
}

function dicrease() {
    if (count > 0) {
        count--;
        maximum_part.innerHTML = ""
    }
    box.innerText = count;
    saveData()
}




function reset() {
    count = 0;
    box.innerText = count;
    saveData()
    // localStorage.setItem("counter", count)
    
}

