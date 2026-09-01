import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdottoService } from '../prodotto.service';
import { ProdottoModel } from '../models/models';
import { CartService } from '../cart.service'; 
@Component({
  selector: 'app-dettaglio-prodotti',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dettaglio-prodotti.component.html'
})
export class DettaglioProdottiComponent implements OnInit {
  prodotto?: ProdottoModel;
  caricamento = true;

  private route = inject(ActivatedRoute);
  private prodottoService = inject(ProdottoService);
  private cartService = inject(CartService);

  ngOnInit(): void {
    // Recupero l'ID dall'URL
    const id = Number(this.route.snapshot.paramMap.get('id')); // Converti l'ID in numero

    if (id) {
      this.prodottoService.getProdotto(id).subscribe({
        next: (data: ProdottoModel) => {
          this.prodotto = data;
          this.caricamento = false;
        },
        error: () => this.caricamento = false
      });
    }
  }

  aggiungiAlCarrello(): void {
    if (this.prodotto) {
      this.cartService.addToCart(this.prodotto);
    }
  }
}