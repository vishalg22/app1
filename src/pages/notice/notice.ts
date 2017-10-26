import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NoticesService} from '../../providers/notices-service';


/*
  Generated class for the Notice page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
  providers: [NoticesService]

})
export class NoticePage {
  
  notice_id : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public noticesService: NoticesService) {
		
		this.notice_id = this.navParams.get('notice_id');
		this.loadNotice();
  }
  
  loadNotice()
  {
 	console.log(this.notice_id);

	 this.noticesService.load()
  .then(data => {
  
  
  
  });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoticePage');
  }

}
