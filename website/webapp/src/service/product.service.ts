import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product.model'
import { PRODUCTS_MOCK_DATA } from '../data/product.mock'


@Injectable()
export class ProductService {
  private productList: Product[];

  constructor() {
    console.log("init ProductService");
    this.fetchAllProducts();
  }

  ngOnInit(){
    console.log("init ProductService 1");
  }

  getAllProducts(): Product[]{
    return this.productList;
  }

  search(gender:string): Product[]{
    let result:Product[] = this.productList;
    if(gender != null ){
      result = this.productList.filter(product => product.gender == gender);
    }
    return result;
  }

  getProductById(id: number): Product{
    let result:Product[] = this.productList.filter(product => product.id == id);
    if (result.length == 1){
      return result[0];
    }
    return null;
  }

  fetchAllProducts(){
    console.log("feching all products from web service")
    this.productList = PRODUCTS_MOCK_DATA;
  }

  getCachedData( data: any ){
    console.log("ProductService get cached data", data);
    return Observable.create(observer => {
        observer.next(data);
        observer.complete();
    });
  }
}
