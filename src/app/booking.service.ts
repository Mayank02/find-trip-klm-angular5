import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class BookingService {
  constructor(private http: Http) {}

  retrieveBookingById(bookingId: string, name: string) {
    return this.http
      .get("../assets/mock/mock.json")
      .map((res: Response) => res.json());
  }
}
