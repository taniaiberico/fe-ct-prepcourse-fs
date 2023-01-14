//function todosIguales(array) {
  //  for (var i =0 ; i < array.length - 1; i++) {
    //    if(array[i] !== array[i+1]){
      //    return false
        //}
      //}
      //return true
    //} 
//console.log (todosIguales([1,1,1]))



function mesesDelAño(array) {
    var nuevoArreglo = []; 
    for(let i = 0; i < array.length; i ++) {
       if( array[i] === "Enero" || array [i] === "Marzo" ||  array[i] === "Noviembre") {
           nuevoArreglo.push(array[i]) 
        } 
    
        }
        if(nuevoArreglo < 3) {
            return "No se encontraron los meses pedidos";
        } 
        else {
            return nuevoArreglo;
        } 
        } 


        console.log (mesesDelAño(["Febrero", "Agosto", "Junio"]))
    
 
 

