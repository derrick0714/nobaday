import { Component } from '@angular/core';
import { Product } from '../../../model/product.model'

@Component({
  selector: 'filter',
  directives: [
  ],
  styleUrls: ['./filter.style.css'],
  templateUrl: './filter.template.html'
})

export class Filter {
 private productList: Product[];
 private camber:boolean;
 private flatTop:boolean;
 
  constructor(){
  }

}