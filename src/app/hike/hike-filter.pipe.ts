
import { Pipe, PipeTransform } from '@angular/core';
import {Hike} from './hike';
@Pipe({
    name: 'hikeFilter'
})
export class HikeFilterPipe implements PipeTransform {
  transform(value: Hike[], searchTerm = ''): any {
    if (searchTerm !== '') {
        let result = value.filter((hike: Hike) => 
        hike.description.toLocaleLowerCase().includes(searchTerm)
        || hike.name.toLocaleLowerCase().includes(searchTerm));
        return result;
} else {
      return value;
    }
  }
}
