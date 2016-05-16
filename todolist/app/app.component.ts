import {Component} from '@angular/core';
import {Todo} from './todo'

@Component({
  selector: 'todo-list',
  templateUrl: '../todo.html'
})

export class AppComponent {
	todos: Todo[];
	done = 0;
	total = 0;
	
	constructor() {
		this.todos = [{text: "todo list", isDone: false}];
		this.total = this.todos.length;
	}
	
	Add(text) {
		let todo = {'text': text, 'isDone': false};
		this.todos.push(todo);
		this.total = this.todos.length;
	}
	
	Counter(todo) {
		if (!todo.isDone) {
			todo.isDone = true;
			this.done++;
		} else {
			todo.isDone = false;
			this.done--;
		}
	}
	
	remove(id) {
		if (this.todos[id].isDone) {
			this.done--;
		}
		this.todos.splice(id, 1);
		this.total = this.todos.length;
	}
}