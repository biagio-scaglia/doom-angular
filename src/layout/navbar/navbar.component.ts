import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface CustomerInfo {
  username?: string;
  nome?: string;
  cognome?: string;
  email?: string;
  sesso?: string;
  eta?: number;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  customerInfo: CustomerInfo = {};

  ngOnInit(): void {
    console.log('INIT — customerInfo iniziale:', this.customerInfo);
    this.getCustomerInfo(); 
  }

  getCustomerInfo(): void {
    console.log('Prendo le info dell\'utente...');

    let response: CustomerInfo = {
      username: 'biagigio',
      nome: 'Biagio',
      cognome: 'Scaglia',
      email: 'biagio.scaglia01@gmail.com',
      sesso: 'maschio',
      eta: 20,
    };

    this.customerInfo = response;
    console.log('Dati utente aggiornati:', this.customerInfo);
  }
}
