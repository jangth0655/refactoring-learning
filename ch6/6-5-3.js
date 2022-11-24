/**
 * state 라는 정보만 있을 경우 재사용 어렵다.
 * 함수내부의 필요한 정보만 받아와서 외부 의존도를 낮추고 재사용성을 높인다.
 */

export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
