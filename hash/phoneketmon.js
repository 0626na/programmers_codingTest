function solution(nums) {
  const count = nums.length;
  const arr = [...new Set(nums)];
  let answer = 0;

  if (arr.length > count / 2) answer = count / 2;
  else answer = arr.length;

  return answer;
}
