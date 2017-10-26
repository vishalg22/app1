import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AddnoticePage} from '../addnotice/addnotice';
import {NoticePage} from '../notice/notice';
import {NoticesService} from '../../providers/notices-service';


/*
  Generated class for the Notices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notices',
  templateUrl: 'notices.html',
  providers: [NoticesService]

})
export class NoticesPage {

  title:string;
  items:any;
  notices:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public noticesService: NoticesService)
  {
	this.title = "Notice";
	this.loadNotices();
  }
  
  addNotice()
  {
	this.navCtrl.push(AddnoticePage);
  }
  
  //get notices data
  loadNotices(){
   //console.log("vis");

  this.noticesService.load()
  .then(data => {
 
	//Typescript to calculate object length
	//Object.keys(ndata).length
	
	if(Object.keys(data).length > 0)
	{
	
    this.items = data;
    this.notices = this.items.data;
    
    //this.loading.dismiss();
    
    console.log(this.items.data);       
    
    }
    else
    {
		this.items = [];
    }
    
	});
	
	}
  
  showNotice(nid)
  {
	console.log(nid);
	this.navCtrl.push(NoticePage,{notice_id:nid});	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticesPage');
  }

}
