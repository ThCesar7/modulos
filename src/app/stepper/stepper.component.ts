import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class StepperComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
}
