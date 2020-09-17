import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceManagemmentComponent } from './device-managemment.component';

describe('DeviceManagemmentComponent', () => {
  let component: DeviceManagemmentComponent;
  let fixture: ComponentFixture<DeviceManagemmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceManagemmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceManagemmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
