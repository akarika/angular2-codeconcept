import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Hike
} from './hike';


@Component({
  moduleId: module.id,
  selector: 'hike-summary',
  templateUrl: 'hike-summary.component.html',
  styleUrls: ['hike-summary.css']
  // styles:['a {text-decoration:none} a:hover{ color:#999}']
  
})

export class HikeSummaryComponent implements OnInit {
  @Input() h: Hike;
  @Output() addHikeAsFavorite = new EventEmitter < Hike > (true);

  toggleAsTodoHike(isAdded: any) {
    console.log(this);
    if (isAdded) {
      this.addHikeAsFavorite.emit(this.h)
    }
  }

  constructor() {}

  ngOnInit() {}
}
