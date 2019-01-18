import { Injectable } from '@angular/core';
import { Cocktail } from '../models/cocktail.model';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../models/ingredient.model';

@Injectable()
export class CocktailService {
  public cocktails: BehaviorSubject<Cocktail[]> = new BehaviorSubject([
    new Cocktail(
      'Mojito',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/MojitoReydelmojito.jpg/220px-MojitoReydelmojito.jpg',
      'Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint.',
      [
        new Ingredient('perrier', 1),
        new Ingredient('citron', 2),
        new Ingredient('sucre', 3),
      ]),
    new Cocktail(
      'Margarita',
      'http://cdn.liquor.com/wp-content/uploads/2016/11/16132003/margarita-rocks-salt-720sq.jpg',
      'A margarita is a cocktail consisting of triple sec, tequila and lime or lemon juice, often served with salt or sugar on the rim of the glass. The drink is served shaken with ice, blended with ice, or without ice.',
      [
        new Ingredient('tequila', 1),
        new Ingredient('lemon', 2),
        new Ingredient('sel', 2),
      ]),
    new Cocktail(
      'Sour',
      'http://cdn.liquor.com/wp-content/uploads/2009/11/italian-grape-sour.jpg',
      'A sour is a traditional family of mixed drinks. Common examples of sours are the margarita and the sidecar. Sours belong to one of the old families of original cocktails and are described by Jerry Thomas in his 1862 book How to Mix Drinks.',
      [
        new Ingredient('perrier', 1),
        new Ingredient('jus de fraise', 1),
      ])
  ])

  public cocktail: BehaviorSubject<Cocktail> = new BehaviorSubject(this.cocktails.value[0])

  selectCocktail(index: number): void{
    this.cocktail.next(this.cocktails.value[index]);
  }

  constructor() { }

}
