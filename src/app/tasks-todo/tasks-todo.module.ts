import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksTodoPageRoutingModule } from './tasks-todo-routing.module';

import { TasksTodoPage } from './tasks-todo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksTodoPageRoutingModule
  ],
  declarations: [TasksTodoPage]
})
export class TasksTodoPageModule {}
