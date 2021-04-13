export default class Singer {
  constructor(name, songText = []) {
    this.name = name;
    this.songText = songText;
  }
  Sing(word = "hello") {
    console.log("Hello sing");
    const song = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(song);
  }
  SetSongText(songText) {
    this.songText = songText;
  }
}
