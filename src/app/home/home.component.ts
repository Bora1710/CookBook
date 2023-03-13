import { Component, OnInit } from '@angular/core';
import { Recipe } from '../newrecipe/newrecipe';

@Component({
  selector: 'cook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];

  goToRecipe() {
    window.location.href = '/recipes/';
  }

  ngOnInit(): void {
    const recipesString = localStorage.getItem('recipes');
    if (recipesString) {
      this.recipes = JSON.parse(recipesString);
    }
  }

  removeRecipe() {
    if (window.confirm('Are sure you want to delete this item ?')) {
      localStorage.removeItem('recipes'); //Brise sve iz local.storage i vraca se na homepage, treba namestiti da brise po id samo taj item
      window.location.href = '';
    } else {
      window.location.href = '';
    }
  }

  // ...
}
//TODO: ucitati sve recepte iz localStorage-a na ngOnInit [DONE]
