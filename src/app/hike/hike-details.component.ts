import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'selector',
  templateUrl: 'hike-details.component.html'
})
export class HikeDetailsComponent implements OnInit {
  title: string;
  //ActivatedRoute permet de récupere paramétre
  constructor(private _route: ActivatedRoute, private _router: Router) {

  }

  ngOnInit() {

    //récupére le paramétres dela vu détailler qu on doit afficher

    let id = this._route.snapshot.params['id'] //on veut récupérer le params id
    this.title = `Détails de la randonnée ${id}`;
  }

  goBack() {
    this._router.navigate(['/hikes'])
  }
}
