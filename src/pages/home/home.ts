import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestApiProvider } from '../../providers/test-api/test-api';
import { ModalController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  trending_data = [];
  limit = 25;
  offset = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public service: TestApiProvider,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.trending(this.limit, this.offset);
  }

  trending(limit, offset){
    this.service.LoadingPresent();
    this.service.trending_data(limit, offset).then(res=>{ 
      let res_data:any = res;
      
      res_data.data.forEach(element => {
        this.trending_data.push(element);
      });
      this.service.LoadingDissmiss();
    }).catch(e=>{
      this.service.LoadingDissmiss();
    });
  }

  doInfinite(infiniteScroll) {
     
    this.offset += 25;
    this.trending(this.limit, this.offset);
    setTimeout(() => { 
      infiniteScroll.complete();
    }, 500);
  }

  itemDetails(item){
    console.log(item);
    this.navCtrl.push("TrendingDetailsPage",{data: item});
  }

  getItems(ev: any){
   
    const val = ev.target.value;
    if (val && val.trim() != '') {
      this.trending_data = this.trending_data.filter((item) => {
        return (item.title.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    }else{
       this.trending(this.limit, this.offset);
    }
  }

  openModal(){
    const modal = this.modalCtrl.create("TestsPage");
    modal.present();
  }

}
