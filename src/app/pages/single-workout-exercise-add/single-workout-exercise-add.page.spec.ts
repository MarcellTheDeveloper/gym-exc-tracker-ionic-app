import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleWorkoutExerciseAddPage } from './single-workout-exercise-add.page';

describe('SingleWorkoutExerciseAddPage', () => {
  let component: SingleWorkoutExerciseAddPage;
  let fixture: ComponentFixture<SingleWorkoutExerciseAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWorkoutExerciseAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleWorkoutExerciseAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
