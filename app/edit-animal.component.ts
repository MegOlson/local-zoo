import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';


@Component({
  selector: 'edit-animal',
  template: `
    <div class="details">
      <h3>{{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}:</h3>
      <p>Age: {{childSelectedAnimal.age}}</p>
      <p>Diet: {{childSelectedAnimal.diet}}</p>
      <p>Location: {{childSelectedAnimal.location}}</p>
      <p>Caretakers: {{childSelectedAnimal.caretakers}}</p>
      <p>Sex: {{childSelectedAnimal.sex}}</p>
      <p>Likes: {{childSelectedAnimal.likes}}</p>
      <p>Dislikes: {{childSelectedAnimal.dislikes}}</p>
      <h3>Edit:</h3>
    </div>
    <form class="form-group">
      <label for="editName">Name:</label>
      <input type="text" [(ngModel)]="childSelectedAnimal.name" name="editName" class="form-control">

      <label for="editAge">Age:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.age" name="editAge" class="form-control">

      <label for="editCaretakers">Caretakers:</label>
      <input type="number" [(ngModel)]="childSelectedAnimal.caretakers" name="editCaretakers" class="form-control">
      <button type="button" class="btn" (click)="doneButtonHasBeenClicked()" id="doneEditing">Done</button>
    </form>
  `,
  styles: [`
    .details {
      text-align: center;
    }
    button {
      margin-top: 5px;
    }
    .form-group {
      width: 30%;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Zoo;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonHasBeenClicked() {
    this.doneButtonClickedSender.emit();
  }

}
