/**
 * 특이 케이스 추가하기
 * 특이 케이스가 있는 경우 : 값 등등이.. null, 비어있는 경우, 알 수 없는 경우
 * -> 대표할 수 있는 클래스를 만드는 것이다.
 */

class Hotel {
  constructor() {
    this.rooms = [];
  }

  addRoom(roomNumber) {
    this.rooms[roomNumber] = new Room(roomNumber);
  }

  emptyRoom(roomNumber) {
    this.rooms[roomNumber] = new EmptyRoom(roomNumber).clean();
  }

  cleanRooms() {
    this.rooms.forEach((room) => room.clean());
  }
}

class Room {
  constructor(roomNumber) {
    this.roomNumber = roomNumber;
  }
  clean() {
    console.log(`${this.roomNumber} clean room`);
  }
}

class EmptyRoom extends Room {
  constructor(roomNumber) {
    super(roomNumber);
    this.roomNumber = roomNumber;
  }
  clean() {
    console.log(`${this.roomNumber} empty Room`);
  }
}

///////////////////////////////////////////

export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown'
      ? new UnknownCustomer()
      : new Customer();
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  customerName = aCustomer.name;

  return customerName;
}
