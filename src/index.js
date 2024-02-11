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

function getTrueOrFalse() {
  return Math.random() < 0.5;
}
function wheterOrNotConnection() {
  return;
}

// Canvas要素を取得
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// 四角のサイズと間隔
const squareSize = 50;
const spacing = 10;

// 16個の四角を横に並べて描画
for (let i = 1; i <= 16; i++) {
  if (
    i % 2 == 0 ||
    i == 11 ||
    i == 15
  ) {
    continue;
  }
  const x = (i-1) * (squareSize + spacing);
  const y = 0;
  // 四角を描画
  ctx.fillRect(x, y, squareSize, squareSize);
}

// ==== 画面描画ここまで ====
