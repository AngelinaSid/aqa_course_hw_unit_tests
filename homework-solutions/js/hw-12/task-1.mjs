/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/

// 1
function delayTwoSeconds(callback){
  setTimeout(callback, 2000)
}

delayTwoSeconds(() => {
  console.log("2 sec");

});

// 2
const promise = new Promise((resolve, reject) => {
  resolve(1)
}
)

promise
.then ((result) => {
  console.log(result)
});

// 3
const promiseWithReject = new Promise ((resolve, reject) => {
  reject("Promise failed")
});

promiseWithReject
.catch((error) => {
  console.log(error)
})

// 4
function promiseNumber(number){
  if (typeof number === 'number'){
    return new Promise((resolve, reject) => {
      resolve(number)
    })
  }

}

promiseNumber(9)
.then((number) => {
  console.log(number)
})

// 5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((values) => {
  console.log(values)
})
.catch((error) => {
  console.error(error)
})

// 6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled'){
      console.log('Fulfilled:', result.value)
    } else {
      console.log('Rejected:', result.reason)
    }
  });
})

// 7
async function promiseAll () {
  try{
    const values = await Promise.all([
      promiseNumber(1), 
      promiseNumber(2), 
      promiseNumber(3)
    ]);
    console.log(values)
  } catch(error)  {
    console.error('Error:', error)

  }
}
promiseAll();


async function promiseAllSettled () {
  try{
    const results = await Promise.allSettled([
      promiseNumber(1), 
      promiseNumber(2), 
      promiseNumber(3)
    ]);

    results.forEach((result, index) => {
    if (result.status === 'fulfilled'){
      console.log(`Fulfilled [${index}]:`, result.value);
    } else {
     console.log(`Rejected [${index}]:`, result.reason);
    }
    });

    console.log(results);
  } catch(error)  {
    console.error('Error:', error)

  }
}
promiseAllSettled();