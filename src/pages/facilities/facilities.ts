import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Facilities page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-facilities',
  templateUrl: 'facilities.html'
})
export class FacilitiesPage {

  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = navParams.get('page_obj').title;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacilitiesPage');
  }

}
