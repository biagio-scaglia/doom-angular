import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { TitleComponent } from '../shared/title/title.component';
import { CardComponent } from '../shared/card/card.component';
import { EmbedComponent } from './embed/embed.component';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, TitleComponent, CardComponent, EmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 6000); 
  }
}




