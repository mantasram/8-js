function weekday (day) {
    if (day % 7 === 0) {
        return 7;
    }
    return day % 7;

    
}

console.log(weekday(1), '->', 1);
console.log(weekday(10), '->', 3);
console.log(weekday(20), '->', 6);