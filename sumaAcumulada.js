const nums = [1,2,3,4];

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = arreglo => {
    
    let acumulado = 0;
    let resultado = [];

    for( i = 0 ; i < arreglo.length ; i++){
       let indice = arreglo[i];
       acumulado += indice;
       resultado.push(acumulado) 
    }
   
    return resultado;
};

console.log(runningSum([1,2,3,4]));
console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([3,1,2,10,1]));

