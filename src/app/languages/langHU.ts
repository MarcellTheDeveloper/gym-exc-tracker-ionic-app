export class LanguageHu
{
  labels = new class
  {
    workoutDays = 'Edzés napok';
    favouriteGyms = 'Kedvenc edzőtermek';
    exercises = 'Gyakorlatok';
    language = 'Nyelv';
    magyar = 'Magyar';
    english = 'Angol';
    myAccount = 'Profil';
    addExercise = 'Gyakorlat hozzáadása';
    editExercise = 'Gyakorlat szerkesztése';
    day = 'Nap';
    password = 'Jelszó';
    signup = 'Regisztráció';
    dontHaveAcc = `Nincs fiókod?`;
    haveAcc = 'Már van fiókod';
  }();

  singleExerciseLabels = new class
  {
    name = 'Név';
    weight = 'Súly';
    bodyPart = 'Testrész';
    sets = 'Sorozat';
    reps = 'Ismétlés';
    otherWeightType = 'egyéb';
    desc = 'Leírás';
    descPlaceholder = 'Leírás és egyéb megjegyzések...';
    uploadImg = 'Kép feltöltése';
    changeImg = 'Kép megváltoztatása';
    unit = 'Mértékegység';
  }();
  alertMessageLabels = new class
  {
    error = 'Hiba';
    alert = 'Figyelmeztetés';
    leaveConfirm = 'Biztos ki akarsz lépni?';
    iStay = 'Maradok az oldalon';
    iLeave = 'Kilépek';
    beforeSaveFillAllReq = 'Mentés előtt kérlek töltsd ki a kötelező mezőket!';
  }();
  actions = new class
  {
    logOut = 'Kijelentkezés';
    logIn = 'Bejelentkezés';
  }();


  exerciseSettings = new class
  {
    settings = 'Beállítások';
    delete = 'Gyakorlat törlése';
    edit = 'Gyakorlat szerkesztése';
    cancel = 'Vissza';
    deleteConfirm = 'Biztos törölni akarod ezt a gyakorlatot: ';
    yes = 'Igen';
    no = 'Nem';
  }();

  days = new class
  {
    exercisesByDay = {
      monday: 'Hétfő',
      tuesday: 'Kedd',
      wednesday: 'Szerda',
      thursday: 'Csütörtök',
      friday: 'Péntek',
      saturday: 'Szombat',
      sunday: 'Vasárnap',
    };
  }();
}
