// let str1 = "I Iove Apple pie and apple juice ";
// let pattern = /[^1-3]/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern, "_");

// let text = "";
// text += result + "<br>";
// text += result2 + "<br>";
// document.getElementById("show").innerHTML = result;

let str1 = "I love Apple pie and apple juice";
let pattern1 = /apple/i;
let result1 = pattern1.test(str1);

console.log(result1);

let str2 = "Hello World! This is a Test String.";
let pattern2 = /[A-Z]/g;
let result2 = str2.match(pattern2);

console.log(result2);

let str3 = "1 10 100 2000 30000";
let pattern3 = /\b100|200|300|\b/g;
let result3 = str3.match(pattern3);

console.log(result3);

let str4 = "How do you do";
let pattern4 = /o|h/g;
let result4 = str4.replace(pattern4);

console.log(result4);

let str5 = "89139012349";
let pattern5 = /9|0/g;
let result5 = str5.match(pattern5);

console.log(result5);

let str6 = "A AA B BB Aa Bb AAA";
let pattern6 = /\bA{1,2}\b/g;
let result6 = str6.match(pattern6);

console.log(result6);

let str7 = "AA BB 12 345";
let pattern7 = /\b\d+\b/g;
let result7 = str7.match(pattern7);

console.log(result7); 
