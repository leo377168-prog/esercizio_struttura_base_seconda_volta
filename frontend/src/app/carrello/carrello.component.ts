import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service'; 
import { ProdottoModel } from '../models/models';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrello.component.html'
})
export class CarrelloComponent {
  private cartService = inject(CartService);

  // Getter per accedere facilmente all'array del servizio
  get items(): ProdottoModel[] {
    return this.cartService.getCart();
  }

  get totale(): number {
    return this.cartService.totalPrice();
  }

  svuota(): void {
    this.cartService.clearCart();
  }
}