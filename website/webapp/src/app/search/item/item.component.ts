import { Component, Input } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Product } from '../../../model/product.model'
@Component({
  selector: 'item',
  providers: [

  ],
  directives: [
    ROUTER_DIRECTIVES
  ],
  styleUrls: ['./item.style.css'],
  templateUrl: './item.template.html'
})

export class Item {
  @Input("productInfo") product: Product;
  private selectedSize:number;

  constructor(){
    this.selectedSize = 0;
  }

  onSelect(size){
    this.selectedSize = size;
  }
}