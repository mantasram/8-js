function flowers(geles,gelytes,vazonai) {
    let reikiavazonu = geles * gelytes + geles - vazonai
    if (reikiavazonu < 0) {
    return 0;
    }
    return reikiavazonu
}



console.log(flowers(1, 4, 2), '->', 3);
console.log(flowers(10, 1, 5), '->', 15);
console.log(flowers(10, 2, 100), '->', 0);