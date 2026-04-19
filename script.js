import {newTaskCard, removeTaskCard} from './essentials.js';

const inp = document.body.querySelector("#user-task");
const btn = document.body.querySelector("#button-addon2");

let c = 1;
let pDiv = "#caro";

document.querySelector("#caro").addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-success")) {
        const card = e.target.closest(".card");
        if (card) card.remove();
    }
});

btn.addEventListener("click", ()=>{
    if (inp.value.trim() === "") return;

    newTaskCard(inp.value, pDiv, c);
    inp.value = "";
    c++;
});






