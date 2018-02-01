
function onReady(){
	//store the addToDo in a var addToDoForm
	const addToDoForm = document.getElementById('addToDoForm');
	//store the input in var newToDoText
	const newToDoText = document. getElementById('newToDoText');
	//store list in var toDoList
	const toDoList = document.getElementById('toDoList');
	//when the event fires, it will do submission
	addToDoForm.addEventListener('submit', event => {
event.preventDefault();//to prevent loadinig to new page

//get the text
	let title = newToDoText.value;
	//create a new Li
	let newLi = document.createElement('li');
	//create a new input
	let checkbox = document.createElement('input');
	//create a new button
	let newButton = document. createElement('button');
	newButton.addEventListener('click',deleteNote,false);
	//create a text node
	let newText = document.createTextNode('delete');

    //set the input type to checkbox
	checkbox.type = "checkbox";

	//set the button type to reset
	newButton.type = "reset";


	//set the title
	newLi.textContent = title;

	//attach the checkbox to the Li
	newLi.appendChild(checkbox);

	//attach the newButton to newLi
	newLi.appendChild(newButton);

	//attach the newText to newButton
	newButton.appendChild(newText);

	function deleteNote() {
		toDoList.removeChild(newLi);
	}

	//attach the newLi to the toDoList
	toDoList.appendChild(newLi);
	//emty the input
	newToDoText.value='';

});

}
window.onload = function() {
	onReady();
};
