import { Component, OnInit } from '@angular/core';
import { Recipe } from '../newrecipe/newrecipe';
import { Router } from '@angular/router';

@Component({
  selector: 'cook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];

  currentPage = 0;
  itemsPerPage = 5;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let recipesString = localStorage.getItem('recipes');
    if (recipesString) {
      this.recipes = JSON.parse(recipesString);
    }
  }

  updatePage(event: any) {
    this.currentPage = event.pageIndex;
  }

  goToRecipe(recipeId: number) {
    this.router.navigate(['/recipes', recipeId]);
  }

  removeRecipe(recipeId: number, event: Event): void {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      let recipes: string = localStorage.getItem('recipes') || '';
      if (recipes) {
        let newRecipes = JSON.parse(recipes).filter(
          (recipe: Recipe) => recipe.id !== recipeId
        );
        localStorage.setItem('recipes', JSON.stringify(newRecipes));
      }
    }
    event.stopPropagation();
  }

  // ...
}
//TODO: ucitati sve recepte iz localStorage-a na ngOnInit [DONE]
