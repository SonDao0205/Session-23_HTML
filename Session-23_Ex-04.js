let n = +prompt("Nhap so phan tu cua mang");

if (isNaN(n) || n < 0) {
    console.log("So luong phan tu khong hop le");
} else if (n === 0) {
    console.log("Mang khong co phan tu");
} else {
    let flag = 0
    let input = prompt("Nhap cac phan tu cua mang (Ngan cach nhau bang dau cach):");
    let array = input.split(" ");
    if (array.length !== n) {
        console.log("So luong phan tu khong hop le");
    } else {
        for (let i = 0; i < array.length; i++) {
            if (isFinite(array[i])) {
                console.log(`${array[i]}`);
                flag = 1
            }
        }
        if (flag === 0) {
            console.log(`Khong co ky tu so`);
        }
    }
}
