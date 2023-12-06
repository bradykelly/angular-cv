import {Component, OnInit} from '@angular/core';
import {SkillComponent} from "../skill/skill.component";
import {DataService} from "../../shared/data.service";
import {NgForOf} from "@angular/common";
import {Skill} from "../skill-model/skill.model";
import {ConfigService} from "../../shared/config.service";


@Component({
    selector: 'skills-list',
    standalone: true,
    imports: [
        SkillComponent,
        NgForOf
    ],
    templateUrl: './skills-list.component.html',
    styleUrl: './skills-list.component.less'
})
export class SkillsListComponent implements OnInit {

    constructor(private jsonService: DataService) {
    }

    ngOnInit(): void {
        this.jsonService.deserializeSkillsJson();
    }

    private json: string = '';
    skillsList: Skill[] = [];
}
