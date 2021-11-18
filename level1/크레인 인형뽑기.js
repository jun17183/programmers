function solution(board, moves) {
  var answer = 0;
  var bucket = [];
  
  for (var i = 0; i < moves.length; i++) {
      var y = moves[i] - 1;
      for (var x = 0; x < board.length; x++) {
          if (board[x][y] !== 0) {
              bucket.push(board[x][y]);
              if (bucket.length >= 2) {
                  if (bucket[bucket.length-1] === bucket[bucket.length-2]) {
                      bucket.pop();
                      bucket.pop();
                      answer += 2;
                  }
              }
              board[x][y] = 0;
              break;
          }
      }        
  }
  
  return answer;
}