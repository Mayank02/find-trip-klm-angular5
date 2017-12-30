export class Booking {
  bookingCode: string;
  contactDetails: Object;
  itinerary: Object;
  passengers: Object;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
