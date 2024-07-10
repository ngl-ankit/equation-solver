// Topic 1: Default Parameters
function solveEquation(equation = "2x^2 + 3x - 5 = 0") {
  // Topic 2: Template Literals
  console.log(`Solving equation: ${equation}`);
  // Topic 3: Destructuring Assignment
  const [a, b, c] = [2, 3, -5];

  // Topic 4: Arrow Functions
  const discriminant = () => b ** 2 - 4 * a * c;
  // Topic 5: Ternary Operator
  const hasRealSolution = discriminant() >= 0 ? true : false;
  // Topic 6: Rest/Spread Operator
  const solutions = hasRealSolution
    ? [
      (-b + Math.sqrt(discriminant())) / (2 * a),
      (-b - Math.sqrt(discriminant())) / (2 * a),
    ]
    : [];
  // Topic 7: Object Literal
  const result = { equation, hasRealSolution, solutions };
  // Topic 8: Optional Chaining
  console.log(`Solutions: ${result.solutions?.join(",")}`);
  return result;
  // Topic 9: Tagged Templates
  function highlight(strings, ...values) {
    return strings.reduce(
      (acc, str, i) => `${acc}${str}<b>${values[i] || ""}</b>`,
      ""
    );
  };
  const equationResult = solveEquation();

  // Topic 10: for...of Loop
  for (const solution of equationResult.solutions) {
    // Topic 11: BigInt
    const bigIntSolution = BigInt(solution);
    console.log(`BigInt solution : ${bigIntSolution}`);
  }
  // Topic 12: Set
  const uniqueSolutions = new Set(equationResult.solutions);
  console.log(`Unique Solutions: ${[...uniqueSolutions]}`);
  // Topic 13: WeakSet
  const weakSet = new WeakSet();
  const obj = { equation: "2x^2 + 3x - 5 = 0" };
  weakSet.add(obj);
  console.log(`WeakSet has obj: ${weakSet.has(obj)}`);

  // Topic 14: Map
}
