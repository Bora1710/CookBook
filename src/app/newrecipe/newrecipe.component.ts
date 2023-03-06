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
    let recipe = new Recipe(this.recipeForm.value);
    let recipes: string = localStorage.getItem('recipes') || '';
    if (!recipes) {
      recipes = JSON.stringify([]);
    }

    let newRecipes = JSON.parse(recipes);

    if (newRecipes[newRecipes.length - 1]) {
      recipe.id = newRecipes[newRecipes.length - 1].id + 1;
    }

    newRecipes.push(recipe);
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
  }
}
/*
    4. rutirati nazad na home page 
    .... izlistavanje na home ? 
*/
