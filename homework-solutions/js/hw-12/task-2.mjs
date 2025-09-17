/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

*/

async function createTodo(data) {
   try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(data),
      });

      if (response.status !== 201){
         throw new Error(`Incorrect status code: ${response.status}`)
      }
      
      const result = await response.json();

      if (result.id !== 201){
         throw new Error(`Incorrect id: ${result.id}` )
      }

      return result;
   } catch(error){
      console.error('Error:', error.message)
   } finally {
      console.log("Функция завершена")
   }

   }

