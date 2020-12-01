var flag = true;
 
 
 function ttsIndex() {

    var msg = new SpeechSynthesisUtterance();
    msg.volume = 0.4;
    msg.rate = 1.5;
    msg.text = 'Welcome to the U Ottawa Library Wayfinding System. Please click on the type of directions you would like. Green for Text or Blue for Audio.';
    speechSynthesis.speak(msg);
    msg.lang = "fr-CA";
    msg.rate = 1.3;
    msg.text = "Bienvenue au système d'orientation de la bibliothèque U Ottawa. Veuillez cliquer sur quel type de direction vous voulez. Vert pour Texte ou Bleu pour audio.";
    speechSynthesis.speak(msg);
  
}

function ttsLang() {

  var msg = new SpeechSynthesisUtterance();
  msg.rate = 1.5;
  msg.text = "Choose your language. Green for English or Blue for French";
  speechSynthesis.speak(msg);
  msg.lang = "fr-CA";
  msg.rate = 1.3;
  msg.text = "Choisissez votre langue. Vert pour Englais ou Bleu pour Français";
  speechSynthesis.speak(msg);

}

