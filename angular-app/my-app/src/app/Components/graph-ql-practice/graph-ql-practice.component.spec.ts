import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphQlPracticeComponent } from './graph-ql-practice.component';

describe('GraphQlPracticeComponent', () => {
  let component: GraphQlPracticeComponent;
  let fixture: ComponentFixture<GraphQlPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphQlPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphQlPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
