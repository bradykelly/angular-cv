import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    getSkillsDataPath(): string {
        return `${this.appBasePath}/skills/skills.json`;
    }

    readonly appBasePath: string = 'basic-angular/browser/app';
}
