import { Component, OnInit } from '@angular/core';
import { Recipe } from '../newrecipe/newrecipe';

@Component({
  selector: 'cook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];

  goToRecipe () {
    window.location.href = "/recipes/";
}
  


  ngOnInit(): void {
    const recipesString = localStorage.getItem('recipes');
    if (recipesString) {
      this.recipes = JSON.parse(recipesString);
    }
  }

  // ...
}
//TODO: ucitati sve recepte iz localStorage-a na ngOnInit [DONE]
