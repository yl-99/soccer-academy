import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRecruitComponent } from './player-recruit.component';

describe('PlayerRecruitComponent', () => {
  let component: PlayerRecruitComponent;
  let fixture: ComponentFixture<PlayerRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRecruitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
