function solution(nums) {
  var answer = 0;
  
  for (var i = 0; i < nums.length-2; i++) {
      for (var j = i+1; j < nums.length-1; j++) {
          for (var k = j+1; k < nums.length; k++) {
              var sum = nums[i] + nums[j] + nums[k];
              var prime = true;
              for (var l = 2; l <= sum / 2; l++) {
                  if (sum % l === 0) {
                      prime = false;
                      break;
                  } 
              }
              if (prime) { answer++; }
          }
      }
  }
  
  return answer;
}