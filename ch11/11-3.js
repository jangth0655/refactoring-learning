/**
 * 플래그 인수 제거하기 
 * 가능하면 플래그 인수 사용하지 않는 것이 좋다. 
 * 플래그를 이용하여 함수를 제어하는것은 나쁘다.
 */

// 예제 1
function setWidth(value){
  this._width = value
}
function setHeight(value){
  this._height= value
}


// 예제 2
class Concert {
  regularBook(customer) {}
  premiumBook(customer) {}
}

// 예제 3
function switchOn();
function switchOff();
