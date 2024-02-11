import * as Tone from 'tone'

window.addEventListener("load", ()=>{
  const button = document.querySelector('button');
  button.onclick = async ()=>{
    await Tone.start();
    play();
  };
});

// ====== 音の再生 =======
function play() {
  const synth = new Tone.Synth().toDestination();
  for (let i = 1; i <= 16; i++) {
    if (
      i % 2 == 0 ||
      i == 11 ||
      i == 15
    ) {
      continue;
    }
    synth.triggerAttackRelease("C4", "8n", `+${i * 0.25}`);
  }
}
// ==== 音の再生ここまで ====

// ====== 画面描画 =======
// Canvas要素を取得
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 四角のサイズと間隔
const height = 50;
const width = height + 10;

let startBeat = 1;
let beatCount = 0;
let length = height;

function connection() {
  return Math.random() < 0.5;
}

function drawNote(beat, length) {
  ctx.fillRect(beat*width - width, 0, length, height); // (x座標、y座標、横幅、高さ)
}

function makeSquare() {
  if (connection()) {
    length += 60;
  } else {
    drawNote(startBeat, length);
    startBeat = beatCount + 1;
    length = height;
  }
  beatCount++;
}

// 16個の四角を横に並べて描画
for (let i = 1; i <= 16; i++) {
  makeSquare();
}
// ==== 画面描画ここまで ====
