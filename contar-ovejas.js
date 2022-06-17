// Counting Sheeps

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo' }
]

function contarOvejas(ovejas) {
  return ovejas.filter(({ name, color }) => {
    if ((color == 'rojo') &&
      (name.toLowerCase().includes('n')) &&
      (name.toLowerCase().includes('a'))) {
      console.log('Name : ', name)
      return true;
    }
  })
  /*(for (let i=0; i<ovejas.length; i++){
      if((ovejas[i].color =='rojo') && 
         (ovejas[i].name.toLowerCase().includes ('n')) && 
         (ovejas[i].name.toLowerCase().includes ('a'))){ 
          console.log('Name : ', ovejas[i].name)
         //console.log(contarOvejas(ovejas)); 
         //return ovejas;*/
  /*  }
   } */
}
contarOvejas (ovejas);
