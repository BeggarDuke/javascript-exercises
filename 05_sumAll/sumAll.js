const sumAll = function(a, b) {
    let sum = 0;
    let first = 0;
    let second = 0;
    // 1)check which one is bigger.
    // 2)put the small one at start and add every number between a and b
    // 3) profit???
    if (a < 0 || b < 0 || typeof a !== 'number' || typeof b !== 'number') return 'ERROR';
    if (a < b) {
        first = a;
        second = b;
    }
    else {
        first = b;
        second = a;
    }
    let i = first;
    while (i <= second) {
        sum += i;
        i++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
