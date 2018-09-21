import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent }      from './search/search.component';
import {ProdutosComponent}  from './produtos/produtos.component';

const routes: Routes = [
  { path: 'pesquisa', component: SearchComponent },
  { path: 'produtos', component: ProdutosComponent },
  {path: '',component:ProdutosComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
