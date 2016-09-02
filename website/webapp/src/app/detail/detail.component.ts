import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../service/product.service'
import { Product } from '../../model/product.model'
import { Subscription } from 'rxjs/Subscription';

import { ProductViewer } from './product-viewer/product-viewer.componet'
@Component({
  selector: 'detail',
  providers: [
  ],
  directives: [
    ProductViewer
  ],
  styleUrls: ['./detail.style.css'],
  templateUrl: './detail.template.html'
})

export class Detail {
  private sub: Subscription;
  private product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService:ProductService
    ){
    this.sub = this.route.params.subscribe(params => {
       let id = +params['id']; // (+) converts string 'id' to a number
       console.log("init `detail`, id=", id);
       this.product = productService.getProductById(id);
     });
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}