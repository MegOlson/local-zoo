import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Zoo } from './zoo.model';


@Component({
  selector: 'add-animal',
  template: `
  <h2>New Animal</h2>
    <form class="form-group">
      <label for="newSpecies">Species:</label>
      <input type="text" #newSpecies name="newSpecies" class="form-control">

      <label for="newName">Name:</label>
      <input type="text" #newName name="newName" class="form-control">

      <label for="newAge">Age:</label>
      <input type="number" #newAge name="newAge" class="form-control">

      <label for="newDiet">Diet:</label>
      <input type="text" #newDiet name="newDiet" class="form-control">

      <label for="newLocation">Location:</label>
      <input type="text" #newLocation name="newLocation" class="form-control">

      <label for="newCaretakers">Caretakers:</label>
      <input type="number" #newCaretakers name="newCaretakers" class="form-control">

      <label for="newSex">Sex:</label>
      <input type="text" #newSex name="newSex" class="form-control">

      <label for="newLikes">Likes:</label>
      <input type="text" #newLikes name="newLikes" class="form-control">

      <label for="newDislikes">Dislikes:</label>
      <input type="text" #newDislikes name="newDislikes" class="form-control">

      <button type="button" class="btn" (click)="addAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value = ''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';" id="addAnimal">Add</button>
  </form>
  `,
  styles: [`
    h2 {
      text-align: center;
    }
    .form-group {
      width: 50%;
      margin-left: auto;
      margin-right: auto;
    }
`]
})

export class AddAnimalComponent {
  @Output() clickSender = new EventEmitter();

  addAnimal (species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    let newAnimal: Zoo = new Zoo(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.clickSender.emit(newAnimal);
  }
}
