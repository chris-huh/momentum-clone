const todoform = document.querySelector('.js-todoform');
const todoInput = todoform.querySelector('input');
const todolist = document.querySelector('.js-todolist');

let counter = 0;
let list = [];

function init() {
	todoform.addEventListener('submit', e => {
		e.preventDefault();
		paintTodo(todoInput.value);
		todoInput.value = '';
	});
	loadTodos();
}

const loadTodos = () => {
	const todos = localStorage.getItem('todos');
	if (todos !== null) {
		const parsed = JSON.parse(todos);
		parsed.map(item => paintTodo(item.text));
	}
};

const saveTodos = () => {
	localStorage.setItem('todos', JSON.stringify(list));
};

const paintTodo = text => {
	const item = document.createElement('li');
	item.key = counter++;
	const txt = document.createElement('span');
	txt.innerHTML = text;

	const deleteButton = document.createElement('button');
	deleteButton.innerHTML = 'X';
	deleteButton.addEventListener('click', e => {
		list = list.filter(i => i.id !== e.target.parentNode.key);
		todolist.removeChild(e.target.parentNode);
		saveTodos();
	});

	item.appendChild(txt);
	item.appendChild(deleteButton);
	todolist.appendChild(item);

	list.push({ id: item.key, text });
	saveTodos();
};

init();
