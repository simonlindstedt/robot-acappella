export default class Singer {
  constructor() {
    this.position = 0;
  }
  Sing(word, index) {
    return new Promise((resolve) => {
      this.position = index;
      const speech = new SpeechSynthesisUtterance(word);
      window.speechSynthesis.speak(speech);
      speech.addEventListener("end", () => {
        console.log("speech end");
        resolve();
      });
    });
  }
}
