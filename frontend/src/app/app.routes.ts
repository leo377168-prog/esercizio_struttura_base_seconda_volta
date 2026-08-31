import { Routes } from '@angular/router';
import { ListaProdottiComponent } from './lista-prodotti/lista-prodotti.component';
import { DettaglioProdottiComponent } from './dettaglio-prodotti/dettaglio-prodotti.component';
import { CarrelloComponent } from './carrello/carrello.component';
export const routes: Routes = [
    {path:'', component:ListaProdottiComponent},
    {path:'dettaglio/:id', component:DettaglioProdottiComponent},
    {path:'carrello', component:CarrelloComponent}
];
