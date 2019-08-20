import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampledetailComponent } from './sampledetail.component';

describe('SamplelistComponent', () => {
  let component: SampledetailComponent;
  let fixture: ComponentFixture<SampledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
