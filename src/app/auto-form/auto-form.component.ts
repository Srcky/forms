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
  additionalDrivers = {
    driverDob: ['', [Validators.required, CustomFormValidators.dateOfBirthValidator(18)]],
    driverGender: ['', Validators.required],
    driverMaritalStatus: ['', Validators.required],
    driverCategory: ['', Validators.required],
    driverLicenceDate: ['', [Validators.required, CustomFormValidators.compareToCurrentDate('shouldBeLess')]]
  };
  proba = {
    novo1: ['', [Validators.required, CustomFormValidators.dateOfBirthValidator(18)]],
    novo2: ['', Validators.required],
  };

  noOfDrivers = 4;
  drivers = Array(this.noOfDrivers).fill(null).map((k, i) => (i + 1));

  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.defaultForm = this.fb.group({
      general: this.fb.group({
        coverageStartDate: ['', [Validators.required, CustomFormValidators.compareToCurrentDate('shouldBeGreater')]],
        paymentFrequency: ['', Validators.required]
      }),
      numberOfDrivers: ['', Validators.required],
      additionalDriver: this.fb.array([]),
      novaSekcija: this.fb.array([])
    });
  }

  //////////////////////
  get newsection() {
    return this.defaultForm.get('novaSekcija') as FormArray;
  }
  makeSection() {
    return this.fb.group(this.proba);
  }
  addNew() {
    this.newsection.push(this.makeSection());
  }
  removeStuff() {
    this.newsection.removeAt(0);
  }
  ////////////////////////////



  makeNew(): FormGroup {
    return this.fb.group(this.additionalDrivers);
  }
  get formArr() {
    return this.defaultForm.get('additionalDriver') as FormArray;
  }
  toggleFormControls(qty: number): void {
    if (qty > this.formArr.length) {
      for (let i = this.formArr.length; i < qty; i++) {
        this.formArr.push(this.makeNew());
      }
    } else {
      while (this.formArr.length > qty) {
        this.formArr.removeAt(0);
      }
    }
  }
}
