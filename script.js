//create a variable which takes a string
let paragraphElement = document.querySelector("#paragraph");
let btnCount = document.querySelector(".btn-count");
let display = document.querySelector(".display");

//write a function to output of words
function countOccurences(para) {
  let words = para.split(" ");
  let wordCount = new Map();

  words.forEach((element) => {
    if (wordCount.has(element)) {
      wordCount.set(element, wordCount.get(element) + 1);
    } else {
      wordCount.set(element, 1);
    }
  });
  wordCount.forEach((word, count) => {
    display.innerHTML += `${word}=> ${count}<br>`;
  });

  console.log(wordCount);
  return wordCount;
}

btnCount.addEventListener("click", () => {
  if (paragraphElement.value !== "") {
    display.textContent = "";
    countOccurences(paragraphElement.value);
  } else {
    display.textContent = "Please enter a string";
  }
});
