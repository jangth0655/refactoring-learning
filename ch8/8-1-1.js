/**
 * 함수 내부에 쓰이고 있는 함수가 정말 trackSummary의 데이터와 밀접한 관련이 있는지
 * 응집도가 높은 상태인지 확인
 * 즉, 사용하는 데이터와 함수가 밀접하게 관련이 있는지
 * calculateTime,calculateDistance은 계산된 데이터를 반환만 할 뿐
 * 사용하는 데이터와는 연관이 없다.
 */

export function trackSummary(points) {
  const time = calculateTime();
  const distance = calculateDistance(points);
  const pace = time / 60 / distance;
  return {
    time,
    distance,
    pace,
  };
}

function calculateTime() {
  return 10000;
}

const newYork = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo = {
  lat: 35.652832,
  lon: 139.839478,
};

function distance(p1, p2) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles
  const dLat = radians(p2.lat) - radians(p1.lat);
  const dLon = radians(p2.lon) - radians(p1.lon);
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function radians(degrees) {
  return (degrees * Math.PI) / 180;
}

function calculateDistance() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i]);
  }
  return result;
}

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
