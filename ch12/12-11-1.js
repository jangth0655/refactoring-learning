/**
 * 불필요한 기능들도 상속을 하면 모두 포함되기 때문에
 * 필요한 것만 가질 수 있도록 컴포지션을 하는게 좋다.
 */

class List {}

class Stack {
  constructor() {
    this.storage = new List();
  }

  pop() {}

  push() {}
}
