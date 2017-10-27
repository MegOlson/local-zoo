import { Pipe, PipeTransform } from '@angular/core';
import { Zoo } from './zoo.model';

@Pipe({
  name: "young",
  pure: false
})

export class YoungPipe implements PipeTransform {
  transform(input: Zoo[]) {
    let output: Zoo[] = [];
    for (let i = 0; i < input.length; i++){
      if(input[i].age <= 2){
        output.push(input[i]);
      }
    }
    return output;
  }
}
