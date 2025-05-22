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
    zip: ''
  };

  showResult = false;
  resultMessage = '';

  ngOnInit() {
    const saved = localStorage.getItem('formData');
    if (saved) this.formData = JSON.parse(saved);
  }

  saveForm(event: Event, address: string, city: string, zip: string) {
    event.preventDefault();
    this.formData = { address, city, zip };
    
    localStorage.setItem('formData', JSON.stringify(this.formData));
    this.resultMessage = `Dati salvati: ${address}, ${city}, ${zip}`;
    this.showResult = true;
  }

  resetForm() {
    localStorage.removeItem('formData');
    this.formData = { address: '', city: '', zip: '' };
    this.showResult = false;
  }
}