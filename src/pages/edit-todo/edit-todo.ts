import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

    constructor ( public navCtrl : NavController, public navParams : NavParams ) {
        this.todo = {
            title: '',
            description: ''
        }
    }

    /**
     * Судя по всему этот метод дает доступ к параметрам переданным через navCtrl
     */
    ionViewDidLoad () {
        this.todo = this.navParams.get('todo');
    }

    save(){
        console.log('TODO finish function');
    }

}
