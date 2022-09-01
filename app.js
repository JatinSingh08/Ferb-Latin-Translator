let inputBox = document.querySelector('.input-box');
let translateButton = document.querySelector('#translate-btn');
let outputBox = document.querySelector('.output-box');

let url = 'https://api.funtranslations.com/translate/ferb-latin.json'

function getTranslateUrl(input){
  return `${url}?text=${input}`
}

function errorHandler(error) {
  console.log('Error occured', error);
  alert('something went wrong')
}

translateButton.addEventListener('click',clickHandler);

function clickHandler() {
  let inputValue = inputBox.value;
  fetch(getTranslateUrl(inputValue))
  .then(response => response.json())
  .then(json => {
    let translatedText = json.contents.translated;
    outputBox.innerHTML = translatedText;
    console.log(translatedText)
  })
  .catch(errorHandler)
}