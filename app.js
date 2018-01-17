function onReady(){
let toDos = [];
const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');


function createNewToDo(){
  if (!newToDoText.value) { return ;}
  toDos.push({
    title: newToDoText.value,
    complete:false
  })
  newToDoText.value ='';
  render theUI();
}
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
toDoList.textContent ='';

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type="checkbox";

      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
  });

  }

addToDoForm.addEventListener('submit',even => {
  event.preventDefault();
  createNewToDo();
  newToDoText.value ='';
});


window.onload =function () {
  onReady();
}
