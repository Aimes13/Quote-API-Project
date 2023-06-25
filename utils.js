const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}

const getQuoteIndex = (index, elementList) => {
  return elementList.findIndex((element) => {
    return element.index;
  });
};

const createElement = (queryArguments) => {
  if (queryArguments.hasOwnProperty('quote') &&
      queryArguments.hasOwnProperty('person')) {
    return {
      'quote': queryArguments.quote,
      'person':  queryArguments.person,
    };
  } else {
    return false;
  }
};

module.exports = {
  getRandomElement,
  createElement
};
