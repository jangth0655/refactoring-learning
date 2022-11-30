/**
 * seter를 갖고 있는 클래스 - 변할 수 있는 데이터를 담고 있다.
 * 변할 수 있는 데이터를 담고 있는 클래스라면
 * 한 곳에서 데이터가 변하면 다른 곳에서도 데이터가 변해야하는 경우라면
 * 실시간으로 계산할 수 있도록 질의함수(get함수로)로 만드는 것이 중요하다.
 */

// 예제 1
class Order {
  // 다른 코드 있다고 가정
  // get하는 순간 계산하여 반환하는 것이 좋다.
  get discountedTotal() {
    return this._basePrice - this._discount;
  }
  set discount(value) {
    // 필요한 것만 업데이트한다.
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
    this._production += adjustment.amount;
  }
}
