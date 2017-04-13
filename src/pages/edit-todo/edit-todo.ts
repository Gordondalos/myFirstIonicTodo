import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from "../../providers/data";

/**
 * Generated class for the EditTodo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage ()
@Component ( {
    selector : 'page-edit-todo',
    templateUrl : 'edit-todo.html',
} )
export class EditTodo {
    todo: any;

    constructor ( public navCtrl : NavController, public navParams : NavParams, private dataService: Data ) {
        this.todo = {
            title: '',
            description: ''
        }
    }

    /**
     * Судя по всему этот метод дает доступ к параметрам переданным через navCtrl
     */
    ionViewDidLoad () {
        let todo = this.navParams.get('todo');
        if(typeof todo !== 'undefined'){
            this.todo = todo;
        }
    }

    save(){
        // это бросит нас на домашнюю страницу
        this.dataService.save(this.todo);
        this.navCtrl.pop();

    }

}
