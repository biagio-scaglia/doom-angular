import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
games = [
  {
    title: "Doom 1",
    description: "Doom 1, rilasciato nel 1993, è uno sparatutto in prima persona rivoluzionario.",
    button: "Scopri di più",
    route: "/games/doom1",
  },
  {
    title: "Doom 2016",
    description: "Doom 2016 è un reboot della celebre serie, sviluppato da id Software e pubblicato nel 2016. ",
    button: "Scopri di più",
    route: "/games/doom2",
  },
  {
    title: "Doom Eternal",
    description: "Doom Eternal, uscito nel 2020, è il seguito diretto di Doom 2016. Sviluppato da id Software.",
    button: "Scopri di più",
    route: "/games/doom3",
  },
]
}



