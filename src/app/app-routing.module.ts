import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { HowtoplayCoachComponent } from './pages/coach/howtoplay-coach/howtoplay-coach.component';
import { CoachRecruitComponent } from './pages/coach/coach-recruit/coach-recruit.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'player', component:PlayerComponent,
    children:[
      {path:'', redirectTo:'/player/howtoplay', pathMatch:'full'},
      {path: 'howtoplay', component:HowtoplayComponent},
      {path: 'technique', component:TechniqueComponent},
      {path: 'skill', component:SkillComponent},
      {path: 'fitness', component:FitnessComponent},
      {path: 'positioning', component:PositioningComponent},
      {path: 'planning', component:PlanningComponent},
      {path: 'playerrecruit', component:PlayerRecruitComponent}
      
    ]},
  {path: 'coach', component:CoachComponent,
  children:[
    {path:'', redirectTo:'/coach/howtoplay', pathMatch:'full'},
    {path: 'howtoplay', component:HowtoplayCoachComponent},
    {path: 'coachrecruit', component:CoachRecruitComponent},
    {path: 'drills', component:DrillsComponent},
    {path: 'equipment', component:EquipmentComponent},
    {path: 'persona', component:PersonaComponent},
    {path: 'plan', component:PlanComponent}
  ]},
  {path: 'newsletter', component:SubFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
