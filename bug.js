function foo(x){
  if (x === null) {
    return 0; // Handle null explicitly
  } else if (x < 0) {
    return -1; // Handle negative numbers explicitly
  } else {
    return x; // Return the number as is
  } 
}

console.log(foo(null)); // Output: 0
console.log(foo(-5));  // Output: -1
console.log(foo(10));  // Output: 10
console.log(foo(NaN)); // Output: NaN; This is the uncommon error. This is because the conditional statements do not account for NaN and the default return is NaN.