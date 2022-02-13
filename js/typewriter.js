import Typewriter from 'typewriter-effect/dist/core';

new Typewriter('typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
});

var app = document.getElementById('typewriter');

var customNodeCreator = function(character) {
  return document.createTextNode(character);
}

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

typewriter
  .typeString('A simple yet powerful native javascript')
  .pauseFor(300)
  .start();