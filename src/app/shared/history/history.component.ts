import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: string[] = [];
  private readonly maxHistoryLength = 50;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      const saved = sessionStorage.getItem('history');
      this.history = saved ? JSON.parse(saved) : [];

      const validRoutes = ['/home', '/games', '/contact', '/music'];

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const url = event.urlAfterRedirects.split('?')[0];
          const isValid = validRoutes.some(route => url === route || url.startsWith('/games/'));
          if (isValid) {
            if (this.history[this.history.length - 1] !== event.urlAfterRedirects) {
              this.history.push(event.urlAfterRedirects);
              if (this.history.length > this.maxHistoryLength) {
                this.history.shift();
              }
              sessionStorage.setItem('history', JSON.stringify(this.history));
            }
          }
        }
      });
    }
  }
}