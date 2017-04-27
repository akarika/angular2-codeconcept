import {
  CommonModule
} from '@angular/common';
import {
  NgModule
} from '@angular/core';
import {
  HikeLisComponent
} from './hike-list.component';
import{HikeService} from './hike.service';
import{HikeDetailsComponent} from './hike-details.component';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HikeFilterPipe} from './hike-filter.pipe';
import {HikeSummaryComponent} from './hike-summary.component'
@NgModule({
  declarations: [HikeSummaryComponent,HikeLisComponent,HikeDetailsComponent,HikeFilterPipe], //déclare tout les componenet qui appartienne a ce module
  imports: [CommonModule,RouterModule,FormsModule],//declare les modules
  providers: [HikeService], //les services
  exports: []

})

export class HikeModule {

}
