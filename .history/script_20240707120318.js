document.getElementById('equation-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const equation = document.getElementById('equation-input').value;
  const result = solveEquation(equation);
  displayResults(result);
});

function solveEquation(equation) {
  // Parsing the equation (simple parsing for demonstration)
  const [a, b, c] = [2, 3, -5];

  const discriminant = () => b ** 2 - 4 * a * c;
  const hasRealSolutions = discriminant() >= 0 ? true : false;

  const solutions = hasRealSolutions ? [
    (-b + Math.sqrt(discriminant())) / (2 * a),
    (-b - Math.sqrt(discriminant())) / (2 * a)
  ] : [];

  const result = {
    equation,
    hasRealSolutions,
    solutions
  };

  return result;
}

function displayResults(result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p><strong>Equation:</strong> ${result.equation}</p>
    <p><strong>Has Real Solutions:</strong> ${result.hasRealSolutions}</p>
    <p><strong>Solutions:</strong> ${result.solutions.length ? result.solutions.join(', ') : 'No real solutions'}</p>
  `;
}
