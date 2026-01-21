//convert special characters in a string with their corresponding HTML entities.
function convertHTML(string) {
  const array = string.split("");
  const converted = [];
  const charEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  for (const item of array) {
    if (charEntities[item]) {
      converted.push(charEntities[item]);
    } else {
      converted.push(item);
    }
  }
  return converted.join("");
}

convertHTML("Dolce & Gabbana"); //returns Dolce &amp; Gabbana
