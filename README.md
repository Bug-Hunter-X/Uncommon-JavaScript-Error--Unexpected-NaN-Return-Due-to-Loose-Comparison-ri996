# Uncommon JavaScript Error: Unexpected NaN Return

This repository demonstrates a subtle JavaScript error related to how the language handles `NaN` (Not a Number) in conditional statements.  The `foo` function aims to handle different input types, but neglects explicit handling for `NaN`, leading to an unexpected `NaN` return instead of a more graceful error handling or a default value.

The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version demonstrating best practices for handling `NaN` to avoid this issue.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and observe the unexpected `NaN` output in the console for the input `NaN`.
3. Compare this with the corrected handling in `bugSolution.js`.

## Solution
The solution involves adding explicit checks for `isNaN()` to handle `NaN` values appropriately. This prevents the unexpected behavior and improves the robustness of the function.