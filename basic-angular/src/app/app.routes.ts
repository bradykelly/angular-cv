import { WorkHistoryComponent } from "./work-history/work-history.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { SkillsListComponent } from "./skills/skills-list/skills-list.component";

export const routes = [
  { path: 'front', component: FrontPageComponent },
  { path: 'skills', component: SkillsListComponent },
  { path: 'history', component: WorkHistoryComponent },

  { path: '**', redirectTo: '/front', pathMatch: 'full' }
]
