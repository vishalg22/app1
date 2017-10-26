import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Media page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-media',
  templateUrl: 'media.html'
})
export class MediaPage {
	

  title:string;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = navParams.get('page_obj').title;
  console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MediaPage');
  }

}
