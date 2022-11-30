/**
 * 의미 있는 이름을 부여하기
 * 정말 업데이트(mutable)될 정당한 이유가 없다면 무조건 const 사용하기
 * 값을 계산해서 반환해야하는 경우 let result
 * 함수의 인자의 값을 바로 업데이트 하는 것은 습관이다.
 */

// 예제 1
const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(perimeter);

// 예제 2
function distanceTravelled(scenario, time) {
  let result; // 반환해야하는 값을 계속 간직하고 있기 때문에
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.main(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime; // 전파된 거리
  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = acc * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime * secondaryTime;
  }
}

// 예제 3
function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) inputValue -= 1;
  return result;
}
