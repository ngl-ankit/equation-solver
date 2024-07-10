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

  solutionSteps.push(`Given equation: ${equation}`);

  solutionSteps.push(`Step 1: Calculate Discriminant (D) = ${b}^2 - 4 * ${a} * ${c}`);
  solutionSteps.push(`D = ${discriminant}`);

  if (discriminant > 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    solutions = [x1, x2];
    solutionSteps.push(`Step 2: Apply the Quadratic Formula:`);
    solutionSteps.push(`x1 = (-${b} + √${discriminant}) / (2 * ${a}) = ${x1}`);
    solutionSteps.push(`x2 = (-${b} - √${discriminant}) / (2 * ${a}) = ${x2}`);
  } else if (discriminant === 0) {
    const x = -b / (2 * a);
    solutions = [x];
    solutionSteps.push(`Step 2: Apply the Quadratic Formula:`);
    solutionSteps.push(`x = -${b} / (2 * ${a}) = ${x}`);
  } else {
    solutionSteps.push(`Step 2: Since D < 0, no real solutions exist.`);
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
    <h2>Results:</h2>
    <div class="solution-steps">
      ${result.solutionSteps.map(step => `<p>${step}</p>`).join('')}
    </div>
    <p><strong>Discriminant:</strong> ${result.discriminant}</p>
    ${result.solutions.length > 0 ? `
    <p><strong>Solutions:</strong> ${result.solutions.join(', ')}</p>` : ''}
  `;
}
