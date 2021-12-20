function solve(input) {
  let number = Number(input[0]);
  let outPut = "";

  for (let i = 1; i <= 10; i++) {
    outPut += `${i} * ${number} = ${i * number}\n`;
  }

  console.log(outPut);
}
solve(["5"]);
