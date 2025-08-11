/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (number <= 9) {
    return number;
  } 

  let sum = 0;

  while (number > 0){
  sum += number % 10;               
  number = Math.floor(number / 10);
}
   return digitalRoot(sum);
}

export { digitalRoot };
