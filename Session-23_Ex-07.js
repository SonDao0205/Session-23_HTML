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
        let max_1 = array[0];
        let max_2 = 0;
        for (let i = 0; i < array.length; i++) {
            array[i] = parseInt(array[i])
            if (array[i] > max_1) {
                max_2 = max_1;
                max_1 = array[i];
            } else if (array[i] > max_2 && array[i] < max_1) {
                max_2 = array[i];
            }
        }
        console.log(`So lon nhat : ${max_1}\nSo lon thu 2 : ${max_2}`);
    }
}
