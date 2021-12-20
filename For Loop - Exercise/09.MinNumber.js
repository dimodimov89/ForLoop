function solve(input) {
  let count = Number(input.shift());
  let minNumber = Number.MAX_SAFE_INTEGER;
  let numbers = Number(input.shift());

  for (i = 0; i <= count; i++) {
    if (minNumber > numbers) {
      minNumber = numbers;
    }
    numbers = Number(input.shift());
  }
  console.log(minNumber);
}
solve(["4", "45", "-20", "7", "99"]);
