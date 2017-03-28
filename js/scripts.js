//factorial, recursive style
function factorial(number) {
  var accumulator = 1
  while (number>1) {
    accumulator = accumulator * number;
    number -= 1;
  }
  return accumulator
}

//factorial, for-loop style
function factorialFor(number) {
  countingArray = []
  for (var i = 1; i <= number; i++) {
    countingArray.push(i)
  }
  var accumulator = 1
  for (var i = 0; i < countingArray.length; i++) {
    accumulator = accumulator * countingArray[i]
  }
  return accumulator
}


// prime
function prime (number) {
  var list = [];
  var multiples = []

  for (var i = 2; i <= number; i++) {
    list.push(i);
  }
  console.log(list)
  for (var prime = 2; prime < (Math.sqrt(number)); prime++) {
    for (var i = 2; i <= number/prime; i++) {
      multiples.push(i * prime);
    }
  } console.log(multiples)

  for (i = 0; i < multiples.length; i++) {
    if (list.indexOf(multiples[i]) > 0) {
      list.splice(list.indexOf(multiples[i]), 1);
    }
    console.log(list)
  }
  return list
}
prime(20);
// function isInArray(value, array )
// questions - can I make the mutiples by having it increment by the number rather than one?
// can I make a multiples list for each number, and then use the following on each loop?:
//   var filtered = list.filter(isInArray(array))
