import {Ingredient} from "../ingredient/ingredient.model";
export class Recipe {
  constructor(
    public result: Ingredient,
    public ingredients: Ingredient[]
  ) { }
}
/*

{
  'result': {
    'id': 373,
    'nom': 'Potion de vision nocturne',
    'description': "Éclaircit visuellement l'environnement et rend l'eau plus transparente.",
    'css': {
        'backgroundPositionX': '-32',
        'backgroundPositionY': '-1088'
    }
  },
  'ingredients': [
    {
      'id': 396,
    },
    {
      'id': 373
    }
  ]
}*/
