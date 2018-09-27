import { Component, OnInit } from '@angular/core';
import{ProdutoService} from '../produto.service';
import{Produto} from '../produto';
import {CarrinhoService} from '../carrinho.service'
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos:Produto[];


  constructor(private produtoService: ProdutoService, private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.getProdutos();
  }
  roundToTwoDecimals(n:number){
    return n.toFixed(2);
  }
  getProdutos(): void {
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }
  adicionarAoCarrinho(p:Produto, quant:number){
    this.carrinhoService.getCarrinho().add(p,quant);
  }

  /*adicionarAoCarrinho(id:number, quant:number){
    var carrinho = this.carrinhoService.getCarrinho();
    this.produtos.forEach(prod => {
      if (prod.id == id) {
        carrinho.add(prod,quant);
      }
    });
  }*/
  /*adicionarAoCarrinho(quant:number):void{
    var carrinho = this.carrinhoService.getCarrinho();
    carrinho.add(this.produtos[1],quant);
  }*/
  


}
