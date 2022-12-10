/**
 * 필드 내리기
 * 특정 서브클래스에서 사용한다면 서브클래스에 정의 해야한다.
 */

class Employee {}

class Engineer extends Employee {}
class Salesperson extends Employee {
  #quota;
}
