import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAfterComponent } from './footer-after.component';

describe('FooterAfterComponent', () => {
  let component: FooterAfterComponent;
  let fixture: ComponentFixture<FooterAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterAfterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
