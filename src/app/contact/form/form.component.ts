import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  formData = {
    address: '',
    city: '',
    zip: '',
    region: ''
  };

  italianRegions = [
    'Abruzzo',
    'Basilicata',
    'Calabria',
    'Campania',
    'Emilia-Romagna',
    'Friuli-Venezia Giulia',
    'Lazio',
    'Liguria',
    'Lombardia',
    'Marche',
    'Molise',
    'Piemonte',
    'Puglia',
    'Sardegna',
    'Sicilia',
    'Toscana',
    'Trentino-Alto Adige',
    'Umbria',
    'Valle d\'Aosta',
    'Veneto'
  ];

  showResult = false;
  resultMessage = '';
  formError = '';

ngOnInit() {
  if (typeof window !== 'undefined' && window.localStorage) {
    const saved = localStorage.getItem('formData');
    if (saved) this.formData = JSON.parse(saved);
  }
}

saveForm(event: Event, address: string, city: string, zip: string, region: string) {
  event.preventDefault();
  this.formError = '';

  if (!address.trim()) {
    this.formError = 'Inserisci un indirizzo valido';
    return;
  }

  if (!city.trim()) {
    this.formError = 'Inserisci una città valida';
    return;
  }

  if (!zip.trim()) {
    this.formError = 'Inserisci un CAP valido';
    return;
  }

  if (!region.trim()) {
    this.formError = 'Seleziona una regione';
    return;
  }

  this.formData = { address, city, zip, region };

  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('formData', JSON.stringify(this.formData));
  }
  this.resultMessage = `Dati salvati: ${address}, ${city}, ${zip}, ${region}`;
  this.showResult = true;
}

resetForm() {
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem('formData');
  }
  this.formData = { address: '', city: '', zip: '', region: '' };
  this.showResult = false;
  this.formError = '';
}
}