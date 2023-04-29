document.getElementById('Beat').onclick = partyBeat
document.getElementById('Combo').onclick = partyCombo
document.getElementById('Cube').onclick = partyCube
document.getElementById('Garam').onclick = partyGaram
document.getElementById('Gum').onclick = partyGum
document.getElementById('Mew').onclick = partyMew
document.getElementById('Piranha').onclick = partyPiranha
document.getElementById('Pots').onclick = partyPots
document.getElementById('Slate').onclick = partySlate
document.getElementById('Tab').onclick = partyTab

function partyBeat() {
  var video = document.createElement('video');
  video.src = 'video/New project/Beat - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}


function partyCombo() {
  var video = document.createElement('video');
  video.src = 'video/New project/Combo - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyCube() {
  var video = document.createElement('video');
  video.src = 'video/New project/CUBE - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyGaram() {
  var video = document.createElement('video');
  video.src = 'video/New project/GARAM - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyGum() {
  var video = document.createElement('video');
  video.src = 'video/New project/jsr 2 - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyMew() {
  var video = document.createElement('video');
  video.src = 'video/New project/MEW - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyPiranha() {
  var video = document.createElement('video');
  video.src = 'video/New project/PIRANHA - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyPots() {
  var video = document.createElement('video');
  video.src = 'video/New project/POTS - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partySlate() {
  var video = document.createElement('video');
  video.src = 'video/New project/SLATE - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

function partyTab() {
  var video = document.createElement('video');
  video.src = 'video/New project/TAB - Made with Clipchamp.mp4';
  video.autoplay = true;
  document.querySelector('body').appendChild(video);
}

var video = document.createElement('video');
video.src = 'video/clip.mp4';
video.autoplay = true;
video.loop = true;
video.addEventListener('play', function() {
  var canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  var context = canvas.getContext('2d');
  var blur = 10;
  function updateBackground() {
    context.drawImage(video, 0, 0);
    stackBlurCanvasRGBA(canvas, 0, 0, canvas.width, canvas.height, blur);
    document.body.style.backgroundImage = 'url(' + canvas.toDataURL() + ')';
    requestAnimationFrame(updateBackground);
  }
  updateBackground();
});