/**
 * 중개자 제거
 * 다른 클래스로부터 값을 표현하는 것이 불필요할 경우도 있다.
 * 단순 정보만 제공해주는 것이라면
 */

class Person {
  #name;
  #manage;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#chargeCode = chargeCode;
    this.#manage = manager;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.manager;
  }

  get chargeCode() {
    return this.chargeCode;
  }

  get department() {
    return this.#department;
  }
}

const person = new Person('Tom', 'aManager', '999');
