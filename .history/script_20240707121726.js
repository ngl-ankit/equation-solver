document.getElementById('equation-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const equation = document.getElementById('equation-input').value;
  const result = solveEquation(equation);
  displayResults(result);
});

function solveEquation(equation) {
  // Adjusted regex to handle multiplication symbol (*) and various spacings
  const regex = /([-+]?\d*\.?\d*)\s*\*?\s*x\^2\s*([-+]?\d*\.?\d*)\s*\*?\s*x\s*([-+]?\d*\.?\d*)\s*=\s*0/;
  const matches = equation.match(regex);
  if (!matches) {
    return { equation, error: 'Invalid equation format' };
  }

  const a = parseFloat(matches[1]) || 1;
  const b = parseFloat(matches[2]) || 0;
  const c = parseFloat(matches[3]) || 0;

  // Calculate the discriminant
  const discriminant = b ** 2 - 4 * a * c;
  const hasRealSolutions = discriminant >= 0;
  const solutions = hasRealSolutions ? [
    (-b + Math.sqrt(discriminant)) / (2 * a),
    (-b - Math.sqrt(discriminant)) / (2 * a)
  ] : [];

  return {
    equation,
    hasRealSolutions,
    solutions,
    discriminant
  };
}

function displayResults(result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p><strong>Equation:</strong> ${result.equation}</p>
    ${result.error ? `<p><strong>Error:</strong> ${result.error}</p>` : `
    <p><strong>Discriminant:</strong> ${result.discriminant}</p>
    <p><strong>Has Real Solutions:</strong> ${result.hasRealSolutions}</p>
    <p><strong>Solutions:</strong> ${result.solutions.length ? result.solutions.join(', ') : 'No real solutions'}`}
  `;
}
