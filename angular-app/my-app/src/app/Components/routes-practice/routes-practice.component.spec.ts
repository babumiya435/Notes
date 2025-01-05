import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesPracticeComponent } from './routes-practice.component';

describe('RoutesPracticeComponent', () => {
  let component: RoutesPracticeComponent;
  let fixture: ComponentFixture<RoutesPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutesPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoutesPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
