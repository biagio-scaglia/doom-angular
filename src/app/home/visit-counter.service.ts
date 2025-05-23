import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {
  private key = 'visitCount';

  constructor() {
    this.incrementVisit();
  }

  private incrementVisit(): void {
    const visits = Number(localStorage.getItem(this.key)) || 0;
    localStorage.setItem(this.key, (visits + 1).toString());
  }

  getVisits(): number {
    return Number(localStorage.getItem(this.key)) || 0;
  }
}
