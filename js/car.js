function canDrive( kuras, sanaudos, atstumas) {
    const imanomasNuvaziuotiAtstumas = kuras / sanaudos * 100;
    
    if (imanomasNuvaziuotiAtstumas >= atstumas) {
        return true
    }

    return false;
 
}

const try4 = canDrive(20, 5, 999);
console.log(try4);
