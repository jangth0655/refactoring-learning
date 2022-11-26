/**
 * 캡슐화
 * 내부 구현사항을 숨기고 외부에서 필요한 사항들만 공개한다.
 * 모듈 / 클래스 -> 한가지의 책임을 가지도록 하자!
 * 즉 하나의 도메인을 갖도록 (도메인 - 학생, 교실, 줌, 전화번호)
 * 컬렉션 캡슐화(배열, 리스트, Set)
 * 레코드 캡슐화(객체(key, value))
 */

const organization = { name: 'Acme Gooseberries', country: 'GB' };

class Organization {
  #data;
  constructor(data) {
    this.#data = data;
  }

  get organization() {
    // 얕은 복사
    return { ...this.#data.organization };
  }

  get name() {
    return this.#data.name;
  }

  get country() {
    return this.#data.country;
  }
}

const organizationObj = new Organization(organization);
console.log(organizationObj.organization);

console.log(organizationObj.name);
console.log(organizationObj.country);
