function getRangeReport(start, end) {
  let total = 0;
  const evens = [];
  const odds = [];
  const range = [];
  let average = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
    total += i;
    range.push(i);
  }
  average = total / range.length;
  const result = {
    total,
    evens,
    odds,
    range,
    average,
  };
  return result;
}

console.log(getRangeReport(0, 10));
console.log(getRangeReport(1, 11));
console.log(getRangeReport(-10, 10));
