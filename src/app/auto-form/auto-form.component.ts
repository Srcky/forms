import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomFormValidators } from '../util/validators/custom-form-validators';

@Component({
  selector: 'app-auto-form',
  templateUrl: './auto-form.component.html',
  styleUrls: ['./auto-form.component.scss']
})
export class AutoFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  defaultForm: FormGroup;
  additional: FormArray;

  ngOnInit() {
    this.defaultForm = this.fb.group({
      destination: ['', [Validators.required]],
      startDate: ['', [Validators.required, CustomFormValidators.compareToCurrentDate('shouldBeGreater')]],
      endDate: ['', [Validators.required, CustomFormValidators.compareToCurrentDate('shouldBeGreater')]],
      durationInDays: ['', [Validators.required]],
      tripCost: ['', [Validators.required, Validators.min(0), Validators.max(1000000), Validators.pattern('^[0-9]*$')]],
      numberOfTravelers: ['', Validators.required],
      otherTravelers: this.fb.array([
        // this.makeNew()
      ])
    });
  }

}
