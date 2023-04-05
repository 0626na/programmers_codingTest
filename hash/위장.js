function solution(clothes) {
  let answer = 1;
  let key = new Map();

  for (let i = 0; i < clothes.length; i++) {
    if (key.has(clothes[i][1])) {
      key.set(clothes[i][1], key.get(clothes[i][1]) + 1);
    } else {
      key.set(clothes[i][1], 1);
    }
  }

  for (let a of key.values()) {
    answer *= a + 1;
  }

  return answer - 1;
}

solution([
  ["동그란 안경", "얼굴"],
  ["검정 선글라스", "얼굴"],
  ["파란색 티셔츠", "상의"],
  ["청바지", "하의"],
  ["긴코트", "겉옷"],
]);

// solution([
//   ["yellow_hat", "headgear"],
//   ["blue_sunglasses", "eyewear"],
//   ["green_turban", "headgear"],
// ]);
