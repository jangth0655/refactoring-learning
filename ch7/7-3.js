// class Telephone {
//   constructor(number, countryCode){

//   }
// }

// const telephone = '010-888-6666';
// const gTelephone = '82' + '010-888-6666';

export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return this.priority.higherThan('normal');
  }
}

// priority를 가지고 조금 더 다른일을 한다면 class를 따로 만든 것이 좋다.
class Priority {
  #value;
  constructor(value) {
    if (Priority.legalValue().includes(value)) {
      this.#value = value;
    } else {
      throw new Error(`${value} is invalid for Priority`);
    }
  }

  get index() {
    return Priority.legalValue().findIndex(this.#value);
  }

  equals(other) {
    return this.#index === other.#index;
  }

  higherThan(other) {
    return this.#index > other.index;
  }

  static legalValue() {
    return ['low', 'normal', 'high', 'rush'];
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority).length;
