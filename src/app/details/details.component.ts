import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doom1Component } from './doom1/doom1.component';
import { Doom2Component } from './doom2/doom2.component';
import { Doom3Component } from './doom3/doom3.component';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  imports: [
    Doom1Component,
    Doom2Component,
    Doom3Component
  ]
})
export class DetailsComponent implements OnInit {
  gameId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId') ?? '';
  }
}
