let opera;
 opera = () =>  {
    let num1 = 2.1;
    let num2 = 0.1;
    num1.toString();
    num2.toString();
   let index1 = num1.indexOf(".");
   let index2 = num2.indexOf(".");
   let xindex1 = num1.length - 1;
   let xindex2 = num2.length - 1; 
   let p1 = (xindex1 - index1);
   let p2 = (xindex2 - index2);
   let max;
   if (p1 > p2) {
       max = p1;
   } else {
       max = p2;
   }
   Number(num1);
   Number(num2);
   let maxem = Math.pow( 10 , max);
   const add = (num1 * maxem) * (num2 * maxem) / (maxem * maxem)
   return add;
}
console.log(opera())


