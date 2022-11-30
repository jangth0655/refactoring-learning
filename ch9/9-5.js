/**
 * 불변성을 유지한다는 것은 :
 * 새로운 버전으로 만들어 나가야한다.
 * 하나의 인스턴스안에 특정한 값이 변경될 때, 참조하는 다른 곳에서도 업데이트해야 한다면
 * 값보다는 참조를 사용하는 것이 효율적이다.
 */

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }
}
