import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdottoModel } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  private http = inject(HttpClient)
  private url = 'https://fantastic-barnacle-77r6pv5vvvwghw5xv-5000.app.github.dev/';

  getProdotti(): Observable<ProdottoModel[]> {
    return this.http.get<ProdottoModel[]>(this.url + 'api/prodotti');
  }
  getProdotto(prodotto_id: number): Observable<ProdottoModel> {
    return this.http.get<ProdottoModel>(this.url + `api/prodotti/${prodotto_id}`);
  }

}
