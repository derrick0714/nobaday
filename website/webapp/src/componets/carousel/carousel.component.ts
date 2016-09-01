import { Input, Component, ViewEncapsulation  } from '@angular/core'
import { CarouselItem } from './carouselItem'


import "owl.carousel"

@Component({
  selector: 'carousel',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    'carousel.style.css'
    ],
  templateUrl: 'carousel.html'

})

export class Carousel {
  private items: CarouselItem[];
  private textOverlayPosition: string;
  private textOverlayColor: string;
  @Input() id: string;
  @Input() options;

  constructor() {
    this.items = [{
        imgUrl: "assets/img/fullimage1.jpg",
        textOverlayPosition: "right",
        textOverlayColor: "black"
      },
      {
        imgUrl: "assets/img/fullimage2.jpg",
        textOverlayPosition: "right",
        textOverlayColor: "white"
      },
      {
        imgUrl: "assets/img/fullimage3.jpg",
        textOverlayPosition: "center",
        textOverlayColor: "white"
      },
      {
        imgUrl: "assets/img/fullimage4.jpg",
        textOverlayPosition: "right",
        textOverlayColor: "white"
      }
    ];
  }

  ngAfterViewInit() {
    (<any>$('#'+this.id)).owlCarousel(this.options)
  }

}
