import { SkillLevel } from "./skill-level.enum";
import { plainToInstance } from "class-transformer";

export class Skill {
    constructor(skillsJson: string = '') {
        if (skillsJson.length > 0) {
            const skills = plainToInstance(Skill, JSON.parse(skillsJson) as Skill[]);
        }
    }

    name: string = '';
    months: number = 0;
    level: SkillLevel = SkillLevel.Intermediate;
}
