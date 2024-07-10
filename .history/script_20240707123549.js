document.getElementById('equation-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const equation = document.getElementById('equation-input').value;
  const result = solveQuadraticEquation(equation);
  displayResults(result);
});

function solveQuadraticEquation(equation) {
  const trimmedEquation = equation.replace(/\s/g, ''); // Remove all whitespace
  const regex = /^([-+]?\d*\.?\d*)\*?x\^2([-+]?\d*\.?\d*)\*?x([-+]?\d*\.?\d*)=?0$/;
  const matches = trimmedEquation.match(regex);

  if (!matches) {
    return { equation, error: 'Invalid equation format' };
  }

  const a = parseFloat(matches[1]) || 1;
  const b = parseFloat(matches[2]) || 0;
  const c = parseFloat(matches[3]) || 0;

  const discriminant = b * b - 4 * a * c;

  let solutions = [];
  let solutionSteps = [];

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    solutions = [x1, x2];
    solutionSteps.push(`Discriminant (D) = ${discriminant}`);
    solutionSteps.push(`x1 = ${x1}`);
    solutionSteps.push(`x2 = ${x2}`);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    solutions = [x];
    solutionSteps.push(`Discriminant (D) = ${discriminant}`);
    solutionSteps.push(`x = ${x}`);
  } else {
    solutionSteps.push(`Discriminant (D) = ${discriminant}`);
    solutionSteps.push(`No real solutions (D < 0)`);
  }

  return {
    equation,
    solutions,
    discriminant,
    solutionSteps
  };
}

function displayResults(result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = `
    <p><strong>Equation:</strong> ${result.equation}</p>
    ${result.error ? `<p><strong>Error:</strong> ${result.error}</p>` : `
    <div class="solution-steps">
      <p><strong>Steps to Solve:</strong></p>
      <ul>
        ${result.solutionSteps.map(step => `<li>${step}</li>`).join('')}
      </ul>
    </div>
    <p><strong>Discriminant:</strong> ${result.discriminant}</p>
    ${result.solutions.length > 0 ? `
    <p><strong>Solutions:</strong> ${result.solutions.join(', ')}</p>` : ''}
  `;
}
