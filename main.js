
const todos = [];

const todoList = document.querySelector(".list");

const todoForm = document.querySelector(".add-todo");

const todoItem = document.querySelector("#todo-list");



// Handle the event when a user submits the form
function addTodoItem(e) {
    // Stop browser default form submission
    e.preventDefault();
    // Get the text from the input field
    const todoListItem = todoItem.value;
    // Add the user defined pokemon to our array
    todos.push(todoListItem);
    // Draw the list of pokemons pokeList
    renderList(todos, todoList);
    // Reset the form so that the text field name is cleared
    todoForm.reset();
}

// Draw the list of items
// Step 1: remove all of the children in the UL list
// Step 2: for each entry in the array add the array item to the list
function renderList(items, itemsList) {
    // Clear all of the entries in the list listItem
    while (itemsList.firstChild) {
        itemsList.removeChild(itemsList.firstChild);
    }

    // For each item in the list add a list item
    for (let i = 0; i < items.length; i++) {
        // Create the list item and add the text

        const todoDeleteButton = document.createElement("button");
        todoDeleteButton.textContent = "Delete";

        todoDeleteButton.classList.add("todoDeleteButton");
        todoDeleteButton.dataset.index = i;

        todoDeleteButton.addEventListener("click", deleteTodo);

        itemsList.appendChild(todoDeleteButton);



        const itemsList = document.createElement("li");
        itemsList.textContent = items[i];
        // On the last item in the list, add the annimation class
        if (i === items.length - 1) {
            itemsList.classList.add("not-done");
        }
        // Add the list item to the list
        itemsList.appendChild(listItem);
    }
}

//
// EVENT LISTENERS AND INITIALISION
//

// Add the submit form handler
todoForm.addEventListener("submit", addTodoItem);


// Draw the list
renderList(todos, todoList);
