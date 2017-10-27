import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';


@Component({
  selector: 'animal-list',
  template: `
  <h2>Animals:</h2>
  <ul>
    <li *ngFor="let eachAnimal of childAnimalList">
      <h3>{{eachAnimal.name}} the {{eachAnimal.species}}</h3>
      <button type="button" class="btn" (click)="editButtonHasBeenClicked(eachAnimal)" id="editAnimal">Details/Edit</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Zoo;
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(aniamlToEdit: Zoo) {
    this.clickSender.emit(aniamlToEdit);
  }

}
