import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root',
})
export class FireDbService {
  constructor(private db: AngularFirestore) {}

  reSetExercises(exercises, userId) {
    return new Promise<any>((resolve, reject) => {
      this.db
        .collection('exercise-collection')
        .doc(userId)
        .set(exercises)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => reject(error)
        );
    });
  }

  getExercisesDoc(userId: string) {
    return this.db.collection('exercise-collection').doc(userId).valueChanges();
  }
}
