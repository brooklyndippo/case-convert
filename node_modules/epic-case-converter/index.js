// Step 1: parseCase - strip the styling from the string and return the string in all lowercase letters with spaces
function parseCase(str) {
  // add spaces before capital letters if not screaming snake case
  if (str !== str.toUpperCase()) {
    str = str.replace(/([A-Z])/g, ' $1');
  }
  // replace hyphens with spaces
  str = str.replace(/-/g, ' ');
  // replace underscores with spaces
  str = str.replace(/_/g, ' ');
  // remove excess spaces
  str = str.replace(/\s+/g, ' ').trim();
  // make everythin  str = str.toLowerCase();
  str = str.toLowerCase()
  return str;
}

// Step 2: convertCase - convert the string to the desired case
function convertCase(str, caseType) {
  str = parseCase(str);
  switch (caseType) {
    case 'camel':
      return camelCase(str);
    case 'pascal':
      return pascalCase(str);
    case 'snake':
      return snakeCase(str);
    case 'kebab':
      return kebabCase(str);
    case 'train':
      return trainCase(str);
    case 'screaming-snake':
      return screamingSnakeCase(str);
    case 'upper':
      return str.replaceAll(' ', '').toUpperCase();
    case 'lower':
      return str.replaceAll(' ', '');
    default:
      return str;
  }
}

// camel case - first word lowercase, others uppercase, no spaces
function camelCase(str) {
  const capitalWords = capitalizeWords(str);
  let camelCaseStr = capitalWords[0].toLowerCase();
  camelCaseStr += capitalWords.slice(1);
  camelCaseStr = camelCaseStr.replaceAll(' ', '');
  return camelCaseStr;
}

// snake case - all lowercase, spaces replaced with underscores
function snakeCase(str) {
  const snakeString = str.replaceAll(' ', '_');
  return snakeString;
}

// kebab case - all lowercase, spaces replaced with hyphens
function kebabCase(str) {
  const kebabString = str.replaceAll(' ', '-');
  return kebabString;
}

// pascal case - first letter of each word uppercase, no spaces
function pascalCase(str) {
  const capitalWords = capitalizeWords(str);
  const pascalStr = capitalWords.replaceAll(' ', '');
  return pascalStr;
}

// train case - first letter of each word uppercase, spaces replaced with hyphens
function trainCase(str) {
  const capitalWords = capitalizeWords(str);
  const trainStr = capitalWords.replaceAll(' ', '-');
  return trainStr;
}

// screaming snake case - all uppercase, spaces replaced with underscores
function screamingSnakeCase(str) {
  const snakeStr = snakeCase(str);
  const screamingSnakeStr = snakeStr.toUpperCase();
  return screamingSnakeStr;
}


// helper function: capitalize first letter of a word
function capitalize(str) {
  const strArray = str.split('');
  strArray[0] = strArray[0].toUpperCase();
  const capitalString = strArray.join('');
  return capitalString;
}

// helper function: capitalize each word
function capitalizeWords(str) {
  let capitalizedString = [];
  const words = str.split(' ');
  words.forEach((word) => {
    const capitalWord = capitalize(word);
    capitalizedString.push(capitalWord);
  });
  const capitalWords = capitalizedString.join(' ');
  return capitalWords;
}


module.exports = convertCase;
