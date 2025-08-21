const box1 = document.querySelector(".box")
const box2 = document.querySelector(".box2")
const remove_button = document.querySelectorAll(".remove_button")
const add_button = document.querySelectorAll(".add_button")
const reset_button = document.querySelectorAll(".reset_button")
const maximum_part1 = document.querySelector(".maximum1")
const maximum_part2 = document.querySelector(".maximum2")



let count1 = 0
let count2 = 0



if (localStorage.getItem("data1") !== null) {
    count1 = localStorage.getItem("data1");
    box1.innerText = count1;


} else {
    localStorage.setItem("data1", 0);
    // count1 = 0;
    // box1.innerText = count1;
    showData();
}

if (localStorage.getItem("data2" !== null)) {
    count2 = localStorage.getItem("data2")
    box2.innerText = count2;
}
else {

    localStorage.setItem("data2", 0)
    showData()
}



function saveData() {
    localStorage.setItem("data1", count1)
    localStorage.setItem("data2", count2)
}

function showData() {
    box1.innerText = localStorage.getItem("data1");
    box2.innerText = localStorage.getItem("data2");
    count1 = localStorage.getItem("data1")
    count2 = localStorage.getItem("data2")
}


function increase(card) {

    if (card === "card1") {
        count1++;
        if (count1 > 10) {
            count1 = 10;
            box1.innerHTML = count1;
        }
        box1.innerText = count1;
    } else {
        count2++;
        if (count2 > 10) {
            count2 = 10;
            box2.innerHTML = count2;
        }
        box2.innerHTML = count2
    }

    if (count1 === 10) {
        box1.innerText = count1;
        maximum_part1.innerHTML = `<p  class="bg-red-400 font-extrabold p-1 rounded">Maximum limit reached</p>`
    } else if (count2 === 10) {
        box2.innerText = count2;
        maximum_part2.innerHTML = `<p  class="bg-red-400 font-extrabold p-1 rounded">Maximum limit reached</p>`
    }


    saveData()
}

function dicrease(card) {
    if (card === "card1") {
        count1--;
        box1.innerHTML = count1;
    } else {
        count2--;
        box2.innerHTML = count2;
    }


    if (count1 < 0 || count2 < 0) {


        maximum_part1.innerHTML = ""
        maximum_part2.innerHTML = ""
        if (card === "card1") {
            count1 = 0;
        } else {
            count2 = 0;
        }
    }
    box1.innerText = count1;
    box2.innerText = count2;
    saveData()

    if (count1 < 10) {
        box1.innerText = count1;
        maximum_part1.innerHTML = ``
    } else if (count2 < 10) {
        box2.innerText = count2;
        maximum_part2.innerHTML = ``
    }
}




function reset(card) {
    if (card === "card1") {
        count1 = 0;
        box1.innerText = count1;
    } else {
        count2 = 0;
        box2.innerText = count2;
    }
    saveData()
    // localStorage.setItem("counter", count)

}



