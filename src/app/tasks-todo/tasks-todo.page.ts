import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
import *as firebase from 'firebase';

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.page.html',
  styleUrls: ['./tasks-todo.page.scss'],
})
export class TasksTodoPage implements OnInit {

  constructor(private toastCtrl: ToastController, private navCtrl : NavController,) { 
       // this.task_owner =firebase.auth().currentUser.uid;

  }


  ngOnInit() {
  }

  gotoAddTask(){
    this.navCtrl.navigateBack('/addtask')

  }

}
