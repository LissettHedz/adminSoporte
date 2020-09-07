import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSucursalesComponent } from './dropdown-sucursales.component';

describe('DropdownSucursalesComponent', () => {
  let component: DropdownSucursalesComponent;
  let fixture: ComponentFixture<DropdownSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
