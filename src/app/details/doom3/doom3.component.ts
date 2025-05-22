import { Component } from '@angular/core';
import { MyButtonComponent } from "../../shared/my-button/my-button.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doom3',
  templateUrl: './doom3.component.html',
  styleUrl: './doom3.component.css',
  imports: [MyButtonComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class Doom3Component {
  eta = 29;

  title = "DOOM Eternal";
  paragrafo = "Become the Slayer. Rip and tear through the armies of Hell.";
  versione = "2.0";
  img = "doom5.jpg";

  offertaStandard = {
    titolo: "Offerta Standard",
    descrizione: "Versione base del gioco",
    prezzo: 59.99
  };

  get offertaSpeciale() {
    if (this.eta < 20) return {
      titolo: "Offerta Under 20",
      descrizione: "Sconto riservato ai giocatori under 20",
      prezzo: 39.99
    }; else if  (this.eta < 25) return {
      titolo: "Offerta Under 25",
      descrizione: "Sconto riservato ai giocatori under 25",
      prezzo: 44.99
    }; else if (this.eta < 30) return {
      titolo: "Offerta Under 30",
      descrizione: "Sconto riservato ai giocatori under 30",
      prezzo: 49.99
    };
    return null;
  }
}