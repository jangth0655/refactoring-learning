/**
 * 반복문에서 모든일을 한번에 하는 것은 좋지않다.
 * 나눈다.
 * 함수는 하나의 일만 해아한다.
 * 성능 아직 하지마라 하지마라...
 * 관련 있는 코드끼리 나눈다 -> 함수로 만든다.
 */

/* export function reportYoungestAgeAndTotalSalary(people) {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}
 */

export function reportYoungestAgeAndTotalSalary(people) {
  return `youngestAge: ${youngestAge()}, totalSalary: ${totalSalary()}`;
  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }

  function totalSalary() {
    return people.reduce((total, p) => (total += p.salary), 0);
  }
}
