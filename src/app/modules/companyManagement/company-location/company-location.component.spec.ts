import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyLocationComponent } from './company-location.component';

describe('CompanyLocationComponent', () => {
  let component: CompanyLocationComponent;
  let fixture: ComponentFixture<CompanyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
