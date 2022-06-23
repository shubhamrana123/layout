import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBeforeComponent } from './sidebar-before.component';

describe('SidebarBeforeComponent', () => {
  let component: SidebarBeforeComponent;
  let fixture: ComponentFixture<SidebarBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarBeforeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
