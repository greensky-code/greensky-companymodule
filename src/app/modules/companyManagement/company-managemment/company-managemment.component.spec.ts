import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyManagemmentComponent } from './company-managemment.component';

describe('CompanyManagemmentComponent', () => {
  let component: CompanyManagemmentComponent;
  let fixture: ComponentFixture<CompanyManagemmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyManagemmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManagemmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
