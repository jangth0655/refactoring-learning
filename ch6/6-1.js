/**
 * 함수
 * 문제 :
 * 함수가 너무 길다. (함수 내부에 너무 많은 일을 처린다.), 유지보수와 재사용 ❌
 * 단계적으로 함수를 추출해야한다.
 * 지역변수는 사용하는 곳과 가장 가까운곳에 선언하는 것이 좋다.
 */

export function printOwing(invoice) {
  printBanner();

  // 총 가격을 계산
  let outstanding = calculateOutStanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);

  const invoice = {
    orders: [{ amount: 2 }, { amount: 5 }],
    customer: '엘리',
  };
  printOwing(invoice);

  function printBanner() {
    console.log('***********************');
    console.log('**** Customer Owes ****');
    console.log('***********************');
  }

  function calculateOutStanding(invoice) {
    return invoice.orders.reduce((sum, order) => sum + order, 0);
  }

  function recordDueDate(invoice) {
    const today = new Date();
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    );
  }

  function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
  }
}
