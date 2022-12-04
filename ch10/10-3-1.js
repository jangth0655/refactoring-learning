/**
 * 중첩 조건문은 코드의 가독성을 떨어트리고 유지보수하기가 어렵다.
 * 중첩하지 않고 특정조건에 부합한다면 return 하여 중첩조건을 피할 수 있다.
 */

export function payAmount(employee) {
  if (employee === null) return;
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' };
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' };
  }
  // lorem.ipsum(dolor.sitAmet);
  // consectetur(adipiscing).elit();
  // sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua);
  // ut.enim.ad(minim.veniam);
  return someFinalComputation();
}

function someFinalComputation() {
  return { amount: 999, reasonCode: 'UNICORN' };
}
