import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'story-addflights',
  templateUrl: './addflights.component.html',
  styleUrls: ['./addflights.component.scss'],
})
export class AddflightsComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  addFlightsData!: FormGroup;
  showPopup: boolean = false;
  message: string | undefined;
  popUpTitle: string | undefined;

  ngOnInit(): void {
    this.addFlightsData = this.fb.group({
      id: new FormControl('', [Validators.required]),
      from: new FormControl(''),
      to: new FormControl(''),
      departure: new FormControl(''),
    });
  }

  Submit() {
    debugger;
    const id = this.addFlightsData.get('id')?.value;
    this.message =
      'Are you sure you want to add this flight with id' + ' ' + id;
    this.popUpTitle = 'Add Flights !';
    this.showPopup = true;
  }
}
