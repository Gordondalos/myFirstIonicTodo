import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import {EditTodo} from '../edit-todo/edit-todo';

@Component ( {
    selector : 'page-home',
    templateUrl : 'home.html'
} )
export class HomePage implements OnInit{

    todos: any = [];

    constructor ( public navCtrl : NavController ) {

    }

    addTodo(){
        this.navCtrl.push(EditTodo);
        console.log('add');
    }
    editTodo(todo){
        this.navCtrl.push(EditTodo, {
            todo: todo
        });
    }

    ngOnInit(){
        this.todos = [
            {title: 'Todo1', description: 'asd'},
            {title: 'Todo2', description: 'asd1'},
            {title: 'Todo3', description: 'asd2'},
            {title: 'Todo4', description: 'asd3'},
            {title: 'Todo5', description: 'asd4'},
        ]
    }


}
