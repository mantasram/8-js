function correctPolishLetters (string) {
     const latin = ["a", "c", "e", "l", "n", "o", "s", "z", "z"];
     const lenkiska = ["ą", "ć", "ę", "ł", "ń", "ó", "ś", "ź", "ż"];
     let convertedString = '';
     for (let i = 0; i < string.length; i++) {
         const raide = string[i];
         let convertedLetter = raide;

         for (let l=0; l<lenkiska.length; l++) {
             const lenkiskaLetter = lenkiska[l];

             if (lenkiskaLetter === raide) {
                 convertedLetter = latin[l];
             }
         }

         convertedString += convertedLetter;



     }
     return convertedString;
 }
 


 
console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
