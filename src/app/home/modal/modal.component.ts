import { Component } from '@angular/core';


export interface SurvivorInfo {
  username?: string;
  nome?: string;
  cognome?: string;
}
@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
survivorInfo: SurvivorInfo = {};

  ngOnInit(): void {
    console.log('INIT — customerInfo iniziale:', this.survivorInfo);
    this.getCustomerInfo(); 
  }

  getCustomerInfo(): void {
    console.log('Prendo le info dell\'utente...');

    let response: SurvivorInfo = {
      username: 'biagigio',
      nome: 'Biagio',
      cognome: 'Scaglia',
    };

    this.survivorInfo = response;
    console.log('Dati utente aggiornati:', this.survivorInfo);
  }
    
  
   
  }