import { Component } from '@angular/core';
import { MyButtonComponent } from '../my-button/my-button.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MyButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

cards = [
  {
    titolo: "Doom 1",
    paragrafo: "Doom 1, rilasciato nel 1993, è uno sparatutto in prima persona rivoluzionario.",
    button: "Entra nell'abisso",
    a: "/games/doom1",
  },
  {
    titolo: "Doom 2016",
    paragrafo: "Doom 2016 è un reboot della celebre serie, sviluppato da id Software e pubblicato nel 2016. ",
    button: "Entra nell'abisso",
    a: "/games/doom2",
  },
  {
    titolo: "Doom Eternal",
    paragrafo: "Doom Eternal, uscito nel 2020, è il seguito diretto di Doom 2016. Sviluppato da id Software.",
    button: "Entra nell'abisso",
    a: "/games/doom3",
  },
]
}


