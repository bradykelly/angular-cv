import {Component, Input} from '@angular/core';
import { Skill } from "../skill-model/skill.model";

@Component({
  selector: 'profile-skill',
  standalone: true,
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.less'
})
export class SkillComponent {
  @Input() model: Skill = new Skill();
}
