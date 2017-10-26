import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {

  title:string;
  //calendar_obj:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public calendar: Calendar) {
  this.title = "Calender";
  //this.title = (navParams.get('page_obj').title)?navParams.get('page_obj').title:"calender";
  this.calendar.createCalendar('MyCalendar').then(
  (msg) => { console.log(msg); },
  (err) => { console.log(err); }
);

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
