import { Component } from '@angular/core';
import { LoadingController,NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {Users} from '../../providers/users';

//import { RegisterPage } from '../register/register';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  logincrd = {username:"",password:""};
  type : any;
  loading:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,public navParams: NavParams, 
  public storage: Storage, public usersService: Users) 
  {
   this.loading = this.loadingCtrl.create({

   });
   
   storage.ready().then(() => {
		let user1 = {name:"vishal",password:"abcd",type:"A"};
		let user2 = {name:"basant",password:"abcd",type:"B"};
       // set a key/value
       storage.set('vishal', user1);
       storage.set('basant', user2);

       // Or to get a key/value pair
       
     });
     
     
  
  }
  
  createAccount() {
    //this.navCtrl.push(RegisterPage);
  }
  
  login(ldt)
  {
    console.log(ldt);
    this.loading.present();
    
    this.usersService.login_user(ldt.username,ldt.password).then(data => {
        
        console.log(data); 
         
       });
    
    /*this.storage.get(ldt.username).then((val) => {
         
         this.type = val.type;
         console.log(this.type);
         this.storage.set("login",val.name);
       });*/
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
