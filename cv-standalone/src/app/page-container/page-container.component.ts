import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-standalone-page-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css',
})
export class PageContainerComponent {}
