import { WorkHistoryComponent } from "./work-history/work-history.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";
import {Route, Routes} from '@angular/router';

const rt = { path: '', redirectTo: '/front', pathMatch: 'full' };

export const routes: Routes = [
  { path: 'front', component: FrontPageComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'history', component: WorkHistoryComponent },

  { path: '**', redirectTo: '/front', pathMatch: 'full' }
]
