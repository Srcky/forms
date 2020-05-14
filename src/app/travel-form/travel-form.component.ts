import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CustomFormValidators } from '../util/validators/custom-form-validators';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss'],
})
export class TravelFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  defaultForm: FormGroup;

  destinations = [
    'Europe',
    'Australia and New Zealand',
    'Worldwide(excluding USA, Canada and the Caribbean)',
    'Worldwide(including USA, Canada and the Caribbean)',
  ];
  materials: Array<string> = ['brick', 'wood', 'concrete'];
  selectedMaterials: Array<string>;
  noOfTravelers = 10;
  travelers = Array(this.noOfTravelers)
    .fill(null)
    .map((k, i) => i + 1);

  ngOnInit() {
    this.defaultForm = this.fb.group({
      constructionMaterial: this.makeMaterial(),
      numberOfTravelers: [
        '',
        [Validators.required, Validators.pattern('^[0-9]*$')],
      ],
      otherTravelers: this.fb.array([this.makeNew()]),
      selMat: this.makeMaterial(),
    });
  }

  onSubmit() {
    const selMat = this.selectedMaterials;
    const newForm = { ...this.defaultForm.value, selMat };
    console.log(newForm);
  }

  makeMaterial() {
    const arr = this.materials.map(() => {
      return this.fb.control(false); // pravim praznu kontrolu kao placeholder za izabrane checkboxove
    });
    return this.fb.array(arr); // pravim instancu formArray-a koji ce da sadrzi te kontrole
  }

  getSelectedMaterial() {
    // prolazim kroz sve izabrane checkboxove i trpam ih u jedan obican array. Poziva se u template-u na change event.
    this.selectedMaterials = [];
    this.materialArr.controls.forEach((ctrl, i) => {
      if (ctrl.value) {
        this.selectedMaterials.push(this.materials[i]);
      }
    });
  }

  makeNew(): FormGroup {
    return this.fb.group({
      ageOfTraveler: [
        '',
        [
          Validators.required,
          Validators.min(1),
          Validators.max(150),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
    });
  }

  get materialArr() {
    return this.defaultForm.get('constructionMaterial') as FormArray; // setujem postojecu kontrolu kao formArray
  }

  get formArr() {
    return this.defaultForm.get('otherTravelers') as FormArray;
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
