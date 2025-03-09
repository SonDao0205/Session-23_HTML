let n = +prompt("Nhap so phan tu cua mang");

if (isNaN(n) || n < 0) {
    console.log("So luong phan tu khong hop le");
} else if (n === 0) {
    console.log("Mang khong co phan tu");
} else {
    let array = []
    for (let i = 0; i < n; i++) {
        array[i] = +prompt(`Nhap phan tu thu ${i}`)
    }
    let isFibonacci = true;        
    if (n === 1){
        isFibonacci = (array[0] === 0 || array[0] === 1);
    }
    else if (n === 2) {
        isFibonacci = (array[0] === 0 && array[1] === 1) || (array[0] === 1 && array[1] === 1);
    }
    else {
        if (array[0] !== 0 || array[1] !== 1) {
            isFibonacci = false;
        } else {
            for (let i = 2; i < n; i++) {
                if (array[i] !== array[i - 1] + array[i - 2]) {
                    isFibonacci = false;
                    break;
                }
            }
        }
    }
    if (isFibonacci) {
        console.log("la fibonnaci");
    }
    else {
        console.log("khong phai fibonnaci");
    }
}
