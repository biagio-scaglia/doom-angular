import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../layout/navbar/navbar.component";
import { FooterComponent } from "../layout/footer/footer.component";
import { LoaderComponent } from "./home/loader/loader.component";
import { CommonModule } from '@angular/common';
import { ModalComponent } from "./home/modal/modal.component";
import { MyButtonComponent } from "./shared/my-button/my-button.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, LoaderComponent, CommonModule, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'doom-site';
  isLoading = true;
  showModal = false;

  ngOnInit() {
    
    setTimeout(() => {
      this.isLoading = false;
      this.showModal = true;
      
      setTimeout(() => {
        this.showModal = false;
      }, 3000);
    }, 6000); 
  }

  
}