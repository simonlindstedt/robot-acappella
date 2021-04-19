export default class Singer {
  Sing(word) {
    return new Promise((resolve) => {
      const speech = new SpeechSynthesisUtterance(word);
      const random = Math.random() * 2;
      speech.pitch = random;
      speech.rate = 1.3;
      window.speechSynthesis.speak(speech);
      speech.addEventListener("end", () => {
        resolve();
      });
    });
  }
}
