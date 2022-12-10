/**
 * 메서드 내리기
 * 특정한 서브클래스에서 특정 행동이 필요하다면
 * 서브클래스에서만 가지는 특징으로 정의해서 사용
 */

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  get quota() {}
}
