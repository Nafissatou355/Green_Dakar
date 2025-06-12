import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss']
})
export class ScorePage {}
