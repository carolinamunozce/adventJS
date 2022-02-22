const date1 = new Date('Dec 24, 2021');
 // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
 // 1
const date3 = new Date('Dec 24, 2021 23:59:59');
 // 1
const date4 = new Date("December 20, 2021 03:24:00");
// 5


function daysToXmas(daysToXmas){
    xMasDay = new Date('Dec 25, 2021');
    daysToXmas.setHours(0, 0, 0, 0);
    let calculodias = (xMasDay - daysToXmas)
    let days = calculodias/(1000 * 3600 *24) 
    return Math.round(days);
}

let resultado = daysToXmas(date4);
console.log(resultado);


/*toISOString() 2021-12-01T03:00:00.000Z
toLocaleDateString() 1/12/2021
getDate()   22
getFullYear() 2022
toDateString() */