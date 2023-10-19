//Q.1 sum of a function
let arr = [1, 3, 2, 4, 3, 8, 3, 2, 3];
function myname() {
    let sum = 0;
    for (let i = 0; i < arr.length; sum += arr[i++]);
    console.log(sum);
}
myname();
//Q.2 reverse a string
let rev = ['fine', 'the', 'gang', 'milk']
function yourname() {
    rev.reverse();
    console.log(rev)
}
yourname();
//Q.3 checks if a no. is even
let k = 443;
function youfun() {
    if (k === 0 || !!k && !(k % 2)) {
        console.log("true")
    } else (
        console.log("false")
    )
}
youfun();
//Q.4 max no. in an array
let total = [322, 4, 5, 3, 22, 99, 33];
function findmaxvalue() {
    let max = -Infinity;
    for (let i = 0; i < total.length; i++) {
        max = Math.max(max, total[i])
    }
    console.log(max)
}
findmaxvalue()
//Q.5 find no. factorial
let me = 6;
function mefun() {
    let you = 1
    if (me === 0)
        return 1
    for (let i = 2; i <= me; i++)
        you = you * i;
    return you;
}
console.log(mefun());
//Q6 check if a given string is palindrome
let textpalin = "madam"
function checkPalindrome() {
    for (let i = 0; i < array.length; i++) {

    }
}

function checkPalindrome(str) {
    // applying split, revere and join
    const reversedString = str.split('').reverse().join('');
    if (str === reversedString)
        return true;
    else
        return false;
}
result = checkPalindrome("abcd dbca")
if (result == true) {
    console.log("The given string is Palindrome");
}
else {
    console.log("The given string is NOT Palindrome");
}
//Q.7 to remove duplicates
let hii = ["hii", "bye", "nice", "bye", "hii", "hii"];
function myhi(hii) {
    return hii.filter((item,
        index) => hii.indexOf(item) === index);
}
console.log(myhi(hii));
//Q.8 find the second smallest no.
let totalno = [5, 3, 8, 1, 9, 4];
function findSecondMinimum() {
    let min = Infinity
    let secondmin = Infinity
    for (let i = 0; i < totalno.length; i++) {
        min = Math.min(min, totalno[i])
    }
    console.log(min)
    for (let i = 0; i < totalno.length; i++) {
        if (totalno[i] > min) {
            secondmin = Math.min(secondmin, totalno[i])
        }
    }
    console.log(secondmin);
}
findSecondMinimum()
//Q.9 checks if a number is prime no
function primeno(number) {
    if (number <= 0) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}
console.log(primeno(42))
// Q.10 reverse a number
function reverseAnumber() {
    let num1 = 2895830509;
    let result = num1.toString().split('').reverse().join('');
    console.log(result);
}
reverseAnumber()