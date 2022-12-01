/**
 * 특정 데이터와 게산이 재사용된다면 클래스로 만들어서 사용하는 것이 좋다
 * 한번만 일시적으로 사용된다면, 데이터를 간직할 필요가 없다면, 클래스로 만들 필요가 없다.
 */

export class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}
