export class Recipe {
  name: string;
  photo: string;
  ingredientes: string[];
  howTo: string;

  constructor(
    name: string,
    photo: string,
    ingredientes: string[],
    howTo: string
  ) {
    this.name = name;
    this.photo = photo;
    this.ingredientes = ingredientes;
    this.howTo = howTo;
  }
}
