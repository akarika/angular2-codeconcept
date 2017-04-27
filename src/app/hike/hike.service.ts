import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Hike } from './hike';
@Injectable()
export class HikeService {
   
   constructor(private http: Http) {

   }
   
  
        

getHikesFromAPI() {
    return this.http.get('app/api/hike.json')//requete http creation observable
    .do(x => console.log(x))//do permet aide a debugger
    .map(hikes => hikes.json());//map pour renvoyer format !json
}

//getHikes(){
 //   return this.hikes;
//}

}
