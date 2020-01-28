var input = document.getElementById('taskBar');
var button = document.getElementById('addTask');
var todo = document.getElementById('todo');
var completed = document.getElementById('completed');
input.addEventListener('keyup', function(event){
	if((event.which || event.keycode)==13){
		event.preventDefault();
		button.click();
	}
})

button.addEventListener('click', function(){
	var task = input.value;
	if(task==''){
		input.classList.add('emptyAlert');
	}
	else{ 
		adder(task);
		if(input.classList.contains('emptyAlert')){
			input.classList.remove('emptyAlert');
		}
	}
});

var i = 1;
function adder(task){
	var div = document.createElement('div');
	div.classList.add('task', `task${i}`);
	var checkbox= "<input type='checkbox' onclick = moveToComplete(this)>";
	var x = document.createElement('p');
	var y = document.createTextNode(task);
	var moveIcon = "<img src='https://img.icons8.com/metro/26/000000/forward-arrow.png' id='moveIcon' onclick='movetoPending(this)'>";
	var deleteIcon = "<img src='https://img.icons8.com/material-rounded/24/000000/filled-trash.png' id='deleteIcon' onclick='delete(this)'>";
	
	x.appendChild(y);
	div.appendChild(x);
	div.insertAdjacentHTML('afterbegin', checkbox);
	div.insertAdjacentHTML('beforeend', moveIcon);
	div.insertAdjacentHTML('beforeend', deleteIcon);
	
	// z.usemap = "#map";
	
	todo.appendChild(div);
	i+=1;
}


function movetoPending(move){
	var task = move.parentElement;
	var moveIcon = "<img src='https://img.icons8.com/android/24/000000/left2.png' id='moveIcon' onclick = 'movetoTodo()'>";
	// var oldMoveIcon = document.get
	// task.replaceChild()
	pending.appendChild(task);
}
function moveToComplete(box){
	var task = box.parentElement;
	if(box.checked){
		completed.appendChild(task);
	}
	else{
		todo.appendChild(task);
	}
}