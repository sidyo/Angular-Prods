import { Injectable } from '@angular/core';
import { CarrinhoComponent } from './carrinho/carrinho.component';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinho: CarrinhoComponent = null;

  constructor() { }
  sendCarrinho(c:CarrinhoComponent){
    this.carrinho = c;
  }
  getCarrinho():CarrinhoComponent{
    return this.carrinho;
  }
}
