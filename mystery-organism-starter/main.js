// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(specimenNum, dna){
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let mutatePosition = Math.floor(Math.random() * 15);
      let changed = returnRandBase();
      while(this.dna[mutatePosition] !== changed){
        this.dna[mutatePosition] = changed;
      }
      return this.dna;
    },
    compareDNA(pAequor) {
      let commonElement = 0;
      for(let i = 0; i < pAequor.dna.length; i++){
        if(this.dna[i] === pAequor.dna[i]){
          commonElement = commonElement + 1;
        }
      }
      let percentageCommon = commonElement / this.dna.length * 100;
      return `specimen#${this.specimenNum} and specimen#${pAequor.specimenNum} have ${percentageCommon}% DNA in common`;
    },
    willLikelySurvive() {
      let count = 0;
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          count = count + 1;
        }
      }
      let survivePercent = count / this.dna.length;
      if(survivePercent > 0.6){
        return true;
      }
      else{
        return false;
      }
    },
    complementStrand(){
      let complement = [];
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'A'){
          complement.push('T')
        }
        else if(this.dna[i] === 'T'){
          complement.push('A');
        }
        else if(this.dna[i] === 'C'){
          complement.push('G');
        }
        else if(this.dna[i] === 'G'){
          complement.push('C');
        }
      }
    }
  };
};

function pAequorStudyArr(){
  let study = []
  for(let i = 1; i<=30; i++){
    let findingSurvival = true;
    while(findingSurvival){
      let survive = pAequorFactory(i,mockUpStrand());
      if(survive.willLikelySurvive() === true){
        study.push(survive);
        findingSurvival = false;
      }
    }
  }
  return study;
}


console.log("hello");
let example = pAequorStudyArr()
console.log(example);

for(let i = 0; i < example.length; i++)
{
  console.log(example[i].specimenNum);
  console.log(example[i].willLikelySurvive())
}