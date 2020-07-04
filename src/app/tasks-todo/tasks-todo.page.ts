import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
import *as firebase from 'firebase';

@Component({
  selector: 'app-tasks-todo',
  templateUrl: './tasks-todo.page.html',
  styleUrls: ['./tasks-todo.page.scss'],
})
export class TasksTodoPage implements OnInit {

  userId : string;
  tasks :any[] = [];

  constructor(private toastCtrl: ToastController, private navCtrl : NavController,) { 
       // this.task_owner =firebase.auth().currentUser.uid;
       this.getTasks();

  }


  ngOnInit() {
  }

  getTasks(){
    firebase.firestore().collection("tasks").where("status","==","incomplete")
    .onSnapshot((querySnapshot)=>{
      this.tasks=querySnapshot.docs;
    });
    //.get();
    //.where("owner","==",this.userId)
    
  }
 
  gotoAddTask(){
    this.navCtrl.navigateBack(['/addtask']);

  }
  deleteTask(index){
    //firebase.firestore().collection("tasks").doc(index).delete();
    this.tasks.splice(index, 1);
   
  }
  markCompleted(document :firebase.firestore.QueryDocumentSnapshot)
  {
    firebase.firestore().collection("tasks").doc(document.id).set({
      "status":"completed"
    },{
      merge:true
    }).then(()=>{
      this.toastCtrl.create({
        message:"Task item marked as completed!",
        duration:2000
      }).then((toast) => {
        toast.present();
      })
    })
  }
  logout(){
    firebase.auth().signOut().then(() =>{
      this.navCtrl.navigateRoot("/login");
    }).catch((err) => {
        console.log(err)
      })
  
  }
    

}
