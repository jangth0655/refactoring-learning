/**
 * 객체는 항상 참조값으로 전달하기 때문에 변경될 수 있는 객체를 여기저기 전달하는 것 ❌
 * 스프레드를 통해 객체를 반환하여 사용 -> 하지만 1단계 얕은 복사이기 때문에 위험할 수 있다.
 * 따라서 ✅ 클래스를 사용하는 것을 추천!
 */
class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    (this.#firstName = firstName), this.#lastName, lastName;
  }

  // set가 없기 때문에 수정할 수 없다.
  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

/**
 let defaultOwner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner() {
  return { ...defaultOwner };
}

 */
