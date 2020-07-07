import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisokstudentsComponent } from './spisokstudents.component';

describe('SpisokstudentsComponent', () => {
  let component: SpisokstudentsComponent;
  let fixture: ComponentFixture<SpisokstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpisokstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisokstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
