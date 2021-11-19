function solution(array, commands) {
  var answer = new Array(commands.length);
  
  for (var i = 0; i < commands.length; i++) {
      answer[i] = (array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[commands[i][2] - 1]);
  }
  
  return answer;
}

// sort는 비교 대상이 없다면 유니코드 포인터에 의해 분류를 한다. 만약 2, 100, 1이 있다면 1, 2, 100이 아니라 1, 100, 2로 정렬을 한다는 뜻.