/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") return false;
  word = word.toLowerCase();
  let reversedWord = "";
  for (let i = word.length - 1; i >= 0; i--){
    reversedWord += word[i];
    }
     return reversedWord === word;
    }
// console.log(isPalindrom("level"));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== "string") {
    return [];
  };
  const sentenceToArray = sentence.trim().split(/\s+/);
  if (sentenceToArray.length === 1 || sentenceToArray[0] === ""){
    return [];
  }

  let longestWord = [];
  let maxLength = 0;
  for (let word of sentenceToArray) {
    if (word.length > maxLength) {
      maxLength = word.length
      longestWord = [word];
    } else if (word.length === maxLength) {
      longestWord.push(word)
  
    }
  }
  return longestWord;
}
// console.log(findLongestWords("It was a little bit hard"));

export { isPalindrom, findLongestWords };
