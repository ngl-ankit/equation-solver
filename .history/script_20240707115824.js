// Topic 1: Default Parameters
function solveEquation(equation = '2x^2 + 3x - 5 = 0') {
  // Topic 2: Template Literals
  console.log(`Solving equation: ${equation}`);

  // Topic 3: Destructuring Assignment
  const [a, b, c] = [2, 3, 5];

  // Topic 4: Arrow Functions
  const discriminant = () => b ** 2 - 4 * a * c;

  // Topic 5: Ternary Operator
  const hasRealSolutions = discriminant() >= 0 ? true : false;

  // Topic 6: Rest/Spread Operator
  const solutions = hasRealSolutions ? [
    (-b + Math.sqrt(discriminant())) / (2 * a),
    (-b - Math.sqrt(discriminant())) / (2 * a)
  ] : [];

  // Topic 7: Object Literals
  const result = {
    equation,
    hasRealSolutions,
    solutions
  };

  // Topic 8: Optional Chaining
  console.log(`Solutions: ${result.solutions?.join(', ')}`);

  return result;
}

// Topic 9: Tagged Templates
function highlight(strings, ...values) {
  return strings.reduce((acc, str, i) => `${acc}${str}<b>${values[i] || ''}</b>`, '');
}

const equationResult = solveEquation();

// Topic 10: for...of Loop
for (const solution of equationResult.solutions) {
  // Topic 11: BigInt
  const bigIntSolution = BigInt(solution);
  console.log(`BigInt Solution: ${bigIntSolution}`);
}

// Topic 12: Set
const uniqueSolutions = new Set(equationResult.solutions);
console.log(`Unique Solutions: ${[...uniqueSolutions]}`);

// Topic 13: WeakSet
const weakSet = new WeakSet();
const obj = { equation: '2x^2 + 3x - 5 = 0' };
weakSet.add(obj);
console.log(`WeakSet has obj: ${weakSet.has(obj)}`);

// Topic 14: Map
const solutionMap = new Map();
solutionMap.set('solution1', equationResult.solutions[0]);
solutionMap.set('solution2', equationResult.solutions[1]);
console.log(`Map solutions: ${[...solutionMap.values()]}`);

// Topic 15: WeakMap
const weakMap = new WeakMap();
weakMap.set(obj, equationResult.solutions);
console.log(`WeakMap has solutions: ${weakMap.get(obj)}`);

// Topic 16: Symbol
const uniqueKey = Symbol('key');
const symObj = {
  [uniqueKey]: 'Unique Symbol Key'
};
console.log(`Symbol value: ${symObj[uniqueKey]}`);

// Topic 17: Proxy and Reflect
const handler = {
  get(target, prop, receiver) {
    console.log(`Getting property: ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Setting property: ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
};

const proxyObj = new Proxy(equationResult, handler);
proxyObj.equation = '3x^2 + 6x - 9 = 0';
console.log(proxyObj.equation);

// Topic 18: Promise
const promise = new Promise((resolve, reject) => {
  const x = 1;
  const y = 2;
  if (x + y === 3) {
    resolve('Promise resolved');
  } else {
    reject('Promise rejected');
  }
});

promise.then(console.log).catch(console.error);

// Topic 19: Async/Await
async function asyncFunction() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

asyncFunction();

// Topic 20: Intl API
const date = new Date();
const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date);
console.log(`Formatted date: ${formattedDate}`);
