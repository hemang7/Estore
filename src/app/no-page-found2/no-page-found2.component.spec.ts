import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPageFound2Component } from './no-page-found2.component';

describe('NoPageFound2Component', () => {
  let component: NoPageFound2Component;
  let fixture: ComponentFixture<NoPageFound2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoPageFound2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoPageFound2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
