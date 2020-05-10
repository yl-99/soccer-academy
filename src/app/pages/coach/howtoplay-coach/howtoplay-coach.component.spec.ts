import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoplayCoachComponent } from './howtoplay-coach.component';

describe('HowtoplayCoachComponent', () => {
  let component: HowtoplayCoachComponent;
  let fixture: ComponentFixture<HowtoplayCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowtoplayCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtoplayCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
