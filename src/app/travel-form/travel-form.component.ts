import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomFormValidators } from '../util/validators/custom-form-validators';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  defaultForm: FormGroup;
  additional: FormArray;

  destinations = [
    'Europe',
    'Australia and New Zealand',
    'Worldwide(excluding USA, Canada and the Caribbean)',
    'Worldwide(including USA, Canada and the Caribbean)'
  ];
  noOfTravelers = 10;
  travelers = Array(this.noOfTravelers).fill(null).map((k, i) => (i + 1));
  // travelers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  selectedOption: string;

  ngOnInit() {
    this.defaultForm = this.fb.group({
      destination: ['', [Validators.required]],
      startDate: ['', [Validators.required, CustomFormValidators.compareToCurrentDate('shouldBeGreater')]],
      endDate: ['', [Validators.required, CustomFormValidators.compareToCurrentDate('shouldBeGreater')]],
      durationInDays: ['', [Validators.required]],
      tripCost: ['', [Validators.required, Validators.min(0), Validators.max(1000000), Validators.pattern('^[0-9]*$')]],
      numberOfTravelers: ['', Validators.required],
      otherTravelers: this.fb.array([
        this.makeNew()
      ])
    });
    // this.defaultForm.get('destination').valueChanges.subscribe(data => console.log(data));
  }

  onSubmit() {
    // console.log(this.defaultForm);
  }
  makeNew(): FormGroup {
    return this.fb.group({
      ageOfTraveler: ['', [Validators.required, Validators.min(1), Validators.max(150), Validators.pattern('^[0-9]*$')]]
    });
  }
  get formArr() {
    return this.defaultForm.get('otherTravelers') as FormArray;
  }
  addFormControls(qty: number): void {
    for (let i = 0; ; i++) {
      if (i > qty) {
        break;
      }
      if (qty > this.formArr.length) {
        this.formArr.push(this.makeNew());
      } else {
        while (this.formArr.length > qty) {
          this.formArr.removeAt(0);
        }
      }
    }
    console.log(this.defaultForm);
  }

}
