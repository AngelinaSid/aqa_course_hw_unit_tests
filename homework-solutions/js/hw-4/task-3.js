/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/
let minAge = 18; 
let maxAge = 60;
let age = "61"; 
let num = Number(age);

if (isNaN(num)) {
  console.log("Incorrect data type")
} else {
  if (num < minAge) {
    console.log(`You don't have access cause your age is ${num} It's less then ${minAge}`)
  } else if (num >= minAge && num < maxAge) {
    console.log("Welcome!")
  } else if (num > maxAge){
    console.log("Keep calm and look Culture channel")
  } else {
    console.log("Technical work")
}

}