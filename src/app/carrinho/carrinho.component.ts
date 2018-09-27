import { Component, OnInit } from '@angular/core';
import { ProdutoDeCarrinho } from '../produtodecarrinho';
import { Produto } from '../produto';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  carrinho: ProdutoDeCarrinho[] = [];
  total: number = 0;

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.carrinhoService.sendCarrinho(this);
  }

  atualizarQuantidade(p: Produto, quant: number) {
    this.carrinho.forEach(prodcarrinho => {
      if (prodcarrinho.produto == p) {
        prodcarrinho.quantidade = quant;
      }
    });
    var total = 0;
    this.carrinho.forEach(prodcar => {
      total += prodcar.produto.price * prodcar.quantidade;
    });
    this.total=total;

  }
  removeProd(prod:ProdutoDeCarrinho){
    this.carrinho = this.carrinho.filter(obj => obj !== prod);
  }
  roundToTwoDecimals(n:number){
    return n.toFixed(2);
  }

  atualizaTotal(){
    var total:number = 0;
    this.carrinho.forEach(prodcar => {
      total = total + prodcar.produto.price * prodcar.quantidade;
    });
    this.total = total;
  }

  add(p: Produto, quant: number): void {
    var newEntry = true;
    this.carrinho.forEach(prodcar => {
      if (prodcar.produto == p) {
        newEntry = false;
        prodcar.quantidade -= -quant;
      }
    });
    if (newEntry) {
      var prodcar = { produto: p, quantidade: quant };
      this.carrinho.push(prodcar);
    }
    var total = 0;
    this.carrinho.forEach(prodcar => {
      total += prodcar.produto.price * prodcar.quantidade;
    });
    this.total=total;
  }
}

