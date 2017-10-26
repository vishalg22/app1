import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Addnotice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addnotice',
  templateUrl: 'addnotice.html'
})
export class AddnoticePage {
	
  title:string;	
  class_name:any;	
  division:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = "Add Notice";
  this.class_name = 1;
  this.division = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnoticePage');
  }

}
