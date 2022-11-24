/**
 * 긴 표현식이 있다면 짧게 잘라서 의미 있는 이름으로 부여해주는 것이 가독성에 좋다.
 */

export function price(order) {
  const basePrice = order.quantity * order.itemPrice;
  const discount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
  return basePrice - discount + shipping;
}
