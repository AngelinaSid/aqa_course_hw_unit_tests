/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
let firstNumber = 5;
firstNumber = String(firstNumber);
let secondNumber = firstNumber + firstNumber;
let thirdNumber = firstNumber + firstNumber + firstNumber;
console.log(Number(firstNumber) + Number(secondNumber) + Number(thirdNumber))
