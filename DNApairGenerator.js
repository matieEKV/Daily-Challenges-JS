//develop a pair generator from a strand of DNA. It returns a 2D array of the base pairs
function pairElement(strand) {
  const strandArr = strand.split("");
  const helix = [];
  const basePairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };
  for (const letter of strandArr) {
    if (basePairs[letter]) {
      helix.push([letter, basePairs[letter]]);
    }
  }
  return helix;
}

pairElement("ATCGA"); // returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
