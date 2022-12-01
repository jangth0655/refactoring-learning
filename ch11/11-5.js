/**
 * 클래스안에서, 모듈안에서 복잡한 함수를 사용할 때
 * 로직들을 게터로 추출하면 클래스 내부에서 재사용성과 가독성이 높아진다.
 * 클래스 안에서 기존에 가지고 있는 데이터를 통해 충분히 계산할 수 있다면 불필요한 매개변수 전달
 * -> 매개변수는 가능하면 사용하지 않는 것이 좋다
 * 클래스, 모듈 내부에서 질의 함수로 충분히 상태의 값을 가져올 수 있다면 내부적으로 질의 함수 만들기
 */

export class Order {
  constructor(quantity, itemPrice) {
    this.quantity = quantity;
    this.itemPrice = itemPrice;
  }

  get finalPrice() {
    return this.discountedPrice(this.basePrice);
  }

  get basePrice() {
    return this.quantity * this.itemPrice;
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountedPrice() {
    switch (this.discountLevel) {
      case 1:
        return this.basePrice * 0.95;
      case 2:
        return this.basePrice * 0.9;
    }
  }
}
