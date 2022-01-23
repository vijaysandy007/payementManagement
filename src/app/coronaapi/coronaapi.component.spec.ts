import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaapiComponent } from './coronaapi.component';

describe('CoronaapiComponent', () => {
  let component: CoronaapiComponent;
  let fixture: ComponentFixture<CoronaapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoronaapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
