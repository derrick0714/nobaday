import { Component } from '@angular/core';
import { Carousel } from '../../componets/carousel/carousel.component.ts'

@Component({
  selector: 'home',
  providers: [

  ],
  directives: [
    Carousel
  ],
  pipes: [],
  styleUrls: ['./home.style.css'],
  templateUrl: './home.template.html'
})

export class Home {
  constructor() {
  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  submitState(value) {
    console.log('submitState', value);
  }

}
