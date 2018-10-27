import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandiComponent } from './randi.component';

describe('RandiComponent', () => {
  let component: RandiComponent;
  let fixture: ComponentFixture<RandiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
