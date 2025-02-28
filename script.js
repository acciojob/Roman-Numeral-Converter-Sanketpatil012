function convertToRoman(num) {
  	onst obj = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };

    let result = '';
    
    for (let symbol in obj) {
        while (num >= obj[symbol]) {
            result += symbol;
            num -= obj[symbol];
        }
    }
    
    return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
