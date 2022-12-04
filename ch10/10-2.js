/**
 * 조건식 통합하기
 * 특정 조건에서 동일한 값, 동일한 수행을 한다면, 의도가 명확하지 않다.
 * -> 조건들을 묶어서 하나로 합한다. -> 표현식으로 빼준다.
 */

function disabilityAmount(employee) {
  if (isNotEligibleForDisability(employee)) {
    return 0;
  }
  return 1;

  function isNotEligibleForDisability(employee) {
    return (
      employee.seniority < 2 ||
      employee.monthsDisabled > 12 ||
      employee.isPartTime
    );
  }
}
