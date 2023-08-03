function receivesAFunction(callback) {
  callback();
}

function thisFunctionHasAName() {
  console.log("This function has a name!");
}

function returnsANamedFunction() {
  //takes no arguments
  //returns a named function
  return thisFunctionHasAName;
}

function returnsAnAnonymousFunction() {
  //takes no arguments
  //returns an anonymous function
  return function () {};
}
