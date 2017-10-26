import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Comman} from '../../providers/comman';

/*
  Generated class for the Contactus page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html'
})
export class ContactusPage {
	
  title:string;
  introtext:string;
  cdata:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, public comman:Comman) {
  
  this.title = "About Us";
  
  this.comman.load().then(data =>{
				
		this.cdata = data['data'].results[0];
		console.log(this.cdata.title);
		//this.loading.dismiss();
		this.title = this.cdata.title;
		this.introtext = this.cdata.introtext;
		
	});  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

}
