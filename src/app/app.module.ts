import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayerComponent } from './pages/player/player.component';
import { CoachComponent } from './pages/coach/coach.component';
import { SubFormComponent } from './pages/sub-form/sub-form.component';
import { TechniqueComponent } from './pages/player/technique/technique.component';
import { SkillComponent } from './pages/player/skill/skill.component';
import { FitnessComponent } from './pages/player/fitness/fitness.component';
import { PositioningComponent } from './pages/player/positioning/positioning.component';
import { PlanningComponent } from './pages/player/planning/planning.component';
import { EquipmentComponent } from './pages/coach/equipment/equipment.component';
import { DrillsComponent } from './pages/coach/drills/drills.component';
import { PlanComponent } from './pages/coach/plan/plan.component';
import { PersonaComponent } from './pages/coach/persona/persona.component';
import { HowtoplayComponent } from './pages/player/howtoplay/howtoplay.component';
import { PlayerRecruitComponent } from './pages/player/player-recruit/player-recruit.component';
import { CoachRecruitComponent } from './pages/coach/coach-recruit/coach-recruit.component';
import { HowtoplayCoachComponent } from './pages/coach/howtoplay-coach/howtoplay-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    CoachComponent,
    SubFormComponent,
    TechniqueComponent,
    SkillComponent,
    FitnessComponent,
    PositioningComponent,
    PlanningComponent,
    EquipmentComponent,
    DrillsComponent,
    PlanComponent,
    PersonaComponent,
    HowtoplayComponent,
    PlayerRecruitComponent,
    CoachRecruitComponent,
    HowtoplayCoachComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
