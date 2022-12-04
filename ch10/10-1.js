/**
 * 조건 표현식에서 또 조건이 있거나 더블 부정이 있다면
 * 표현식을 변수, 질의 함수로 추출하여 의미있는 이름을 부여하는 것이 좋다.
 * 클래스로 만들어 질의함수로 만드는 것도 좋다.
 */

function calculateCharge(date, quantity, plan) {
  return isSummer() ? summerCharge() : regularCharge();

  function isSummer() {
    return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
  }

  function summerCharge() {
    return quantity * plan.summerRate;
  }

  function regularCharge() {
    return quantity * plan.regularRate + plan.regularServiceCharge;
  }
}
