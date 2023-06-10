
const repeatString = function(input, num) {
    if (num < 0) return 'ERROR';
    else {
        let input1 = '';
        for (i = 1; i <= num; i++) {
            input1 += input;
      }
    return input1;
    }
};

// Do not edit below this line
module.exports = repeatString;
