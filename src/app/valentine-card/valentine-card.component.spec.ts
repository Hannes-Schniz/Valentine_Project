import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValentineCardComponent } from './valentine-card.component';

describe('ValentineCardComponent', () => {
  let component: ValentineCardComponent;
  let fixture: ComponentFixture<ValentineCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValentineCardComponent]
    });
    fixture = TestBed.createComponent(ValentineCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
