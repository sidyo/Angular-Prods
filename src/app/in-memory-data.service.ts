import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
     const produtos = [
        {id:1,name:"Arroz",price:4.20},
        {id:2,name:"Feijão",price:8.90},
        {id:3,name:"Batata",price:4.50},
        {id:4,name:"Picanha",price:139.80},
        {id:5,name:"Alface",price:3},
        {id:6,name:"Melão",price:11.90},
        {id:7,name:"Repolho",price:8.9},
        {id:8, name:"Skol Litrão", price:6.76}
    ];
    
    return {produtos};
  }
}