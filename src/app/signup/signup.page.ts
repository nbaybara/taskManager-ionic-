import { Component, OnInit } from '@angular/core';
import {ToastController, NavController} from '@ionic/angular';
import * as firebase from 'firebase'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})


export class SignupPage implements OnInit {  

  email: string;
  password: string;
  constructor(private toastCtrl: ToastController, private navCtrl : NavController) { }
  
  ngOnInit() {
  }

  signup(){
  firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
    (userData) => {
      console.log(userData);

    }).catch((err) => {

      this.toastCtrl.create({
        message: err.message,
        duration : 3000
      }).then((toast) =>{

        toast.present();
      
      })
    })
  }

  goLogin(){
  }
  
}