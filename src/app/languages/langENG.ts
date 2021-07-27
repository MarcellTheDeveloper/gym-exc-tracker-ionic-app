export class LanguageEng
{
  labels = new class
  {
    workoutDays = 'Workout Days';
    favouriteGyms = 'Favourite gyms';
    exercises = 'Exercises';
    language = 'Language';
    magyar = 'Hungarian';
    english = 'English';
    myAccount = 'My account';
    addExercise = 'Add exercise';
    editExercise = 'Edit exercise';
    day = 'Day';
    password = 'Password';
    signup = 'Sign up';
    dontHaveAcc = `Dont have an account?`;
    haveAcc = 'Already have an account?';
  }();

  singleExerciseLabels = new class
  {
    name = 'Name';
    weight = 'Weight';
    bodyPart = 'Bodypart';
    sets = 'Sets';
    reps = 'Reps';
    otherWeightType = 'other';
    desc = 'Description';
    descPlaceholder = 'Description and other notes';
    uploadImg = 'Upload image';
    changeImg = 'Change image';
    unit = 'Unit';
  }();

  alertMessageLabels = new class
  {
    error = 'Error';
    alert = 'Warning';
    leaveConfirm = 'Are you sure you want to leave?';
    iStay = 'Stay';
    iLeave = 'Leave';
    beforeSaveFillAllReq = 'Before saving please fill all the required fields!';
  }();
  actions = new class
  {
    logOut = 'Log out';
    logIn = 'Log in';
  }();

  exerciseSettings = new class
  {
    settings = 'Settings';
    delete = 'Delete exercise';
    edit = 'Edit exercise';
    cancel = 'Cancel';
    deleteConfirm = 'Are you sure you want to delete this exercise:';
    yes = 'Yes';
    no = 'No';
  }();



  days = new class
  {
    exercisesByDay = {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
    };
  }();
}
