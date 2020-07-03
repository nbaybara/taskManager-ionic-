import { Component, OnInit } from '@angular/core';
import *as firebase from 'firebase';
import {ToastController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {

  task_title:string;
  task_desc:string;
  task_date:Date;
  task_timeRange : string;
  //task_owner:string;
 


  constructor(private toastCtrl: ToastController,private navCtrl : NavController,) { 
   // this.task_owner =firebase.auth().currentUser.uid;
  }

  ngOnInit() {
  }
  addTask(){
    firebase.firestore().collection("tasks").add({
      title: this.task_title,
      description:this.task_desc,
      timeRange:this.task_timeRange,
      date: new Date (this.task_date),
      status:"incomplete",
      //owner:this.task_owner,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then((docRef) =>
    {
      this.toastCtrl.create({
        message:"Task has been addes!",
        duration:2000
      }).then((toast) =>{
        toast.present();
        this.navCtrl.back();
        
      })
    }).catch((err)=> {
      this.toastCtrl.create({
        message: err.message,
        duration:2000
      }).then((toast) =>{
        toast.present();
      })
    })
  }

}
