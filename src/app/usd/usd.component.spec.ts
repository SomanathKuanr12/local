import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USDComponent } from './usd.component';

describe('USDComponent', () => {
  let component: USDComponent;
  let fixture: ComponentFixture<USDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [USDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(USDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
