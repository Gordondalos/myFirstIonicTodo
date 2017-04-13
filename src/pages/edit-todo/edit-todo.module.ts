import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EditTodo } from "./edit-todo";


@NgModule({
  declarations: [
    EditTodo,
  ],
  imports: [
    IonicModule.forRoot(EditTodo),
  ],
  exports: [
    EditTodo
  ]
})
export class EditTodoModule {}
