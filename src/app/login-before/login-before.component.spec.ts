import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBeforeComponent } from './login-before.component';

describe('LoginBeforeComponent', () => {
  let component: LoginBeforeComponent;
  let fixture: ComponentFixture<LoginBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBeforeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
