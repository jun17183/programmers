function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);
  
  var realLost = lost.filter((item) => !reserve.includes(item));
  var realReserve = reserve.filter((item) => !lost.includes(item));
  
  return n - realLost.filter((item) => {
      var i = realReserve.find((r) => Math.abs(r-item) === 1);
      if (!i) return true;
      realReserve = realReserve.filter((r) => r !== i);
  }).length;
}