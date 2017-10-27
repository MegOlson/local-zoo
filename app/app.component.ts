import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  displayAnimals: boolean = false;
  animalForm: boolean = false;
  selectedAnimal = null;
  masterAnimalList: Zoo[] = [
    new Zoo(
      "Arctic Fox",
      "Moon",
      2,
      "Carnivore",
      "Northern Trail",
      5,
      "Female",
       "Cool shade",
      "Loud noises"
    ),
    new Zoo(
      "Ocelot",
      "Prince",
      4,
      "Carnivore",
      "Tropical Rain Forest Building",
      6,
      "Male",
      "Laying in the sunshine",
      "Toys that are not rope-based"
    ),
    new Zoo(
      "Northwest Black Tailed Deer",
      "Tinkerbell",
      8,
      "Herbivore",
      "Northern Trail",
      2,
      "Female",
      "Delicate roots and leaves",
      "Loud Noises"
    )
  ]

  showAnimals() {
    if(this.displayAnimals) {
      this.displayAnimals = false;
    } else {
      this.displayAnimals = true;
    }
  }

  showAddForm() {
    this.displayAnimals = false;
    if(this.animalForm) {
      this.animalForm = false;
    } else {
      this.animalForm = true;
    }
  }

  addAnimalChild(newAnimal: Zoo) {
    this.masterAnimalList.push(newAnimal);
    this.animalForm = false;
  }

}
