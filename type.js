let text = document.getElementById('typewriter');
// let text = document.querySelector('h2')

const textArr = text.textContent.split('');

console.log(textArr);

let timeLoop;

text.innerHTML = '';

function typewriterEff() {
  if (textArr.length > 0) {
    text.innerHTML += textArr.shift();
  } else {
    clearTimeout(timeLoop);
  }
  timeLoop = setTimeout(
    'typewriterEff()',
    Math.floor(Math.random() * (200, 250))
  );
}
typewriterEff();
