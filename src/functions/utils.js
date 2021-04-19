function stringToWordsArray(string) {
  return string.split(/\s+/);
}
async function getLyrics(artist, song) {
  const baseUrl = "https://api.lyrics.ovh/v1";
  const response = await fetch(`${baseUrl}/${artist}/${song}`);
  return await response.json();
}

export { stringToWordsArray, getLyrics };
