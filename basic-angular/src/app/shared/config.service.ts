import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

const inDevMode = !environment.production;

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    getSkillsDataPath(): string {
        return `${this.appBasePath}/skills/skills.json`;
    }

    readonly appBasePath: string = 'basic-angular/browser/app';
}
