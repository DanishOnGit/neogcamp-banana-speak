var translateButton=document.querySelector("#btn-translate");
var inputText=document.querySelector("#input");
var outputText=document.querySelector("#output");
var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationUrl(text){
return sereverUrl+"?"+"text="+ text  

}

function clickHandler(){
    var enteredText=inputText.value
    fetch(getTranslationUrl(enteredText))
    .then(response=>response.json())
    .then(json=>console.log(json))
}

translateButton.addEventListener("click",clickHandler);




// "https://api.funtranslations.com/translate/minion.json";