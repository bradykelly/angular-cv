import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConsoleLogger} from "@angular/compiler-cli";
import {plainToInstance} from "class-transformer";
import {ConfigService} from "./config.service";
import {Skill} from "../skills/skill-model/skill.model";
import {environment} from "../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class DataService {

    private logger: ConsoleLogger = new ConsoleLogger(environment.logLevel);

    constructor(private config: ConfigService, private http: HttpClient) {}

    // TODO: Implement deserializeJson.
    deserializeJson<TObject>(filePath: string): TObject {
        this.logger.error('Method not implemented.')
        throw new Error('Method not implemented.');
    }

    deserializeSkillsJson(): Skill[] {
        try {
            return plainToInstance(Skill, JSON.parse(this.readJsonFile(this.config.getSkillsDataPath())));
        }
        catch (error: any) {
            this.logger.error(error.message.toString());
            throw error;
        }
    }

    readJsonFile(filePath: string): string {

        let returnValue = '';
        let jsonReadError: string = '';

        this.http.get(`/{{filePath}}`, {responseType: 'text'}).subscribe({
            next: (data) => {
                returnValue = data;
            },
            error: (err) => {
                jsonReadError = err;
            }
        });
        if (jsonReadError && jsonReadError.length > 0) {
            this.logger.error(jsonReadError);
            throw jsonReadError;
        }
        return returnValue;
    }
}
