import { Component } from '@angular/core';
import {Hike} from './hike';
import {HikeService} from './hike.service';
import {RouterModule} from '@angular/router';
import {HikeFilterPipe} from './hike-filter.pipe';
import {HikeSummaryComponent} from './hike-summary.component';

@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl: 'hike-list.component.html',
    //styleUrls: ['./name.component.css']
})

//    <!-- DATA BING [()] ,() template a controller , [] de controller a la vue ,[()] combinaison  Le two way binding -->

export class HikeLisComponent {

    hikes: Hike[];

    searchTerm: string;

   constructor( private hikeservice: HikeService) {
    

  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.hikeservice.getHikesFromAPI()
    .subscribe(//on doit s abonner a l observable pour récupérer réponse
            res => this.hikes = res,
            error => console.error(error.status)
            
            );


console.log(this.hikes);
  }

  addToMyTodoHike(hikeToAdd: Hike){
    console.log(`Hike ${hikeToAdd.name} ajoutée`);
  }
}