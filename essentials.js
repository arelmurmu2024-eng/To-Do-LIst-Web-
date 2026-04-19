
export function newTaskCard(task, parentDiv, n){
    // Takes "task (string)" and the "id # of the parent div" to be added into
    // and "n is the serial number of the task"
    const parent = document.body.querySelector(parentDiv);
    
    //bootstrap code to geerate task card
    parent.innerHTML += `<div class="card" id="t-${n}">
  <div class="card-body">
    <p class="card-text">${task}</p>
    <a class="btn btn-success" id="b-${n}">Done</a>
  </div>
</div>
`;

    // return `#t-${n}` //returns the id for the removal of the task later
}

export function removeTaskCard(n){
    // Takes "#id" and removes the task element
    document.body.querySelector(n).remove();
}

