import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseObservableComponent } from './promise-observable.component';

describe('PromiseObservableComponent', () => {
  let component: PromiseObservableComponent;
  let fixture: ComponentFixture<PromiseObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromiseObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
