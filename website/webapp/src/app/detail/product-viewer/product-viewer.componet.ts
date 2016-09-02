import { Component, Input } from '@angular/core';
import { Product } from '../../../model/product.model';

@Component({
  selector: 'product-viewer',
  providers: [
  ],
  directives: [
  ],
  styleUrls: ['./product-viewer.style.css'],
  templateUrl: './product-viewer.template.html'
})

export class ProductViewer {
  @Input() product: Product;

  constructor(){
  }
}