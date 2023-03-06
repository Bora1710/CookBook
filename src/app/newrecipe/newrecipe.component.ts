import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Recipe } from './newrecipe';

@Component({
  selector: 'cook-new-recipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css'],
})
export class NewRecipeComponent {
  recipeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required),
    ingredients: new FormControl([], Validators.required),
    howTo: new FormControl('', Validators.required),
  });

  confirm() {
    let formValue = this.recipeForm.value;
    let recipe = new Recipe(
      formValue.name,
      formValue.photo,
      formValue.ingredients,
      formValue.howTo
    );
    /*pronaci kako se ubacuju tipovi za formcontrole
    2. dobaviti sve recepte iz local storage-a, konkatenirati recept sa 22 linije,
    3. snimiti updateovan array u local storage-u
    4. rutirati nazad na home page 
    .... izlistavanje na home ?*/
  }
}
