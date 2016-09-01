import { Component } from '@angular/core';
import { Carousel } from '../../componets/carousel/carousel.component.ts'
import { BannerImg } from '../../componets/bannerImg/bannerImg.component.ts'


@Component({
  selector: 'home',
  providers: [

  ],
  directives: [
    Carousel,
    BannerImg
  ],
  pipes: [],
  styleUrls: ['./home.style.css'],
  templateUrl: './home.template.html'
})

export class Home {
  constructor() {
  }

  ngOnInit() {
    console.log('init `Home` component');
  }

  submitState(value) {
    console.log('submitState', value);
  }

}
