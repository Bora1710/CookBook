import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewRecipeComponent } from './newrecipe/newrecipe.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newrecipe', component: NewRecipeComponent },
  { path: 'recipes/:id', component: RecipeComponent }, //TODO: Mora da se rutira po id-u (/:id)  reseno:bora solo
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
