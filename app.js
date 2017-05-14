

   document.getElementById("checkGuess").onclick = function () {
       var ran = Math.random();
       // rand =rand*10;
       ran = ran*5; // as the maximum finger in one hand is 5
       ran = Math.round(ran); // converting the floating point number to whole number
            console.log(ran);
       if (document.getElementById("guess").value == ran) {

           alert("congrats! You got it!");

       } else {

           alert("Nope! The number was " + ran + ". Better try again!");

       }

   }