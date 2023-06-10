const removeFromArray = function(arrayToCut, ...elementValue) {
    for (const currentValue of elementValue) {
        for (let i = 0; i < arrayToCut.length; i++) {
            if (arrayToCut[i] === currentValue) {
            arrayToCut.splice(i, 1);
            }
        }
    }
    return arrayToCut;

};

// Do not edit below this line
module.exports = removeFromArray;
