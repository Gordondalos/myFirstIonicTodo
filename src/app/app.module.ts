import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from "@angular/http";


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EditTodo } from "../pages/edit-todo/edit-todo";
import { Data } from "../providers/data";



@NgModule ( {
    declarations : [
        MyApp,
        HomePage,
        EditTodo,

    ],
    imports : [
        IonicModule.forRoot ( MyApp ),
        BrowserModule,
        IonicStorageModule.forRoot(),
        HttpModule


    ],
    bootstrap : [ IonicApp ],
    entryComponents : [
        MyApp,
        HomePage,
        EditTodo
    ],
    providers : [
        StatusBar,
        SplashScreen,
        Data,


        { provide : ErrorHandler, useClass : IonicErrorHandler }
    ]
} )
export class AppModule {
}
