import { Component } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';

import {EventsPage} from '../events/events';
//import {HomeworkPage} from '../homework/homework';
import {HomeworklistPage} from '../homeworklist/homeworklist';

import {FacilitiesPage} from '../facilities/facilities';
import {TeachersPage} from '../teachers/teachers';
import {MediaPage} from '../media/media';
import {SchedulePage} from '../schedule/schedule';
import {StudentsPage} from '../students/students';

import {Comman} from '../../providers/comman';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  //image_thumb:string;
 data: any;

 homework : any;
 media : any;
 schedule : any;
 teachers : any;
 facilities : any;
 events : any;
 students : any;

 constructor(public navCtrl: NavController, public navParams: NavParams, public nav:Nav, public common:Comman) {

  //this.image_thumb = "http://pmcelectioninfo.weppsol.com/images/stories/thumbs/ward_1.png";
  this.homework = {title:"Homework",component:HomeworklistPage};
  this.media = {title:"Media",component:MediaPage};
  this.schedule = {title:"Schedule",component:SchedulePage};
  this.teachers = {title:"Teachers",component:TeachersPage};
  this.events = {title:"Events",component:EventsPage};
  this.facilities = {title:"Facilities",component:FacilitiesPage};
  this.students = {title:"Students",component:StudentsPage};

  //common.getDashboard().then(data=>this.ddata = data);
  this.common.getDashboard().then(dash=>{

    if(Object.keys(dash).length > 0)
  	{
      this.data = dash;
console.log(this.data);

      //this.loading.dismiss();
      this.homework.image = this.data.homework[0].image;
      this.media.image = this.data.media[0].image;
      this.schedule.image = this.data.schedule[0].image;
      this.teachers.image = this.data.teachers[0].image;
      this.facilities.image = this.data.facilities[0].image;
      this.students.image = this.data.students[0].image;
      this.events.image = this.data.events[0].image;


      console.log(this.homework);

      }
      else
      {
  		this.data = [];
    }

  });

 // console.log(this.data);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }


  openPage(page)
  {
	this.navCtrl.push(page.component,{page_obj:page});
  }
}
