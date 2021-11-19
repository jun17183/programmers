function solution(nums) {
  var answer = 0;
  var numsLength = nums.length;
  
  nums = Array.from(new Set(nums));
  
  answer = nums.slice(0, numsLength / 2).length;
  
  return answer;
}