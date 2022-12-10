/**
 * 필드도 마찬가지로 항상 공통된 코드가 있다면 수퍼클래스로 올리기
 */

class Employee {
  #name;
}

class Salesperson extends Employee {}

class Engineer extends Employee {}
