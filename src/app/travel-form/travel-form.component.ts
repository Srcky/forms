import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-form',
  templateUrl: './travel-form.component.html',
  styleUrls: ['./travel-form.component.scss']
})
export class TravelFormComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) { }

  travelForm: FormGroup;
  destinations = [
    'Europe',
    'Australia and New Zealand',
    'Worldwide(excluding USA, Canada and the Caribbean)',
    'Worldwide(including USA, Canada and the Caribbean)'
  ];
  travelers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  ngOnInit() {
    this.travelForm = this.fb.group({
      destination: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      durationInDays: ['', Validators.required],
      tripCost: ['', Validators.required],
      numberOfTravelers: ['', Validators.required]
    });
    this.travelForm.get('destination').valueChanges.subscribe(data => console.log(data));
  }

  onSubmit() {
    console.log(this.travelForm);
  }

}
