function parosMetas (val, min) {
    if (val < 5) {
        return 'naktis';
    }
    
    if ( val < 11) {
        return 'rytas'
    }

    if ( val < 19) {
        return 'diena'
    }

    if ( val < 24) {
        return 'vakaras'
    }
}



console.log(parosMetas(18,29));



