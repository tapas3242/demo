import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrendingDetailsPage } from './trending-details';

@NgModule({
  declarations: [
    TrendingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrendingDetailsPage),
  ],
})
export class TrendingDetailsPageModule {}
