import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doom2Component } from './doom2.component';

describe('Doom2Component', () => {
  let component: Doom2Component;
  let fixture: ComponentFixture<Doom2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doom2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doom2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
