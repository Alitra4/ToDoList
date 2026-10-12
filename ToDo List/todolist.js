function addToDoList(ouioui) {
    const newtodo = document.createElement("textarea");
    newtodo.rows = "5"
    newtodo.classList.add("ToDoList-ToDo")
    newtodo.innerText = ouioui;

    const gallery = document.querySelector(".ToDoList-liste");
    const gallery2 = document.createElement("li");
    gallery.appendChild(gallery2);
    gallery2.appendChild(newtodo);
}

const buttonTag = document.querySelector("button");
buttonTag.addEventListener("click", function () {
    const inputTag = document.querySelector("input");
    // if (inputTag.value != ""){
        addToDoList(inputTag.value);
        inputTag.value = ""
    // }
});