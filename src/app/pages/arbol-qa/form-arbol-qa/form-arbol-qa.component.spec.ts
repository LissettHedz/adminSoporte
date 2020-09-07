import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormArbolQaComponent } from './form-arbol-qa.component';

describe('FormArbolQaComponent', () => {
  let component: FormArbolQaComponent;
  let fixture: ComponentFixture<FormArbolQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormArbolQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormArbolQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
