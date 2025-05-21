import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doom3Component } from './doom3.component';

describe('Doom3Component', () => {
  let component: Doom3Component;
  let fixture: ComponentFixture<Doom3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doom3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doom3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
