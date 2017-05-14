

   document.getElementById("checkGuess").onclick = function () {
       var rand = Math.random();
       // rand =rand*10;
       rand = rand * 5; // as the maximum finger in one hand is 5
       rand = Math.round(); // converting the floating point number to whole number

       if (document.getElementById("guess").value == rand) {

           alert("congrats! You got it!");

       } else {

           alert("Nope! The number was " + rand + ". Better try again!");

       }

   }