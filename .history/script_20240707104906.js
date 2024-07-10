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
  const solution = hasRealSolution ? [
    (-b + Math.sqrt(discriminant())) / (2 * a),
    (-b - Math.sqrt(discriminant())) / (2 * a)
  ]
}