import { Component } from '@angular/core';
import { MyButtonComponent } from "../shared/my-button/my-button.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [MyButtonComponent, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {

}
