/**
 * 함수 내에서도
 * 세부내용이 캡슐화됨
 * 내부를 좀 더 간결하게 할 수 있다.
 */

function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find((p) => candidates.includes(p)) || '';
}

console.log(foundPerson(['John']));
console.log(foundPerson(['Don', 'John']));
console.log(foundPerson(['Kent', 'Don', 'John']));
console.log(foundPerson(['Lisa', 'Don', 'Tom']));
