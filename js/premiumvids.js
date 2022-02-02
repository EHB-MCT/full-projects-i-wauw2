function log() {
    var naamEen = document.getElementById("premium").value;
    var wachtwoord = document.getElementById("ww").value;
    if (naamEen == "Test" && wachtwoord == "Test123" || naamEen == "Jelle" && wachtwoord == "Ditiseentest") {
        document.getElementById("vid1").href = "https://www.andleuven.com/en/video-1-wat-het-nieuwe-goud";
        document.getElementById("vid1").innerHTML = "Video 1: Wat is het nieuwe goud?";
        document.getElementById("vid2").href = "https://www.andleuven.com/en/video-2-gerecycleerd-karton-papier";
        document.getElementById("vid2").innerHTML = "Video 2: Gerecycleerd karton & papier";
        document.getElementById("vid3").href = "https://www.andleuven.com/en/video-3-staalslakmortel";
        document.getElementById("vid3").innerHTML = "Video 3: Staalslakmortel";
        document.getElementById("vid4").href = "https://www.andleuven.com/en/video-4-recuperatie-plastics";
        document.getElementById("vid4").innerHTML = "Video 4: Recuperatie plastics";
        document.getElementById("vid5").href = "https://www.andleuven.com/en/video-5-algen-gietporselein";
        document.getElementById("vid5").innerHTML = "Video 5: Algen & gietporselein";
    }
}


/*original code by WAUW01 */