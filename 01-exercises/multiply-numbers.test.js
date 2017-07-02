/*
    Similar to the add-numbers function, 
    write a function that multiplies any
    number of arguments passed to it.
    some expectations:
        multiply(4, 2)  // --> 8
        multiply(2, 2, 3)  // --> 12
    Write your implementation in TDD
        1. Add a Test (see it failing - RED)
        2. Write Code (to make it pass - GREEN)
        3. Refactor if needed
        4. REPEAT
 */
function multiplies() {
    // this line converts whatever is passed to the function into an array
    // read more here - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    var args = Array.prototype.slice.call(arguments);
    var result = 1;
    for (var i = 0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}

test('multiplies should multiply two numbers', function() {
    var result = multiplies(1, 0);
    expect(result).toEqual(0);
});

test('multiplies should multiply two numbers', function() {
    var result = multiplies(0, 0);
    expect(result).toEqual(0);
});

test('multiplies should multiply two numbers', function() {
    var result = multiplies(1, -2);
    expect(result).toEqual(-2);
});

test('multiplies should multiply two numbers', function() {
    var result = multiplies(4, 5);
    expect(result).toEqual(20);
});