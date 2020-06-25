
    var playBtn = document.getElementById("play");
    var stopBtn = document.getElementById("stop");
    

    function onClickPlay() {
        var textArea = document.getElementById("dropped").value;
        //console.log(textArea);
        tts = new SpeechSynthesisUtterance(textArea);
        //console.log(tts)
        speechSynthesis.speak(tts);
        
    }

    function onClickStop() {
        speechSynthesis.cancel();
    }
    

