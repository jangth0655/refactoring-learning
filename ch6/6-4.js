/**
 * 변수가 너무 불필요하다면 인라인 하는 것이 좋다.
 * 정해진 규칙은 없다.
 */

export function isDeliveryFree(anOrder) {
  return anOrder.basePrice > 1000;
}
