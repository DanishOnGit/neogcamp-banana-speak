const translateButton=document.querySelector("#btnTranslate");
const inputText=document.querySelector("#input");
const outputText=document.querySelector("#output");
// var serverUrl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
const serverUrl="https://api.funtranslations.com/translate/minion.json";

//get server url with query which is to be translated
function getTranslationUrl(text){
return serverUrl+"?"+"text="+ text  

}
//error alert
function errorHandler(error){
    alert("Sorry error occured. Something wrong with server. Try after some time!"+ error)
}

//processing
function clickHandler(){
    let enteredText=inputText.value
    fetch(getTranslationUrl(enteredText))
    .then(response=>response.json())
    .then(json=> {
        let translatedText=json.contents.translated;
        outputText.innerText=translatedText;
    })
    .catch(errorHandler)
}

translateButton.addEventListener("click",clickHandler);




// "https://api.funtranslations.com/translate/minion.json";
