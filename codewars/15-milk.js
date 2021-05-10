function milk(orders, size, cowMilk) {

    if (typeof orders !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius'
        
    }
    if (uzsakymai < 0) {
        return 'ERROR: pirmasis parametras negali buti negiamas'
    }

    if (typeof size !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius'
        
    }
    if (typeof cowMilk !== 'number') {
        return 'ERROR: trecias parametras turi buti skaicius'
        
    }
    
        
    const requiredMilk = orders * size;
    const requiredCows = requiredMilk / cowMilk;

    return Math.ceil(requiredCows);
}






console.log(milk(10, 0.5, 9), '->', 1);
console.log(milk(100, 0.5, 9), '->', 6);