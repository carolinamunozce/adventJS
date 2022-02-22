

 const carta = '_bici  coche balón _playstation _bici _coche _peluche pelota'

function listGifts(carta) {

let result = {}
let separar = carta.split(' ');
  for (let i = 0; i<separar.length; i++){
    if(separar[i].includes('_') || (separar[i] == '')){
      continue;
    } 
    if (!result[separar[i]]){
      result[separar[i]] = 1;
    }
    else{
      result[separar[i]] = result[separar[i]]+1;
      }
    }
    return result;
  }

const regalos = listGifts(carta);
console.log(regalos)


/* function listGifts(letter) {
  const arrayGifts = letter.split(' ')
  const count = {}
  
  const filterUndesired = arrayGifts
    .filter(gift => /^(?!_)/.test(gift))
    .filter(gift => gift)
  
  for (const num of filterUndesired) {
    count[num] = count[num] ? count[num] + 1 : 1
  }
  
  return count
}
const regalos = listGifts(letter);
 console.log(regalos) */