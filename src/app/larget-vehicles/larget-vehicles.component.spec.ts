import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargetVehiclesComponent } from './larget-vehicles.component';

describe('LargetVehiclesComponent', () => {
  let component: LargetVehiclesComponent;
  let fixture: ComponentFixture<LargetVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargetVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargetVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
