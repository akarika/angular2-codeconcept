import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { HikeModule } from './hike/hike.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HikeLisComponent } from './hike/hike-list.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { ContactUsComponent } from './contact/contact-us.component';
import { ContactModule } from './contact/contact.module';
import { MapModule } from './map/map.module';
import { MapComponent } from './map/map.component';
@NgModule({
  imports: [BrowserModule,
    HikeModule,
    HttpModule,
    HomeModule,
    MapModule,
    ContactModule,
    // BrowserAnimationsModule,
    RouterModule.forRoot([ //permet déclarer nos routes, mettre les routes les plus spécialisé au début et les plus générale a la fin 
      {
        path: 'home',
        component: HomeComponent
      }, {
        path: 'hikes',
        component: HikeLisComponent
      }, {
        path: 'hike/:id',
        component: HikeDetailsComponent
      }, {
        path: 'contact', component: ContactUsComponent
      },{
        path: 'map',
        component: MapComponent
      }, {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' //quand il ny a pas de chemin spcésifié on redirige 'home', correspondance sur toute la route
      }, {
        path: '**',
        component: PageNotFoundComponent //tout les autres cas ces ce omponent qui gére, on est pas obligé
      }

    ])
  ],
  declarations: [AppComponent, PageNotFoundComponent],
  bootstrap: [AppComponent]
}) export class AppModule { }

