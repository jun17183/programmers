function solution(new_id) {
  var answer = new_id.toLowerCase()           // 1단계 : 모든 대문자 -> 소문자
              .replace(/[^0-9a-z_\-.]/g, "")  // 2단계 : '-', '_', '.'을 제외한 모든 특수기호 제외
              .replace(/[.]{2,}/g, ".")       // 3단계 : '.'가 2번 이상 -> '.' 1개로 변환
              .replace(/^[.]|[.]$/g, "")      // 4단계 : 처음이나 마지막에 .가 있으면 제거

  
  

  return answer;
}