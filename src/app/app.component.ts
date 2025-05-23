import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerInfo, NavbarComponent } from "../layout/navbar/navbar.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { LoaderComponent } from "./home/loader/loader.component";
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./home/modal/modal.component";
import { MyButtonComponent } from "./shared/my-button/my-button.component";
import { TranslateComponent } from "./home/translate/translate.component";
import { HistoryComponent } from './shared/history/history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    CommonModule,
    ModalComponent,
    TranslateComponent,
    HistoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'doom-site';
  isLoading = true;
  showModal = false;
  customerInfo: CustomerInfo | undefined;
  visitCount: number = 0;

  onCustomerInfo(info: CustomerInfo) {
    this.customerInfo = info;
  }

ngOnInit() {
  if (typeof window !== 'undefined') {
    const shownKey = 'loaderModalShown';
    const alreadyShown = sessionStorage.getItem(shownKey);

    if (!alreadyShown) {
      setTimeout(() => {
        this.isLoading = false;
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 6000);
      }, 6000);
      sessionStorage.setItem(shownKey, 'true');
    } else {
      this.isLoading = false;
      this.showModal = false;
    }

    const pathKey = `visitCount-${window.location.pathname}`;
    const currentCount = Number(localStorage.getItem(pathKey)) || 0;
    this.visitCount = currentCount + 1;
    localStorage.setItem(pathKey, this.visitCount.toString());
  }
}
}