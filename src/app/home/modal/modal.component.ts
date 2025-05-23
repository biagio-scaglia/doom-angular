import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  countdown = 6;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      if (this.countdown > 1) {
        this.countdown--;
      }
    }, 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}