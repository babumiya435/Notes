import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPracticeComponent } from './rest-practice.component';

describe('RestPracticeComponent', () => {
  let component: RestPracticeComponent;
  let fixture: ComponentFixture<RestPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
