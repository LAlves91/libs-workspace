import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseOneComponent } from './base-one.component';

describe('BaseOneComponent', () => {
  let component: BaseOneComponent;
  let fixture: ComponentFixture<BaseOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
