import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Homework provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HomeworkService {

  data:any;
  hwork:any;

  constructor(public http: Http) {
    console.log('Hello Homework Provider');
  }

  load(){
		  /*if (this.data) {
			// already loaded data
			return Promise.resolve(this.data);
		  }*/

		  /* var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
		  // don't have the data yet
		  return new Promise(resolve => {

			this.http.get(url)
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.data = data;
				resolve(this.data);
			  });
		  });*/
      return new Promise(resolve=>{
      this.http.get("../assets/data/homework.json")
			  .map(res => res.json())
			  .subscribe(data => {
				// we've got back the raw data, now generate the core schedule data
				// and save the data for later reference
				this.hwork = data.data;
				resolve(this.hwork);
			  });
		  });

	}

}
