/**
 * 가독성을 좋게 하기 위해
 * 숫자보다는 상수로 전환
 */

const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
