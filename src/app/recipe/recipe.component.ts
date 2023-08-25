import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../newrecipe/newrecipe';

@Component({
  selector: 'cook-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe: Recipe = new Recipe({});

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let recipeId = 0;
    this.route.params.subscribe((params) => {
      recipeId = +params['id'];
    }); // TODO: koristi subscribe na promenu rute i odatle uzimati ID  DONE
    let recipesString = localStorage.getItem('recipes');
    if (recipesString) {
      let recipes: Recipe[] = JSON.parse(recipesString);
      this.recipe = recipes.find((r) => r.id === recipeId) as Recipe;
    }
  }
}
