import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor() { }

  formArr(selectedForm: FormGroup, selectedControl: string): FormArray {
    return selectedForm.get(selectedControl) as FormArray;
  }

  // toggleFormControls(qty: number): void {
  //   this.isVisible = this.defaultForm.get('additionalDrivers').get('numberOfDrivers').value > 0;
  //   if (qty > this.formArr.length) {
  //     for (let i = this.formArr.length; i < qty; i++) {
  //       this.formArr.push(this.makeNew());
  //     }
  //   } else {
  //     while (this.formArr.length > qty) {
  //       this.formArr.removeAt(0);
  //     }
  //   }
  // }
}
