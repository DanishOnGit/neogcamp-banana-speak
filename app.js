var translateButton=document.querySelector("#btn-translate");
var inputText=document.querySelector("#input");
var outputText=document.querySelector("#output");
var bodyy=document.querySelector("body")
function translatorOn(){

    var x= inputText.value
   outputText.innerText=x;

}
translateButton.addEventListener("click",translatorOn);