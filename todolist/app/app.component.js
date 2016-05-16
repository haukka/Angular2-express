"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.done = 0;
        this.total = 0;
        this.todos = [{ text: "todo list", isDone: false }];
        this.total = this.todos.length;
    }
    AppComponent.prototype.Add = function (text) {
        var todo = { 'text': text, 'isDone': false };
        this.todos.push(todo);
        this.total = this.todos.length;
    };
    AppComponent.prototype.Counter = function (todo) {
        if (!todo.isDone) {
            todo.isDone = true;
            this.done++;
        }
        else {
            todo.isDone = false;
            this.done--;
        }
    };
    AppComponent.prototype.remove = function (id) {
        if (this.todos[id].isDone) {
            this.done--;
        }
        this.todos.splice(id, 1);
        this.total = this.todos.length;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-list',
            templateUrl: '../todo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map