let todoArray = [];

const todoTest = {
    name: "do this",
    isDone: false,
};

const todoListElement = document.querySelector(".todo-list");

// todoListElement.classList.add("test");

const newListItem = document.createElement("li");

newListItem.classList.add("not-done");

todoListElement.appendChild(newListItem);
///////////////////////////////////////
const imgChecked = document.createElement("img");

imgChecked.src = "./images/sunflower-sticker.png";
imgChecked.classList.add("finished");
imgChecked.alt = "complete";
imgChecked.width = "55";
imgChecked.height = "55";

newListItem.appendChild(imgChecked);
///////////////////////////////////////
const imgUnchecked = document.createElement("img");

imgUnchecked.src = "./images/empty-checkbox.svg";
imgUnchecked.classList.add("unfinished");
imgUnchecked.alt = "incomplete";
imgUnchecked.width = "55";
imgUnchecked.height = "55";

newListItem.appendChild(imgUnchecked);
///////////////////////////////////////
const todoText = document.createElement("p");

todoText.textContent = "test";

newListItem.appendChild(todoText);
//////////////////////////////////////
const todoDeleteButton = document.createElement("button");

todoDeleteButton.textContent = "Delete";
//idk how buttons work yet
newListItem.appendChild(todoDeleteButton);
//////////////////////////////////////


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
        const imgChecked = document.createElement("img");

        imgChecked.src = "./images/sunflower-sticker.png";
        imgChecked.classList.add("finished");
        imgChecked.alt = "complete";
        imgChecked.width = "55";
        imgChecked.height = "55";

        newListItem.appendChild(imgChecked);
        ///////////////////////////////////////
        const imgUnchecked = document.createElement("img");

        imgUnchecked.src = "./images/empty-checkbox.svg";
        imgUnchecked.classList.add("unfinished");
        imgUnchecked.alt = "incomplete";
        imgUnchecked.width = "55";
        imgUnchecked.height = "55";

        newListItem.appendChild(imgUnchecked);
        ///////////////////////////////////////
        const todoText = document.createElement("p");

        todoText.textContent = todoArray[i].name;

        newListItem.appendChild(todoText);
        //////////////////////////////////////
        const todoDeleteButton = document.createElement("button");

        todoDeleteButton.textContent = "Delete";
        //idk how buttons work yet
        newListItem.appendChild(todoDeleteButton);
        //////////////////////////////////////
    }
}
