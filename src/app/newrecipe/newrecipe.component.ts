import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe } from './newrecipe';

@Component({
  selector: 'cook-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css'],
})
export class NewRecipeComponent {
  recipeForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    photo: new FormControl<string>('', Validators.required),
    ingredients: new FormControl<string[]>([], Validators.required),
    howTo: new FormControl<string>('', Validators.required),
  });

  confirm() {
    let formValue = this.recipeForm.value as Recipe;
    let recipe = new Recipe(
      formValue.name,
      formValue.photo,
      formValue.ingredientes,
      formValue.howTo
    );
  }
}
/*pronaci kako se ubacuju tipovi za formcontrole  [] as done element
    2. dobaviti sve recepte iz local storage-a, konkatenirati recept sa 22 linije,
    3. snimiti updateovan array u local storage-u
    4. rutirati nazad na home page 
    .... izlistavanje na home ? */
