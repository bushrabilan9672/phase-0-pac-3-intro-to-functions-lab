// 1) shout(string)
// receives one argument and returns it in all caps
function shout(string) {
  return string.toUpperCase();
}

// 2) whisper(string)
// receives one argument and returns it in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// 3) logShout(string)
// logs the string in all caps
function logShout(string) {
  console.log(string.toUpperCase());
}

// 4) logWhisper(string)
// logs the string in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// 5–7) sayHiToHeadphonedRoommate(string)
function sayHiToHeadphonedRoommate(string) {
  if (string === "Let's have dinner together!") {
    return "I would love to!";
  }

  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  }

  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  }
}
