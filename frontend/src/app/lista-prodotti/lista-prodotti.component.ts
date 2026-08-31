import { Component, inject, OnInit } from '@angular/core';
import { ProdottoModel } from '../models/models';
import { CartService } from '../cart.service';
import { ProdottoService } from '../prodotto.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-lista-prodotti',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lista-prodotti.component.html',
  styleUrl: './lista-prodotti.component.css'
})
export class ListaProdottiComponent implements OnInit {
  private cartService = inject(CartService);
  private prodottoService = inject(ProdottoService);
  caricamento = true;
  prodotti: ProdottoModel[]=[];
  ngOnInit(): void {
    this.prodottoService.getProdotti().subscribe({
      next: (data:ProdottoModel[]) => {
        this.prodotti = data;
        this.caricamento=false;
      },
      error: (err: any) => {
        console.error('Errore durante il recupero dei dati:', err);
        this.caricamento = false;
      }

    });
  }
  aggiungiAlCarrello(prodotto: ProdottoModel) : void{
    console.log('prodotto aggiunto al carrello:', prodotto);
    this.cartService.addToCart(prodotto);
  }




}
