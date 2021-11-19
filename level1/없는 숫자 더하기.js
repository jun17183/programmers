function solution(numbers) {
  var sum = 0;
  
  for (var num of numbers) { sum += num; }
  
  return 45 - sum;
}