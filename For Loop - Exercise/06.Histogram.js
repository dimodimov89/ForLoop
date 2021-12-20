function solve(input) {
  let n = Number(input.shift());

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (i = 0; i < n; i++) {
    let currentNumber = Number(input.shift());
    if (currentNumber < 200) {
      p1++;
    } else if (currentNumber >= 200 && currentNumber <= 399) {
      p2++;
    } else if (currentNumber >= 400 && currentNumber <= 599) {
      p3++;
    } else if (currentNumber >= 600 && currentNumber <= 799) {
      p4++;
    } else if (currentNumber >= 800) {
      p5++;
    }
  }
  console.log(`${((p1 / n) * 100).toFixed(2)}%`);
  console.log(`${((p2 / n) * 100).toFixed(2)}%`);
  console.log(`${((p3 / n) * 100).toFixed(2)}%`);
  console.log(`${((p4 / n) * 100).toFixed(2)}%`);
  console.log(`${((p5 / n) * 100).toFixed(2)}%`);
}
solve(["7", "800", "801", "250", "199", "399", "599", "799"]);
