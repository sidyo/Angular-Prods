import { Component, OnInit } from '@angular/core';
import{ProdutoService} from '../produto.service';
import{Produto} from '../produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos:Produto[];


  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
  }

  getProdutos(): void {
    this.produtoService.getProdutos()
        .subscribe(produtos => this.produtos = produtos);
  }


}
