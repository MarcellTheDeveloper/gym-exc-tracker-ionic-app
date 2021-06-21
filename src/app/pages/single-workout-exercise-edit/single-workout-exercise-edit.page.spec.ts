import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleWorkoutExerciseEditPage } from './single-workout-exercise-edit.page';

describe('SingleWorkoutExerciseEditPage', () => {
  let component: SingleWorkoutExerciseEditPage;
  let fixture: ComponentFixture<SingleWorkoutExerciseEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWorkoutExerciseEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleWorkoutExerciseEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
