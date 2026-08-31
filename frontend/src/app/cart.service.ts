import { Injectable } from '@angular/core';
import { ProdottoModel } from './models/models';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: ProdottoModel[] = [];

  getCart():ProdottoModel[] {
    return this.cart;
  }
  addToCart(prodotti: ProdottoModel) :void {
    this.cart.push(prodotti);
  }
  totalPrice(): number {
    return this.cart.reduce((total, prodotto) => total + prodotto.prezzo, 0);
  }
  clearCart(): void {
    this.cart = [];
  }



}
