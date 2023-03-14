import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../newrecipe/newrecipe';

@Component({
  selector: 'cook-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe!: Recipe;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const recipeId = +this.route.snapshot.params['id'];
    const recipesString = localStorage.getItem('recipes');
    if (recipesString) {
      const recipes: Recipe[] = JSON.parse(recipesString);
      this.recipe = recipes.find((r) => r.id === recipeId)!;
    }
  }
}
