import { Component } from '@angular/core';
import { ProfileSummaryComponent } from "../profile-summary/profile-summary.component";
import { SkillsListComponent } from "../skills/skills-list/skills-list.component";

@Component({
  selector: 'front-page',
  standalone: true,
  imports: [
    ProfileSummaryComponent,
    SkillsListComponent
  ],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.less'
})
export class FrontPageComponent {

}
