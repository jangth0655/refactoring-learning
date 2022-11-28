/**
 * 변수의 이름은 최대한 구체적으로 적어야한다.
 * 기능을 구현하거나 추가하나 수정할 때 어떤 부분에서 일들을 담당하고 있는지
 * 어디에서 일을 처리하는 것이 좋을지 생각해보아야한다.
 */

export function renderPerson(person) {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join('\n');
}

export function photoDiv(photo) {
  return ['<div>', emitPhotoData(photo), '</div>'].join('\n');
}

function emitPhotoData(aPhoto) {
  const result = [];
  result.push(`<p>title: ${person.photo.title}</p>`);
  result.push(`<p>location: ${aPhoto.location}</p>`);
  result.push(`<p>date: ${aPhoto.date.toDateString()}</p>`);
  return result.join('\n');
}

function renderPhoto(aPhoto) {
  return '';
}
