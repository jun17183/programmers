function solution(new_id) {
  var answer = '';
  
  answer = new_id.toLowerCase()
  .replace(/[^a-z0-9-._]/g, "")
  .replace(/[.]{2,}/g, ".")
  .replace(/^[.]|[.]$/g, "");
  
  if (answer === "") { answer = "a"; }
  
  answer = answer.slice(0, 15);
  if (answer.charAt(14) === ".") { answer = answer.slice(0, 14); }
  
  for (var i = answer.length - 1; i < 2; i++) {
      answer += answer.charAt(i);
  }
  
  return answer;
}