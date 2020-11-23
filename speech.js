function speech() {

        var msg = new SpeechSynthesisUtterance();
        msg.text = document.getElementById("directions").innerHTML;
        window.speechSynthesis.speak(msg);

  }

  function fastspeech() {

    var msg = new SpeechSynthesisUtterance();
    msg.text = document.getElementById("directions").innerHTML;
    msg.rate = 4;
    window.speechSynthesis.speak(msg);

}