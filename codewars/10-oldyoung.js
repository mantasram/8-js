function differenceInAges(ages){

        let min = ages[0], max = ages[0]
      
        for (let i = 1; i < ages.length; i++) {
          let value = ages[i]
          min = (value < min) ? value : min
          max = (value > max) ? value : max
        }
        return [min, max, max - min]
       
      } 
    



console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
