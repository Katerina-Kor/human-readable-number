module.exports = function toReadable (number) {
let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let x = number.toString();
let length = x.length;

if (number < 20) return numbers[number];
if (length == 2 && number % 10 == 0) return dozens[x[0] - 1];
if (length == 2) return `${dozens[x[0] - 1]} ${numbers[x[1]]}`;
if (length == 3 && number % 100 == 0) return `${numbers[x[0]]} hundred`;
if (length == 3 && number % 10 == 0) return `${numbers[x[0]]} hundred ${dozens[x[1] - 1]}`;
if (length == 3 && x[1] == 0) return `${numbers[x[0]]} hundred ${numbers[x[2]]}`;
if (length == 3 && x[1] == 1) return `${numbers[x[0]]} hundred ${numbers[10 + Number(x[2])]}`;
if (length == 3) return `${numbers[x[0]]} hundred ${dozens[x[1] - 1]} ${numbers[x[2]]}`;
}
