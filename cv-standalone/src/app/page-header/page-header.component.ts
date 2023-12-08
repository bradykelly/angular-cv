import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cv-standalone-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.css',
})
export class PageHeaderComponent {}
