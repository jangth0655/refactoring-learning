/**
 * 어서션 추가하기
 * 개발단계에서 실수를 방지하고자 미리 알려주는 것
 */

import { strict as assert } from 'node:assert';

class Customer {
  constructor() {
    this.discountRate = 0;
  }
  applyDiscount(number = 0) {
    assert(number >= 0);
    return this.discountRate ? number - this.discountRate * number : number;
  }
}

new Customer().applyDiscount(1);
