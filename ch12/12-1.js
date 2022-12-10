/**
 * 상속 : 기능을 확장하는 것
 * 왜 하는 것일까 ?
 * 동일한 코드를 재사용하기 위해
 * 단, 문제점
 * - 딱 하나만 상속이 가능함
 * - 불필요한 기능이 상속됨
 * - 족보가 꼬일 수 있음
 * - 수정이 어렵다.
 */

// 공통된 메서드 부모클래스로 끌어 올리기
class Employee {
  get name() {}
}

class Salesperson extends Employee {}

class Engineer extends Employee {}

// 예시 2
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {}
class Employee extends Party {}
