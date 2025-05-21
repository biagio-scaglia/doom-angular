import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doom1Component } from './doom1.component';

describe('Doom1Component', () => {
  let component: Doom1Component;
  let fixture: ComponentFixture<Doom1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doom1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doom1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
