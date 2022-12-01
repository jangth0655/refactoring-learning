/**
 * 객체에 경우 객체 통째로 인수로 넘기는 거싱 효율적
 * 하지만, !!
 * 객체의 하나의 속성만을 위해 객체를 통째로 넘기는 것은
 * 외부에대한 의존성이 높아진다. (다른 모듈, 객체와 불필요하게 커플링 될 수 있다.)
 */

export function temperatureAlerts(room, plan) {
  const alerts = [];
  const low = room.daysTempRange.low;
  const high = room.daysTempRange.high;
  if (!plan.withinRange(room.daysTempRange)) {
    alerts.push('room temperature went outside range');
  }

  return alerts;
}

export class HeatingPlan {
  constructor(temperatureRange) {
    this._temperatureRange = temperatureRange;
  }

  withinRange(range) {
    return (
      range.bottom >= this._temperatureRange.low &&
      range.top <= this._temperatureRange.high
    );
  }
}
