import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe } from './newrecipe';
import { Router } from '@angular/router';

@Component({
  selector: 'cook-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css'],
})
export class NewRecipeComponent {
  constructor(private router: Router) {}
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
    this.router.navigate(['/']);
  }
}
/*
    4. rutirati nazad na home page  [DONE]
    .... izlistavanje na home ?   [DONE al je lose]
*/
