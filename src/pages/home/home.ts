import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EditTodo } from '../edit-todo/edit-todo';

import { Data } from '../../providers/data';

@Component ( {
    selector : 'page-home',
    templateUrl : 'home.html'
} )
export class HomePage implements OnInit {



    constructor ( public navCtrl : NavController, public dataService: Data ) {

    }

    addTodo () {
        this.navCtrl.push ( EditTodo );
    }

    editTodo ( todo ) {
        this.navCtrl.push ( EditTodo, {
            todo : todo

        } );
    }

    // ionViewDidLoad(){
    //     this.dataService.load();
    // }

    ngOnInit () {
        this.dataService.load();
    }


}
