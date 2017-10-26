import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the Comman provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Comman {

	data:any;
	dash : any;
  dashboard_obs : any;

  constructor(public http: Http) {

		//	console.log(this.headers);

		//console.log('Hello Comman Provider');
		/*this.dash = Observable.create(observer => {
      this.dashboard_obs = observer;
    });*/

  }

  load(){
		  /*if (this.data) {
			// already loaded data
			return Promise.resolve(this.data);
		  }*/
		  var url = "http://preschool.weppsol.com/index.php?option=com_api&app=articles&resource=article&format=raw&category_id=8";
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
		  });
	}

	//get dashboard data
  getDashboard(){
		// console.log("in get dash call");
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(resolve => {

				this.http.get("http://preschool.weppsol.com/media/json_data/dashboard.json",{"headers":headers})
					.map(res => res.json())
					.subscribe(data => {
					// and save the data for later reference
					this.dash = data.data;
					resolve(this.dash);
					});
				});

	/*return new Promise(resolve => {
		         this.http.get('../assets/data/dashboard.json').map(response => {
		             this.data = response.json();

								 console.log(this.data);
		             resolve(this.data);
		         });
		     });*/


		}




 	/*
	getDashboard():Observable<any>{



		return this.http.get("../assets/data/dashboard.json")
		.map(res => res.json());
	}
	*/

}
