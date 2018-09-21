import { Injectable } from '@angular/core';
import { Produto } from './produto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private produtosUrl = 'api/produtos';  // URL to web api

  constructor( private http: HttpClient) { }
  /** GET heroes from the server */
getProdutos (): Observable<Produto[]> {
  return this.http.get<Produto[]>(this.produtosUrl)
}

}
