import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Users} from '../../providers/users';


/*
  Generated class for the Teachers page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teachers',
  templateUrl: 'teachers.html'
})
export class TeachersPage {

  title:string;
  teachers:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public usersService: Users) {

  this.title = navParams.get('page_obj').title;

  this.usersService.getTeachers(navParams.get('class')).then(data =>{
	console.log(data);
		this.teachers = data;
//		this.loading.dismiss();

	});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachersPage');
  }

}
