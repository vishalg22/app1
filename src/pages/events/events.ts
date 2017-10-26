import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Events page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  title:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  this.title = navParams.get('page_obj').title; 
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

}
