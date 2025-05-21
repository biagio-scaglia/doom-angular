import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  showForm = true;
  resultMessage = '';
  showResult = false;

  isValid(indirizzo: string, provincia: string, cap: string, citta: string, nazione: string): boolean {
    return (
      indirizzo.trim() !== '' &&
      provincia.trim() !== '' &&
      /^\d{5}$/.test(cap.trim()) &&
      citta.trim() !== '' &&
      nazione.trim() !== ''
    );
  }

  onSubmit(
    indirizzo: string,
    provincia: string,
    cap: string,
    citta: string,
    nazione: string
  ) {
    if (
      indirizzo.trim() === '' ||
      provincia.trim() === '' ||
      cap.trim() === '' ||
      citta.trim() === '' ||
      nazione.trim() === ''
    ) {
      return;
    }
    if (this.isValid(indirizzo, provincia, cap, citta, nazione)) {
      this.resultMessage = 'Copertura disponibile';
    } else {
      this.resultMessage = 'Copertura non disponibile';
    }
    this.showForm = false;
    this.showResult = true;
  }

  resetForm() {
    this.showForm = true;
    this.showResult = false;
    this.resultMessage = '';
  }
}