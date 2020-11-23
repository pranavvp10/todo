'use strict';


const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 
let listLenght = list.lenght;

const generateTempalate = (todo) => {
  
  const html = `<li class="list-group-item">
  <i class="fa fa-circle-o checked" aria-hidden="true" id="todo_1"></i
  <label for="todo_1">
      <span class="check">
          ${todo}
      </span>
  </label>
  <i class="fa fa-trash-o delete" aria-hidden="true"></i>
</li>`
  todoList.innerHTML += html;
};

function addTodos(e) {
    e.preventDefault();
    const todo = submitForm.add.value.trim();
    if (todo.length) {
      listLenght = listLenght + 1;
      generateTempalate(todo);
      submitForm.reset();
    }
  }
  
  submitForm.addEventListener('submit', addTodos);
  addButton.addEventListener('click', addTodos);
  
  function deleteTodos(e) {
    if (e.target.classList.contains('delete')) {
      e.target.parentElement.remove();
    }
  }




  
  todoList.addEventListener('click', deleteTodos);

  const checkItem =(e) => {
    if (e.target.classList.contains('checked')) {
      e.target.className="fa fa-circle checked"
      const tmp=e.target.parentElement.children[1];
      tmp.className="marked";
    }
  }
  todoList.addEventListener('click',checkItem);

