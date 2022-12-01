/**
 * 예상한는 에러라면, 각각 상황에 맞게 처리하면 된다. -> 예외처리 남용하지 말것
 * 예외처리 : 예상치 못한 에러가 발생한 경우 -> try catch를 통해 예외처리 할 것
 */

const values = [];
function getValueForPeriod(periodNumber) {
  return values[periodNumber] ?? 0;
}

getValueForPeriod(-10);
