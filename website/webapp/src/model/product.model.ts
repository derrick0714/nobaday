export class Product {
  id: number;
  imgUrl: string;
  name: string;
  searchBadge: string;
  sizes: number[];
  gender:string;
  category:string;
  technicalList:{ [type:string]: string }[];
}