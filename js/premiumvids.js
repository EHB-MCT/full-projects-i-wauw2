function log() {
    var naamEen = document.getElementById("premium").value;
    var wachtwoord = document.getElementById("ww").value;
    if (naamEen == "Test" && wachtwoord == "Test123" || naamEen == "Jelle" && wachtwoord == "Ditiseentest") {
        document.getElementById("vid1").href = "https://www.andleuven.com/en/video-1-wat-het-nieuwe-goud";
        document.getElementById("vid1").innerHTML = "https://www.andleuven.com/en/video-1-wat-het-nieuwe-goud";
        document.getElementById("vid2").href = "https://www.andleuven.com/en/video-2-gerecycleerd-karton-papier";
        document.getElementById("vid2").innerHTML = "https://www.andleuven.com/en/video-2-gerecycleerd-karton-papier";
        document.getElementById("vid3").href = "https://www.andleuven.com/en/video-3-staalslakmortel";
        document.getElementById("vid3").innerHTML = "https://www.andleuven.com/en/video-3-staalslakmortel";
        document.getElementById("vid4").href = "https://www.andleuven.com/en/video-4-recuperatie-plastics";
        document.getElementById("vid4").innerHTML = "https://www.andleuven.com/en/video-4-recuperatie-plastics";
        document.getElementById("vid5").href = "https://www.andleuven.com/en/video-5-algen-gietporselein";
        document.getElementById("vid5").innerHTML = "https://www.andleuven.com/en/video-5-algen-gietporselein";
    }
}


/*original code by WAUW01 */