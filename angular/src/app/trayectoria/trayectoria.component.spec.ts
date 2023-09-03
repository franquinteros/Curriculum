import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoriaComponent } from './trayectoria.component';

describe('TrayectoriaComponent', () => {
  let component: TrayectoriaComponent;
  let fixture: ComponentFixture<TrayectoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrayectoriaComponent]
    });
    fixture = TestBed.createComponent(TrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
