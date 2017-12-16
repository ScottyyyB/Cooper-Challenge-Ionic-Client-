import { PersonProvider } from '../../providers/person/person';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PerformanceDataProvider } from '../../providers/performance-data/performance-data';
import { FizzbuzzProvider } from '../../providers/fizzbuzz/fizzbuzz';
import { ResultsPage } from '../results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};
  fizzbuzz: boolean = false;

  constructor(
    public navCtrl: NavController,
    public person: PersonProvider,
    public game: FizzbuzzProvider,
    private performanceData: PerformanceDataProvider,
    public modalCtrl: ModalController
  ) {
    this.user = { distance: 1000, age: 20, gender: 'female' };
  }

  capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  calculate() {
    this.person.age = this.user.age;
    this.person.gender = this.capitalizeFirstLetter(this.user.gender);

    this.person.doAssessment(this.user.distance);
    console.log(this.person.assessmentMessage);
  }

  showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }

  saveResults() {
    this.person.doAssessment(this.user.distance);
    this.performanceData
      .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
      .subscribe(data => console.log(data));
  }

  toggleContent() {
    if (!this.fizzbuzz) {
      this.fizzbuzz = true;
      return;
    }
    if (this.fizzbuzz) {
      this.fizzbuzz = false;
      return;
    }
  }

  playGame() {
    this.game.playFizz(this.game.input);
  }
}
