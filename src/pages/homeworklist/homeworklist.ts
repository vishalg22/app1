import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomeworkPage} from '../homework/homework';
import {HomeworkService} from '../../providers/homework-service';

//import {AddhomeworkPage} from '../addhomework/addhomework';

/*
  Generated class for the Homeworklist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-homeworklist',
  templateUrl: 'homeworklist.html'
})
export class HomeworklistPage {
  title:string;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private homeWork: HomeworkService)
  {
	this.title = "Homework List";
  this.items = [];

  this.homeWork.load().then(hwork=>{

    this.items = hwork;
    console.log(this.items);

  });

  }

  getHomework()
  {
	this.navCtrl.push(HomeworkPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeworklistPage');
  }

}
