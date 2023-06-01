import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SammaryDetailsComponent } from './sammary-details.component';

describe('SammaryDetailsComponent', () => {
  let component: SammaryDetailsComponent;
  let fixture: ComponentFixture<SammaryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SammaryDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SammaryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
