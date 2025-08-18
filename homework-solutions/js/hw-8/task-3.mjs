/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
 const sorted = numbers.slice().sort((a, b) => a - b);

  if (sorted[0] > 1) return 1;
  const missingInside = sorted.find((num, i) => i > 0 && num !== sorted[i - 1] + 1);
  if (missingInside) return sorted[sorted.indexOf(missingInside) - 1] + 1;
  return sorted[sorted.length - 1] + 1;
}



export { findMissingNumber };