function solve(input) {
  let number = Number(input[0]);
  let outPut = 1;

  for (i = 1; i <= number; i++) {
    outPut *= i;
  }
  console.log(outPut);
}
solve(["4"]);
