import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpisokstudentsListComponent } from './spisokstudents-list.component';

describe('SpisokstudentsListComponent', () => {
  let component: SpisokstudentsListComponent;
  let fixture: ComponentFixture<SpisokstudentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpisokstudentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpisokstudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
