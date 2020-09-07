import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListArbolQaComponent } from './list-arbol-qa.component';

describe('ListArbolQaComponent', () => {
  let component: ListArbolQaComponent;
  let fixture: ComponentFixture<ListArbolQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListArbolQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListArbolQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
