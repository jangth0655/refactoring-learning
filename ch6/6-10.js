/**
 * 여러 함수를 변환 함수로 묶기
 * 왠만하면 클래스를 이용하는 것이 좋다!
 * 변경된 데이터가 업데이트되지 않는다.
 */

import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

// 얕은 복사만 이뤄진다.
// 중첩된 객체가 있다면, 중첩된 객체까지는 새롭게 만들지 않는다.
export function enrichReading(original) {
  const result = _.cloneDeep(original);
  result.baseChange = calculateBaseCharge(result);
  result.taxableCharge = Math.max(0, this.baseCharge - this.taxThreshold);
  return result;
}

function calculateBaseCharge(reading) {
  return baseRate(reading.month, reading.year) * reading.quantity;
}

export function baseRate(month, year) {
  if (year === 2017 && month === 5) return 0.1;
  return 0.2;
}
