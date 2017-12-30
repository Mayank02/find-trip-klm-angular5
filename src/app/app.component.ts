import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import commonConstants from "../common/constants.js";
import { BookingService } from "./booking.service";
import { Booking } from "./booking";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  constants = commonConstants;
  booking: Object;
  noDetailsFound: boolean = false;
  bookingForm: FormGroup;
  bookingCode:string = '';
  familyName:string = '';

  constructor(private bookingService: BookingService, private fb: FormBuilder) { 
    this.bookingForm = fb.group({
      'bookingCode' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(6), Validators.pattern('^[a-zA-Z0-9]+$')])],
      'familyName' : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('^[a-zA-Z]+$')])]
    });
  }

  retrieveBooking(formData) {
    this.bookingCode = formData.bookingCode;
    this.familyName = formData.familyName;
    this.bookingService.retrieveBookingById(this.bookingCode, this.familyName).subscribe(data => {
      if((data.bookingCode === this.bookingCode) && (data.passengers && data.passengers.lastName === this.familyName)){
        this.booking = new Booking(data);
        this.noDetailsFound = false;
      } else {
        this.booking = null;
        this.noDetailsFound = true;
      }
    });
  }
}
