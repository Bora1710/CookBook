// export interface IRecipe {
//   name: string;
//   photo: string;
//   ingredients: string[];
//   howTo: string;
// }
// export class Recipe implements IRecipe {
//   name: string;
//   photo: string;
//   ingredients: string[];
//   howTo: string;

//   constructor(recipe: IRecipe) {
//     this.name = recipe.name || null;
//     this.photo = recipe.photo || null;
//     this.ingredients = recipe.ingredients || [];
//     this.howTo = recipe.howTo || null;
//   }
// }

export class Recipe {
  id: number;
  name: string;
  photo: string;
  ingredients: string[];
  howTo: string;

  constructor(obj: any) {
    this.id = 1;
    this.name = (obj && obj.name) || '';
    this.photo = (obj && obj.photo) || '';
    this.ingredients = (obj && obj.ingredients) || [];
    this.howTo = (obj && obj.howTo) || '';
  }
}
