let input = prompt("Nhap 10 so nguyen")
let array = input.split(" ")
let flag = 0;
if (array.length > 10) {
    console.log(`Chi nhap 10 so nguyen!`);   
}
else{
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 10) {
            console.log(`${array[i]}  `);
            flag = 1
        }
    }
    if (flag == 0) {
        console.log(`Khong co so nao lon hon 10`);
        
    }
}