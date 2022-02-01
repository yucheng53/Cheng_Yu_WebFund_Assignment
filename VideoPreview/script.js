console.log("page loaded...");

var video = document.createElement("video");
function play(video){
    video.play();
}

function pause(video) {
    video.pause();
    video.currentTime = 0;
}
