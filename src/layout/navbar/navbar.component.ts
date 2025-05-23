import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() customerInfoReceveid = new EventEmitter<CustomerInfo>();

  customerInfo: CustomerInfo = {
    email: 'biagito@doommail.com' 
  };

  menuItems = [
    { name: 'home', label: 'Home', path: '/home' },
    { name: 'game', label: 'Game', path: '/games' },
    { name: 'extra', label: 'Extras', path: '/music' },
    { name: 'contact', label: 'Contact', path: '/contact' }
  ];

  ngOnInit(): void {
    console.log('INIT — customerInfo iniziale:', this.customerInfo);
    this.getCustomerInfo(); 
  }

  getCustomerInfo(): void {
    console.log('Prendo le info dell\'utente...');

    const response: CustomerInfo = {
      username: 'biagigio',
      nome: 'Biagio',
      cognome: 'Scaglia',
      email: 'biagio.scaglia01@gmail.com',
      sesso: 'maschio',
      eta: 20,
    };

    this.customerInfo = response;
    console.log('Dati utente aggiornati:', this.customerInfo);
    this.customerInfoReceveid.emit(this.customerInfo);
  }
}
