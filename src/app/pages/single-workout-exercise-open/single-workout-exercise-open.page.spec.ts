import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleWorkoutExerciseOpenPage } from './single-workout-exercise-open.page';

describe('SingleWorkoutExerciseOpenPage', () => {
  let component: SingleWorkoutExerciseOpenPage;
  let fixture: ComponentFixture<SingleWorkoutExerciseOpenPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWorkoutExerciseOpenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleWorkoutExerciseOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
