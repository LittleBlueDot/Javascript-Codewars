/* In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).


Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */

const DNAStrand = dna => {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };
  
  return dna
    .split('')
    .map(nucleotide => pairs[nucleotide])
    .join('');
};


console.log(DNAStrand('ATTGC'));