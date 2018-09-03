var generate;
window.addEventListener("load", () => {
  

  
  }

);
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let uppercaseArr = arr.map(function(x) {return x.toUpperCase();});
  let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
  let special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",  "]", "^", "_", "{", "|", "}", "~", "&#92;"];
  let randomCharacter ='';
  let atLeast = [arr, uppercaseArr, number, special];
  generate  = function(){
    let inputLength = document.getElementById("inputLength").value; 
    
    console.log(inputLength)
    let randomCharacter = '';
    let passLength = parseInt(inputLength) ? parseInt(inputLength) : 6;
    console.log("passLength", passLength);
    
    for (i = 0; i < passLength; i++) {
      let arr = atLeast[(i%4)];
      // console.log(arr);
      randomCharacter +=arr[Math.floor(arr.length * Math.random())];
    }
    console.log(randomCharacter);
    document.getElementById("pw").innerHTML = randomCharacter;
    randomCharacter = '';
    console.log(atLeast);
  };
