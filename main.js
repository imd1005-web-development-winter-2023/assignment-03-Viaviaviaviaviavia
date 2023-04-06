let todoArray = [];

const todoTest = {
    name: "do this",
    isDone: false,
};

const todoListElement = document.querySelector(".todo-list");

// todoListElement.classList.add("test");

// const newListItem = document.createElement("li");

// newListItem.classList.add("not-done");

// todoListElement.appendChild(newListItem);
// ///////////////////////////////////////
// const imgChecked = document.createElement("img");

// imgChecked.src = "./images/sunflower-sticker.png";
// imgChecked.classList.add("finished");
// imgChecked.alt = "complete";
// imgChecked.width = "55";
// imgChecked.height = "55";

// newListItem.appendChild(imgChecked);
// ///////////////////////////////////////
// const imgUnchecked = document.createElement("img");

// imgUnchecked.src = "./images/empty-checkbox.svg";
// imgUnchecked.classList.add("unfinished");
// imgUnchecked.alt = "incomplete";
// imgUnchecked.width = "55";
// imgUnchecked.height = "55";

// newListItem.appendChild(imgUnchecked);
// ///////////////////////////////////////
// const todoText = document.createElement("p");

// todoText.textContent = "test";

// newListItem.appendChild(todoText);
// //////////////////////////////////////
// const todoDeleteButton = document.createElement("button");

// todoDeleteButton.textContent = "Delete";
// //idk how buttons work yet
// newListItem.appendChild(todoDeleteButton);
// //////////////////////////////////////


function drawList() {
    while (todoListElement.hasChildNodes()) {
        todoListElement.removeChild(todoListElement.firstChild);
    }

    for (let i = 0; i < todoArray.length; i++) {
        const newListItem = document.createElement("li");

        if (todoArray[i].isDone === true) {
            newListItem.classList.add("done");
        } else {
            newListItem.classList.add("not-done");
        }

        todoListElement.appendChild(newListItem);
        ///////////////////////////////////////
        const img = document.createElement("img");

        img.width = "55";
        img.height = "55";

        if (todoArray[i].isDone === true){
            img.src = "./images/sunflower-sticker.png";
            img.alt = "complete";
        } else{
            img.src = "./images/stamp.png";
            img.alt = "incomplete"; 
        }

        img.addEventListener("click", (event)=>{
            console.log("we did it boys");
            if(todoArray[i].isDone === true){
                todoArray[i].isDone = false;
            }else{
                todoArray[i].isDone = true;
            }
            drawList();
        });

        newListItem.appendChild(img);
        ///////////////////////////////////////
        const todoText = document.createElement("p");

        todoText.textContent = todoArray[i].name;

        newListItem.appendChild(todoText);
        //////////////////////////////////////
        const todoDeleteButton = document.createElement("button");

        todoDeleteButton.textContent = "Delete";
        
        todoDeleteButton.addEventListener("click",(event)=>{
            console.log(event.target, i);
            todoArray.splice(i, 1);
            drawList();
        });
        newListItem.appendChild(todoDeleteButton);
        //////////////////////////////////////
    }
}

const form = document.querySelector(".add-todo");

form.addEventListener("submit", addTodo);

function addTodo (event){
    event.preventDefault();
    console.log("hello world");

    const textElement = document.querySelector("#todo-list");

    if(textElement.value !== ""){
        todoArray.push({name: textElement.value, isDone: false,});
        drawList();
        form.reset();
    }

}
