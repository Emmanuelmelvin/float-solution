var prompt = require('prompt');
var colors = require("@colors/colors/safe");
var numbers = {
    properties : {
        number1 :{
            description: colors.magenta("Enter a number"),
            required : true
        },
        number2 :{
            description: colors.magenta("Enter another number"),
            required : true
        }
    }
}

  //
  // Start the prompt
  //
  var colors = require("@colors/colors/safe");
  //
  // Setting these properties customizes the prompt.
  //
  prompt.message = colors.rainbow("Float Solution for multiplication!");
  prompt.delimiter = colors.green(">........<");
  prompt.start();

  //
  // Get two properties from the user: username and email
  //
  prompt.get(numbers, function (err, result) {
    //
    // Log the results.
    //
    let num1 = result.number1;
    let num2 = result.number2;
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
   console.log(add);
  });
