import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { BookingService } from './booking.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
