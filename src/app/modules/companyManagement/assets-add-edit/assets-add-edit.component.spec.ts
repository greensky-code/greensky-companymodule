import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsAddEditComponent } from './assets-add-edit.component';

describe('AssetsAddEditComponent', () => {
  let component: AssetsAddEditComponent;
  let fixture: ComponentFixture<AssetsAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
