import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAfterComponent } from './header-after.component';

describe('HeaderAfterComponent', () => {
  let component: HeaderAfterComponent;
  let fixture: ComponentFixture<HeaderAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAfterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
