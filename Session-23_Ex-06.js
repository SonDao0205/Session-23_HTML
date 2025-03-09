let array = ["JavaScript", 0, null, true, 7, " "]
for (let i = 0; i < array.length; i++) {
    if (!array[i]) {
        array.splice(i,1)
        i--;
    }
}
console.log(array);
