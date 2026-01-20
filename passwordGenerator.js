//write a function that returns a password with a provided length containing random letters, numbers or symbols
function generatePassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  while (password.length < length) {
    password += characters[Math.floor(Math.random() * (characters.length + 1))];
  }
  console.log(password.length);
  return password;
}

const password = generatePassword(8);

console.log("Generated password: " + password);
