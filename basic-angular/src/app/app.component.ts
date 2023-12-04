import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { ProfileSummaryComponent } from "./profile-summary/profile-summary.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { FrontPageComponent } from "./front-page/front-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, HeaderComponent, FrontPageComponent, FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'basic-angular';
}
