/**
 * 컬렉션 캡슐화하기
 * 외부에서 수정 ❌
 * 내부에서 관리할 수 있도록
 * 새로운 배열로 보여주기
 */

export class Person {
  #name;
  #courses;
  constructor(name) {
    this.#name = name;
    this.#courses = [];
  }

  get name() {
    return this.#name;
  }

  get courses() {
    return [...this.#courses];
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  removeCourse(course, runIfAbsent) {
    const index = this.#courses.indexOf(course);
    if (index === -1) {
      runIfAbsent();
      return;
    }
    this.#courses.splice(index, 1);
  }
}

export class Course {
  #name;
  #isAdvanced;
  constructor(name, isAdvanced) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name() {
    return this.#name;
  }

  get isAdvanced() {
    return this.#isAdvanced;
  }
}

const ellie = new Person('엘리');
ellie.addCourse(new Course('리팩토링', true));
console.log(ellie.courses.length);
ellie.removeCourse(course, () => {
  console.log('해당 코스는 없음');
});
