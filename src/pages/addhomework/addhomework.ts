import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Addhomework page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-addhomework',
  templateUrl: 'addhomework.html'
})
export class AddhomeworkPage {
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
		this.title = "Add Homework";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddhomeworkPage');
  }

}
