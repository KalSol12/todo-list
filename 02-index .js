const todolist = [
  {
    name: "make dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "wash dishes",
    dueDate: "2022-12-22",
  },
];
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  console.log(name);
  const dateInputElement = document.querySelector(".js-due-date-input");
  console.log(dateInputElement.value);
  const dueDate = dateInputElement.value;

  todolist.push({ name, dueDate });

  console.log(todolist);
  inputElement.value = " ";
  display(todolist);
}
function display(name) {
  let parEl = document.querySelector(".par1");
  let par = " ";
  let html = "";
  todolist.forEach(function (todoObject, i) {
    const { name, dueDate } = todoObject;

    html += `
       <div> ${name}</div>
       <div>  ${dueDate}</div>
      <button class="delet-todo-btn" onclick="
       todolist.splice(${i}, 1);
       display()
       ">Delete</button> 
          
       `;
  });
  parEl.innerHTML = html;
}
