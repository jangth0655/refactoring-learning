/**
 * 전달받은 매개변수 불리언으로 동작이 다르게 해야한다면 (flag)
 * 좋지 않다.
 */

export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  addReservation(customer, isPriority = false) {
    this.#reservations.push(customer);
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
