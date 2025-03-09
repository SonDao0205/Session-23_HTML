let choice;
let n
let flag
let sum = 0
let array = []
do {
    choice = +prompt(`
        ============= MENU =============
        1. Nhap so phan tu can nhap va gia tri cac phan tu
        2. In ra cac gia tri phan tu dang quan ly
        3. In ra cac phan tu chan, tinh tong va sap xep giam dan
        4. In ra cac gia tri lon nhat, nho nhat va vi tri cua chung
        5. In ra cac so nguyen to trong mang va tinh tong
        6. Nhap 1 so va dem so lan xuat hien trong mang
        7. Them 1 phan tu vao vi tri chi dinh
        8. Xoa 1 phan tu theo gia tri
        9, Sap xep mang theo thu tu tang dan hoac giam dan
        0. Thoat
        ================================
        Lua chon cua ban`)
        switch (choice) {
            case 1:
                n = +prompt(`Nhap so phan tu`)
                for (let i = 0; i < n; i++) {
                    array[i] = +prompt(`Nhap phan tu thu ${i}`)
                    if (isNaN(array[i])) {
                        console.log(`Phan tu khong hop le!`);
                        break;
                    }
                }
                break;
            case 2:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                console.log(`Cac phan tu trong mang dang quan ly : ${array}`);
                break;
            case 3:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                sum = 0
                flag = 0
                for (let i = 0; i < array.length; i++) {
                    if (array[i] % 2 == 0) {
                        flag = 1
                        console.log(`${array[i]  }`);
                        sum += array[i]
                    }
                }
                for (let i = 0; i < array.length; i++) {
                    for (let j = 0; j < array.length-i-1; j++) {
                        if (array[j] < array[j+1]) {
                            let temp = array[j]
                            array[j] = array[j+1]
                            array[j+1] = temp
                        }
                    }
                }
                if (flag == 0) {
                    console.log(`Khong co phan tu chan nao trong mang`)
                }
                else{
                    console.log(`Tong : ${sum}`);
                }
                break;
            case 4:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let max = array[0]
                let min = array[0]
                for (let i = 0; i < array.length; i++) {
                    if (array[i] < min) {
                        min = array[i]
                    }
                    if (array[i] > max) {
                        max = array[i]
                    }
                }
                console.log(`Phan tu lon nhat trong mang : ${max}, Vi tri index : ${array.indexOf(max)}`);
                console.log(`Phan tu nho nhat trong mang : ${min}, Vi tri index : ${array.indexOf(min)}`);
                break;
            case 5:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let prime
                flag = 0
                sum = 0
                for (let i = 0; i < array.length; i++) {
                    prime = 1
                    if (array[i] < 2) {
                        prime = 0;
                    } else {
                        for (let j = 2; j <= Math.sqrt(array[i]); j++) {
                            if (array[i] % j === 0) {
                                prime = 0;
                                break;
                            }
                        }
                    }
                    if (prime === 1) {
                        console.log(`${array[i]} `);   
                        flag = 1
                        sum += array[i]
                    }
                }
                if (flag == 0) {
                    console.log(`Mang khong co so nguyen to`);
                }
                else{
                    console.log(`Tong : ${sum}`);
                }
                break;
            case 6:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let count = 0
                let searchItem = +prompt("Nhap phan tu muon tim kiem")
                for (let i = 0; i < array.length; i++) {
                    if (array[i] == searchItem) {
                        count++
                    }
                }
                if (count == 0) {
                    console.log(`Khong tim thay phan tu trong mang`);
                }
                else{
                    console.log(`Phan tu ${searchItem} xuat hien ${count} lan trong mang`);
                }
                break;
            case 7:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let addItem = +prompt("Nhap phan tu ban muon them")
                let addIndex = +prompt("Nhap vi tri index ban muon them")
                if (addIndex > n) {
                    console.log(`Vi tri index khong hop le!`);
                    break
                }
                for (let i = n; i > addIndex; i--) {
                    array[i] = array[i-1]
                }
                array[addIndex] = addItem
                break;
            case 8:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                let deleteItem = +prompt("Nhap gia tri ban muon xoa")
                let deleteIndex = array.indexOf(deleteItem)
                if (deleteIndex < 0) {
                    console.log(`Khong tim thay phan tu nay trong mang`);
                    break
                }
                for (let i = deleteIndex; i < array.length; i++) {
                    array[i] = array[i+1]
                }
                n--;
                break
            case 9:
                if (array.length == 0) {
                    console.log(`Hay nhap mang truoc`);
                    break
                }
                choice = +prompt(`
                    1, Sap xep mang theo thu tu giam dan
                    2, Sap xep mang theo thu tu tang dan
                    `)
                    switch (choice) {
                        case 1:
                            for (let i = 0; i < array.length; i++) {
                                for (let j = 0; j < array.length-i-1; j++) {
                                    if (array[j] < array[j+1]) {
                                        let temp = array[j]
                                        array[j] = array[j+1]
                                        array[j+1] = temp
                                    }
                                }
                            }
                            break;
                        case 2:
                            for (let i = 0; i < array.length; i++) {
                                for (let j = 0; j < array.length-i-1; j++) {
                                    if (array[j] > array[j+1]) {
                                        let temp = array[j]
                                        array[j] = array[j+1]
                                        array[j+1] = temp
                                    }
                                }
                            }
                            break;
                        default:
                            console.log(`Lua chon khong phu hop`);
                            break;
                    }
                break
            case 0:
                console.log(`Tam biet!`);
                break;
            default:
                console.log(`Lua chon khong hop le`);
                break;
        }
} while (choice !== 0);
