function foo(a, b) {
  //Check if either a or b is null
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  //Check if a and b are numbers
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return NaN; // Handle non-numeric values
  }
  return a + b; 
} 