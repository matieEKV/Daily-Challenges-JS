/*Given a secret message string, and an integer representing the number of 
letters that were used to shift the message to encode it, return the decoded string. */

decode("Byffi Qilfx!", 20);

function decode(message, shift) {
  let decodedMessage = "";
  let decoded = 0;
  for (let i = 0; i < message.length; i++) {
    let sDec = message.charCodeAt(i);
    if (sDec >= 65 && sDec <= 90) {
      let upperCase = sDec - 65;
      decoded = ((upperCase - shift + 26) % 26) + 65;
    } else if (sDec >= 97 && sDec <= 122) {
      let lowerCase = sDec - 97;
      decoded = ((lowerCase - shift + 26) % 26) + 97;
    } else {
      decoded = sDec;
    }
    decodedMessage += String.fromCharCode(decoded);
  }
  return decodedMessage;
}
