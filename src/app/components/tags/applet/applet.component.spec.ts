/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppletComponent } from './applet.component';

describe('AppletComponent', () => {
  let component: AppletComponent;
  let fixture: ComponentFixture<AppletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
