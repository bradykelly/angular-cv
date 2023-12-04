import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniEducationComponent } from './uni-education.component';

describe('UniEducationComponent', () => {
  let component: UniEducationComponent;
  let fixture: ComponentFixture<UniEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniEducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UniEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
