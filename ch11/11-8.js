/**
 * 생성자를 호출하는 방식이 복잡하다면,
 * 인스턴스 만드는 로직을 캡슐화하기
 * 팩터리 함수를 통해 인스턴스를 쉽게 만들기
 */

export class Employee {
  //typescript 경우 constructor private하면 된다.
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesman' };
  }

  static createEngineer(name) {
    return new Employee(name, 'E');
  }
}

const employee = Employee.createEngineer('name');
