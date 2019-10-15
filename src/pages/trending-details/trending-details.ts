import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TrendingDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trending-details',
  templateUrl: 'trending-details.html',
})
export class TrendingDetailsPage {
  itemDetails: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemDetails = navParams.get("data");
  }

  ionViewDidLoad() {
  }

}
