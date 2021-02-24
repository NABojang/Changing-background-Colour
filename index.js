// listen for a click

document.querySelector("button").addEventListener("click", function () {

document.querySelector("body").style.backgroundColor = colorGenerator();

})

// generate random colours using a loop and the inserting into the body of the HTML to set the backround colour.
function colorGenerator(){
  var letters = '0123456789ABCDEF';
     var color = '#';
     for (var i = 0; i < 6; i++) {
       color += letters[Math.floor(Math.random() * 16)];
     }
     return color;
   }
