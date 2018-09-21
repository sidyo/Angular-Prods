import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  produtos: Produto[];
  searched:boolean;
  resultArray: Produto[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.getProdutos();
    this.searched = false;
  }

  getProdutos(): void {
    this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
  }

  search(value: string) {
    if (value.length == 0) {
      this.searched = false;
    }else{
      this.resultArray = [];
      this.searched = true;
      this.produtos.forEach(produto => {
        if (produto.name.toLowerCase().startsWith(value.toLowerCase())) {
          this.resultArray.push(produto);
        }
      });
    }
  }
}
