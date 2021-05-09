function zeroFuel(distanceToPump, mpg, fuelLeft) {
    
    if ((distanceToPump) / mpg <= fuelLeft) {
        return true;
    }

    return false;
  
};




console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
