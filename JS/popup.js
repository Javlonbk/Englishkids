let popup = document.querySelector('.popup');

setInterval(function() {
    var audio = new Audio('../assets/audio.wav');
    audio.play();
    popup.style.display = 'block';
}, 12000);

function backToLevels() {
    window.location.replace(`${window.location.origin}/pages/level.html`);
    console.log(window.location)
}

function playAgain() {
    window.location.reload();
}