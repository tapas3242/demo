import {Http} from '@angular/http'; 
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the TestApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestApiProvider {
  domain = "https://api.giphy.com/v1/gifs/trending?api_key=2k8qIGNESgEJ9Yu9OpGAI19TFjbNZHah";
  loader:any;

  constructor(public http: Http,public loadingCtrl: LoadingController) {
    console.log('Hello TestApiProvider Provider');
  }

  LoadingPresent(){

    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();

  }

  LoadingDissmiss(){
    this.loader.dismiss();
  }

  trending_data(limit,offset) {
    var url = this.domain+"&limit="+limit+"&rating=G&offset="+offset;
    return new Promise((resolve, reject) => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
      });

  }

  
}