const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'Heil Hitler!';
let idx = 1;
let speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx = (idx % text.length) + 1;
  setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', () => {
  speed = 300 / speedEl.value;
});
