# JavaScript: Unexpected Type Error in Addition

This repository demonstrates a common JavaScript error related to type checking before performing arithmetic operations. The `bug.js` file contains code that will throw a TypeError if either input (`a` or `b`) is not a number, even if it's null.  `bugSolution.js` provides a corrected version with robust type checking and handling.

## Bug Description

The original code lacks input validation.  If `a` or `b` are not numbers (including null or undefined), the addition operation will fail, resulting in a `TypeError`. 

## Solution

The solution incorporates explicit type checking using `typeof` and `isNaN` to ensure both `a` and `b` are numbers before performing the addition.  Null values are gracefully handled by returning 0. This improves the robustness and reliability of the code.