import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarAfterComponent } from './sidebar-after.component';

describe('SidebarAfterComponent', () => {
  let component: SidebarAfterComponent;
  let fixture: ComponentFixture<SidebarAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarAfterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
