import * as Tone from 'tone'

window.addEventListener("load", ()=>{
  const button = document.querySelector('button');
  button.onclick = async ()=>{
    await Tone.start();
    play();
  };
});

function play() {
  const synth = new Tone.Synth().toDestination();
  // 音の再生
  for (let i = 0; i < 4; i++) {
    synth.triggerAttackRelease("C4", "8n", `+${i * 0.5}`);
  }
}
