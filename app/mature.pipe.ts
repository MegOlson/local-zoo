import { Pipe, PipeTransform } from '@angular/core';
import { Zoo } from './zoo.model';

@Pipe({
  name: "mature",
  pure: false
})

export class MaturePipe implements PipeTransform {
  transform(input: Zoo[]) {
    let output: Zoo[] = [];
    for (let i = 0; i < input.length; i++){
      if(input[i].age > 2){
        output.push(input[i]);
      }
    }
    return output;
  }
}
