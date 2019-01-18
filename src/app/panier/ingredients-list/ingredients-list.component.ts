import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/models/ingredient.model';
import { PanierService } from '../../shared/services/panier.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
  public ingredients: Ingredient[] = [];
  public subscription: Subscription;

  constructor( private panierService: PanierService) { }

  ngOnInit() {
    this.subscription = this.panierService.panier.subscribe( (ingrs: Ingredient[]) => {
      this.ingredients = ingrs;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
