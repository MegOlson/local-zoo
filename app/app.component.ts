import { Component } from '@angular/core';
import { Zoo } from './zoo.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html',
  styles: [`
    .navbar-buttons {
      margin-top: 30px;
      float: right;
    }
  `]
})

export class AppComponent {
  displayAnimals: boolean = false;
  animalForm: boolean = false;
  selectedAnimal = null;
  youngAnimalList: boolean = false;
  matureAnimalList: boolean = false;
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

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  doneEditing() {
    this.selectedAnimal = null;
  }

  showAnimals() {
    this.matureAnimalList = false;
    this.youngAnimalList = false;
    this.animalForm = false;
    if(this.displayAnimals) {
      this.displayAnimals = false;
    } else {
      this.displayAnimals = true;
    }
  }

  showAddForm() {
    this.displayAnimals = false;
    this.matureAnimalList = false;
    this.youngAnimalList = false;
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

  showYoungAnimals() {
    this.animalForm = false;
    this.displayAnimals = false;
    this.matureAnimalList = false;
    if(this.youngAnimalList) {
      this.youngAnimalList = false;
    } else {
      this.youngAnimalList = true;
    }
  }

  showMatureAnimals() {
    this.animalForm = false;
    this.displayAnimals = false;
    this.youngAnimalList = false;
    if(this.matureAnimalList) {
      this.matureAnimalList = false;
    } else {
      this.matureAnimalList = true;
    }
  }


}
