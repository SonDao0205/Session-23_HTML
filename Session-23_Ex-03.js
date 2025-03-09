let n = +prompt("Nhap so phan tu cua mang");

if (isNaN(n) || n < 0) {
    console.log("So luong phan tu khong hop le");
} else if (n === 0) {
    console.log("Mang khong co phan tu");
} else {
    let input = prompt("Nhap cac phan tu cua mang (Ngan cach nhau bang dau cach):");
    let array = input.split(" ");

    if (array.length !== n) {
        console.log("So luong phan tu khong hop le");
    } else {
        let count = 0;
        for (let i = 0; i < array.length; i++) {
            let num = parseFloat(array[i]);
            if (!isNaN(num) && num < 0 && Number.isInteger(num)) {
                count++;
            }
        }
        console.log(count);
    }
}
