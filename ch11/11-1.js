/**
 * 함수를 만들 때 중요하게 생각해야할 것은 사이드이펙없이 만들기
 * 함수 사이드이펙 - 한가지 일만 해야하는데 부수적인 역할까지 하는 것
 * 즉 하나의 일만 하는 것이 중요하다.
 */

// 예제 1
function totalOutstanding() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
}

function sendBill() {
  // bill을 보냄
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      setOffAlarms(alarm, p);
      return 'Don';
    }
    if (p === 'John') {
      setOffAlarms(alarm, p);
      return 'John';
    }
  }
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
