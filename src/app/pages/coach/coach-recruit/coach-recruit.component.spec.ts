import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachRecruitComponent } from './coach-recruit.component';

describe('CoachRecruitComponent', () => {
  let component: CoachRecruitComponent;
  let fixture: ComponentFixture<CoachRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
