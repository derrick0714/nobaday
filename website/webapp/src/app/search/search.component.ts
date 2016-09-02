import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../../model/product.model'
import { ProductService } from '../../service/product.service'

import { Description } from './description/description.component';
import { Item } from './item/item.component';
import { Filter } from './filter/filter.component';

@Component({
  selector: 'search',
  directives: [
    Description,
    Item,
    Filter
  ],
  styleUrls: ['./search.style.css'],
  templateUrl: './search.template.html'
})

export class Search {
 private productList: Product[];
 private sub: Subscription;
 private gender: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService:ProductService){
    this.router.routerState.snapshot.queryParams["queryParamaterName"];
    this.sub = this.router.routerState.queryParams.subscribe(queryParams =>
        this.parameterChange(queryParams));
    window.scrollTo(0, 0);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

  parameterChange(queryParams:any){
    console.log("search parameter change:",queryParams);
    this.gender=queryParams['gender'];
    this.productList = this.productService.search(this.gender);
  }
}