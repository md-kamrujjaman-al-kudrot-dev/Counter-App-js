const box1 = document.querySelector(".box")
const box2 = document.querySelector(".box2")
const box3 = document.querySelector(".box3")

const remove_button = document.querySelectorAll(".remove_button")
const add_button = document.querySelectorAll(".add_button")
const reset_button = document.querySelectorAll(".reset_button")

const maximum_part1 = document.querySelector(".maximum1")
const maximum_part2 = document.querySelector(".maximum2")
const maximum_part3 = document.querySelector(".maximum3")


let count1 = 0;
let count2 = 0;
let count3 = 0;


// cart1
if (localStorage.getItem("data1") !== null) {
    count1 = Number(localStorage.getItem("data1"));
    box1.innerText = count1;
} else {
    localStorage.setItem("data1", 0);
}

// cart2
if (localStorage.getItem("data2") !== null) {
    count2 = Number(localStorage.getItem("data2"));
    box2.innerText = count2;
} else {
    localStorage.setItem("data2", 0);
}

// cart3
if (localStorage.getItem("data3") !== null) {
    count3 = Number(localStorage.getItem("data3"));
    box3.innerText = count3;
} else {
    localStorage.setItem("data3", 0);
}

showData();



function saveData() {
    localStorage.setItem("data1", count1)
    localStorage.setItem("data2", count2)
    localStorage.setItem("data3", count3)
}

function showData() {
    box1.innerText = localStorage.getItem("data1");
    box2.innerText = localStorage.getItem("data2");
    box3.innerText = localStorage.getItem("data3");

    count1 = Number(localStorage.getItem("data1"));
    count2 = Number(localStorage.getItem("data2"));
    count3 = Number(localStorage.getItem("data3"));
}


function increase(card) {

    if (card === "card1") {
        count1++;
        if (count1 > 10) {
            count1 = 10;
            box1.innerHTML = count1;
        }
        box1.innerText = count1;
    } else if (card === "card2") {
        count2++;
        if (count2 > 10) {
            count2 = 10;
            box2.innerHTML = count2;
        }
        box2.innerHTML = count2
    } else if (card === "card3") {
        count3++;
        if (count3 > 10) {
            count3 = 10;
            box3.innerHTML = count3;
        }
        box3.innerHTML = count3
    }
    

    if (count1 === 10) {
        box1.innerText = count1;
        maximum_part1.innerHTML = `<p  class="bg-red-400 font-extrabold p-1 rounded">Maximum limit reached</p>`
    }
    if (count2 === 10) {
        box2.innerText = count2;
        maximum_part2.innerHTML = `<p  class="bg-red-400 font-extrabold p-1 rounded">Maximum limit reached</p>`
    }
    if(count3===10){
        box3.innerText = count3;
        maximum_part3.innerHTML = `<p  class="bg-red-400 font-extrabold p-1 rounded">Maximum limit reached</p>`
    }

    // card3
    saveData()
}

function dicrease(card) {
    if (card === "card1") {
        count1--;
        box1.innerHTML = count1;
    } else if (card === "card2") {
        count2--;
        box2.innerHTML = count2;

    }
    else if (card === "card3") {
        count3--;
        box3.innerHTML = count3;
    }


    if (count1 < 0 || count2 < 0 || count3 < 0) {


        maximum_part1.innerHTML = ""
        maximum_part2.innerHTML = ""
        maximum_part3.innerHTML = ""
        if (card === "card1") {
            count1 = 0;
        } else if (card === "card2") {
            count2 = 0;
        } else if (card === "card3") {
            count3 = 0;
        }
    }
    box1.innerText = count1;
    box2.innerText = count2;
    box3.innerText = count3;
    saveData()

    if (count1 < 10) {
        box1.innerText = count1;
        maximum_part1.innerHTML = ``
    }
    if (count2 < 10) {
        box2.innerText = count2;
        maximum_part2.innerHTML = ``
    }
    if (count3 < 10) {
        box3.innerText = count3;
        maximum_part3.innerHTML = ``
    }
}




function reset(card) {
    if (card === "card1") {
        count1 = 0;
        box1.innerText = count1;
        maximum_part1.innerHTML = ``
    } else if (card === "card2") {
        count2 = 0;
        box2.innerText = count2;
        maximum_part2.innerHTML = ``
    } else if (card === "card3") {
        count3 = 0;
        box3.innerText = count3;
        maximum_part3.innerHTML = ``

    }
    saveData()
    // localStorage.setItem("counter", count)

}



