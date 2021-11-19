function solution(answers) {
  var answer = [];
  var one = [1, 2, 3, 4, 5];
  var two = [2, 1, 2, 3, 2, 4, 2, 5];
  var three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
  var numArr = [{man: 1, num: 0}, {man: 2, num: 0}, {man: 3, num: 0}];
  
  for (var i = 0; i < answers.length; i++) {
      if (one[i % 5] === answers[i]) { numArr[0].num++; }
      if (two[i % 8] === answers[i]) { numArr[1].num++; }
      if (three[i % 10] === answers[i]) { numArr[2].num++; }
  }
  
  numArr.sort((a, b) => { return b.num - a.num; });
  
  if (numArr[0].num === numArr[1].num) {
      if (numArr[1].num === numArr[2].num) {
          answer = [1, 2, 3];
      } else {
          answer = (numArr[0].man > numArr[1].man 
                    ? [numArr[1].man, numArr[0].man] 
                    : [numArr[0].man, numArr[1].man]);
      }
  } else {
      answer = [numArr[0].man]
  }
      
  return answer;
}

// [풀이 참고]
// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};


//     return answer;
// }


