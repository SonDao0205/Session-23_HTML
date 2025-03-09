let input = prompt("Nhap 10 so nguyen")
let array = input.split(" ")
let flag = 0;
let index
if (array.length > 10) {
    console.log(`Chi nhap 10 so nguyen!`);   
}
else if (array[0] == "") {
    console.log(`Khong co so lon nhat`);
}
else{
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
            index = i
        }
    }
    console.log(`
        So lon nhat : ${max}
        Vi tri : ${index}`);
}