import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {MapComponent} from './map.component';
import {MapService} from './map.service';
@NgModule({
    imports: [
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCoNQH4u2Xa4XMY1UpeqI1vkNA3F8b2-XM'
        })
    ],
    exports: [],
    declarations: [MapComponent],
    providers: [MapService],
})
export class MapModule { }
