import { Component } from '@angular/core';
import { CarouselComponent } from "./carousel/carousel.component";
import { TitleComponent } from '../shared/title/title.component';
import { CardComponent } from '../shared/card/card.component';
import { EmbedComponent } from './embed/embed.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent, TitleComponent, CardComponent, EmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}




