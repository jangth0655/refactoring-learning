/**
 * 전역으로 선언되거나 다른 모듈에 있는 특정 객체를 접근한다면 심각하게 커플링됨.
 * 내부 클래스나 모듈안에서 서로 연관된 데이터와 밀접하게 관련된 상황에서 내부적으로 질의 함수 만들기
 * 외부모듈의 데이터를 서로 주고 받을 경우, 필요한 데이터를 외부로 부터 전달 받아서 사용하는 것이 좋다.
 */

targetTemperature(aPlan, thermostat.currentTemperature);

// 다른모듈에 있는 함수라고 가정
function targetTemperature(plan, currentTemperature) {
  currentTemperature = currentTemperature;
  // ...
}
