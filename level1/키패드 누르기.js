function solution(numbers, hand) {
  var answer = '';
  
  var l = [3, 0];
  var r = [3, 2];
  var nowPosition;
  
  if (hand === "right") { hand = "R"; }
  else if (hand === "left") { hand = "L"; }
  
  function getPosition(num) {
    var x, y;
    if (num === 0) { return [3, 1]; }
    if (num % 3 !== 0) {
      x = parseInt(num / 3);
      y = num % 3 - 1;
    } else {
      x = parseInt(num / 3 - 1);
      y = 2;
    }
    console.log("num : " + num);
    console.log("nowPosition : " + [x,y]);
    return [x, y];
  }
  
  function handler(hand) {
    if (hand === "R") { r = nowPosition; }
    else if (hand === "L") { l = nowPosition; }
    answer += hand;
  }
  
  for (var i = 0; i < numbers.length; i++) {
    nowPosition = getPosition(numbers[i]);
    if (numbers[i] === 0 || numbers[i] % 3 === 2) {
      var l_distance = Math.abs(nowPosition[0] - l[0]) + Math.abs(nowPosition[1] - l[1]);
      var r_distance = Math.abs(nowPosition[0] - r[0]) + Math.abs(nowPosition[1] - r[1]);

      if (l_distance > r_distance) { handler("R"); }
      else if (l_distance < r_distance) { handler("L"); }
      else { 
        handler(hand);
      }
    } else if (numbers[i] % 3 === 1) {
      handler("L");
    } else if (numbers[i] % 3 === 0) {
      handler("R");
    }
  }
  
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));