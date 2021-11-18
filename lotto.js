function solution(lottos, win_nums) {
  var answer = [0, 0];
  var firstNum = 0;
  var secondNum = 0;

  for (var i = 0; i < lottos.length; i++) {
    console.log(i + 1 + '회전');
    console.log('lottos[' + i + '] : ' + lottos[i]);
    if (lottos[i] == 0) { firstNum++; }
    for (var j = 0; j < win_nums.length; j++) {
      console.log('win_nums[' + j + '] : ' + win_nums[j]);
      if (lottos[i] == win_nums[j]) { firstNum++; secondNum++; }
    }
  }

  answer[0] = (firstNum > 1 ? 7 - firstNum : 6);
  answer[1] = (secondNum > 1 ? 7 - secondNum : 6);

  return answer;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 35, 1, 6, 19]));