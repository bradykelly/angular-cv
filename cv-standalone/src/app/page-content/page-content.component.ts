import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-standalone-page-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-content.component.html',
  styleUrl: './page-content.component.css',
})
export class PageContentComponent {}
