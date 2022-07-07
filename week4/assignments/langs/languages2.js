const Js = 'JavaScript'

var button = document.getElementById('submit');
button.addEventListener('click', function(){

   
   var a = document.getElementById('lang0').value
   var b = document.getElementById('lang1').value
   var c = document.getElementById('lang2').value
   var d = document.getElementById('lang3').value
   var e = document.getElementById('lang4').value
   var f = document.getElementById('lang5').value
   var g = document.getElementById('lang6').value
   var h = document.getElementById('lang7').value

   var ary = [a, b, c, d, e, f, g, h];
   chkLang(ary)

})
 

  
   function chkLang(lang) {

   for (let i = 0; i < lang.length; i++){

   
    let obj = document.querySelector('#TestResult')
    if (lang[i].toLowerCase() == Js.toLowerCase()){  

        obj.innerText = `Congratulations!\nYou know ${Js}.`
        break;
    }

    else {

        obj.innerText = `Sorry,\n you havent learned ${Js}.`

   }

}
   
   }


// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.


    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
