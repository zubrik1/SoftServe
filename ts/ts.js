//Define a function, that takes string as argument and prints "Hello, %arg%!"
var hello = function (arg) {
    console.log("Hello, " + arg);
};
hello('everybody');
//Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, sum([1, 2, 3, 4]) should return 10, 
//and multiply([1, 2, 3, 4]) should return 24.
var sum = function (arg) {
    return arg.reduce(function (sum, cur) { return sum + cur; });
};
var multiply = function (arg) {
    return arg.reduce(function (sum, cur) { return sum * cur; });
};
console.log(sum([1, 2, 3, 4, 5]));
console.log(multiply([1, 2, 3, 4, 5]));
//Define a function reverse() that computes the reversal of a string.
//For example, reverse("I am testing") should return the string "gnitset ma I".
var reverse = function (arg) {
    return arg.split('').reverse().join('');
};
console.log(reverse("i'm testing"));
//Define a function isPalindrome() that recognizes palindromes 
//(i.e. words that look the same written backwards). For example, isPalindrome("radar") should return True.
var isPalindrome = function (arg) {
    var a = arg.toLowerCase().replace(/[\W_]/g, '');
    var b = a.split('').reverse().join('');
    return a === b;
};
console.log(isPalindrome("radar"));
console.log(isPalindrome("radio"));
//Define a procedure histogram() that takes an array of integers 
//and prints a histogram to the screen. For example, histogram([4, 9, 7]) should print the following:
var histogram = function (arg) {
    var str = "*";
    for (var i in arg) {
        console.log(str.repeat(arg[i]));
    }
};
histogram([4, 9, 7]);
// Define a function caesarCipher that takes string and key(number), whuch returns encrypted string
var caesarCipher = function (arg, key) {
    var strlen = arg.length;
    var arr = [];
    for (var i = 0; i < strlen; i++) {
        var el = arg.toLowerCase().charCodeAt(i) + key;
        if (el <= 122) {
            arr.push(String.fromCharCode(el));
        }
        else {
            arr.push(String.fromCharCode(el - 26));
        }
    }
    return arr.join('');
};
console.log(caesarCipher('abcdyz', 2));
//define a function diagonalReverse() that takes matrix and returns diagonal-reversed one:
var diagonalReverse = function (arg) {
    var result = [];
    for (var i in arg) {
        var len = 0;
        var ar = [];
        while (len < arg.length) {
            ar.push(arg[len][i]);
            len++;
        }
        result.push(ar);
    }
    return result;
};
console.log(diagonalReverse([[1, 1, 1, 1], [2, 2, 2, 2,], [3, 3, 3, 3,], [4, 4, 4, 4,]]));
console.log(diagonalReverse([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
//Write a function game() number-guessing game, that takes 2 int parameters defining the range. 
//Using some kind of random function to generate random int from the range. 
//While user input isn't equal that number, print "Try again!". If user guess the number, congratulate him and exit.
var game = function () {
    var firstNum = +prompt("Enter first value", '1');
    var secondNum = +prompt("Enter second value", '10');
    var num = Math.floor(Math.random() * (secondNum - firstNum) + firstNum);
    alert("Ok, now try to guess a number");
    function func() {
        var guessNum = +prompt("Guess  a number", firstNum);
        if (guessNum == num) {
            alert("Yes!You did it!");
        }
        else {
            alert("Try again!");
            func();
        }
    }
    func();
};
// game();
// Define a function, which takes a string with N opening brackets ("[") and N closing brackets ("]"), in some arbitrary order.
// Determine whether the generated string is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest
function validFunc(arg) {
    var n = 0;
    for (var i = 0; i < arg.length && n >= 0; i++) {
        if (arg[i] == "[")
            n++;
        else if (arg[i] == "]")
            n--;
    }
    return n === 0;
}
console.log(validFunc('[[]]'));
console.log(validFunc('[[]]]'));
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Python dictionary. 
//Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
var charFreq = function (arg) {
    var items = {};
    var arr = arg.split('');
    var len = arg.length;
    for (var i in arr) {
        if (arg[i] in items) {
            items[arg[i]] += 1;
        }
        else {
            items[arg[i]] = 1;
        }
    }
    return items;
};
console.log(charFreq("abbabcbdbabdbdbabababcbcbabd"));
var decToBin = function (arg) {
    return arg.toString(2);
};
console.log(decToBin(15));
console.log(decToBin(444));
