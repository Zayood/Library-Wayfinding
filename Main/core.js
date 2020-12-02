
function goLanguage() {

    let page = getInfo();
    var url;
    if (page["node"]){
    url = "Language.html?node=" + page["node"] + "&audio=false";
    }
    else{
        url = "Language.html";
    }

    location.href = url;
}

function goLanguageA() {

    let page = getInfo();
    var url;
    if (page["node"]){
    url = "Language.html?node=" + page["node"] + "&audio=true";
    }
    else{
        url = "Language.html";
    }

    location.href = url;
}

function goDestination() {

    let page = getInfo();
    var url;
    if (page["audio"] === "true"){ url = "../English Navigation/Landing_page_" + page["node"] + ".html?audio=true"; }
    else{ url = "../English Navigation/Landing_page_" + page["node"] + ".html";}
    location.href = url;
}

function goDestinationF() {


    let page = getInfo();
    var url;
    if (page["audio"] === "true"){ url = "../French Navigation/FR_landing_page_" + page["node"] + ".html?audio=true"; }
    else{ url = "../French Navigation/FR_landing_page_" + page["node"] + ".html";}
                
    location.href = url;
}


function goDirections(){
    location.href = "Directions.html";
}

function reset(){
    location.href = "index.html";
}

function ttsIndex() {

    var msg = new SpeechSynthesisUtterance();
    msg.lang = "en-US";
    msg.volume = 0.4;
    msg.rate = 1.6;
    msg.text = 'Welcome to the U Ottawa Library Wayfinding System. Please click on the type of directions you would like. Green for Text or Blue for Audio.';
    speechSynthesis.speak(msg);
    msg.lang = "fr-CA";
    msg.rate = 1.3;
    msg.text = "Bienvenue au système d'orientation de la bibliothèque U Ottawa. Veuillez cliquer sur quel type de direction vous voulez. Vert pour Texte ou Bleu pour audio.";
    speechSynthesis.speak(msg);
  }


function showtts(){

    var x = document.getElementById("ttsButton");
    let p = getInfo();

    if (p["audio"] === "true") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}
function ttsLang() {

  var msg = new SpeechSynthesisUtterance();
  msg.lang = "en-US";
  msg.volume = 0.4;
  msg.rate = 1.6;
  msg.text = "Choose your language. Green for English or Blue for French";
  speechSynthesis.speak(msg);
  msg.lang = "fr-CA";
  msg.rate = 1.3;
  msg.text = "Choisissez votre langue. Vert pour Englais ou Bleu pour Français";
  speechSynthesis.speak(msg);

}

function read(){
    var msg = new SpeechSynthesisUtterance();
    msg.lang = "en-US";
    msg.volume = 0.4;
    msg.rate = 1.6;
    msg.text = document.getElementById("dir").innerHTML;
    speechSynthesis.speak(msg);
}


function getInfo(){

    var urlParams;
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

    return urlParams;
}
