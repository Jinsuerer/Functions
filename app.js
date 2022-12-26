// Condition-Karar yapilari

//? Console`dan girilen bir sayinin pozitif , negatif 
// ?yada 0 oldugunu tespit ederek yazdirabiliriz


// const sayi = promt ("bir sayi giriniz:")

// console.log(sayi , typeof sayi);

// if(sayi > 0 ){
//     console.log(`${sayi} sayisi pozitif bir sayidir...` );
// }else if(sayi < 0){
//     console.log(`${sayi} sayisi negatif bit sayidir`);
// }else{
//     console.log(`${sayi} sifira esittir`);
// }

//? Ornek2: Console`den 2 sayi alarak bunlarin en büyügünü yazdiriniz

// const n1 = +promt ("1.sayiyi giriniz:");
// const n2 = +promt ("2.sayiyi giriniz:");
// const n3 = +promt ("3.sayiyi giriniz:");

// 1. Yöntem

// if (n1 >= n2 && n1 >= n3){
//     console.log(`${n1} is biggest`);
// }else if (n2 >= n1 && n2 >= n3){
//     console.log(`${n2} is biggest`);
// }else if (n3 >= n1 && n3 >= n2){
//     console.log(`${n3} is biggest`);
// }

// 2.yöntem

// let biggest = n1

// if(n2 >= biggest){
//     biggest =n2

// }if(n3 >= biggest ){
//     biggest = n3
// }
// console.log(`${biggest} is biggest`);

// 3. Yöntem

// console.log(`The Biggest : ${Math.max(n1, n2, n3)}`);
// console.log(`The Biggest : ${Math.min(n1, n2, n3)}`);


// Dört islemi yapacak bir duzen kurunuz

// const s1 = Number(prompt("1.Sayiyi giriniz"))
// const islem = (prompt("islemi giriniz: *, - , * , /"))
// const s2 = Number(prompt("2.Sayiyi giriniz"))
// let sonuc = 0
// switch(islem){
//     case "+":
//         sonuc = s1 + s2
//         break
//         case "-":
//             sonuc = s1 - s2
//             break
//             case "*":
//                 sonuc = s1 * s2
//                 break
//                 case "/":
//                     sonuc = s1 / s2
//                     break
//                     default("yanlis islem girdiniz")
//                     break
// }

---------

// const grade = +prompt ("Please enter your grade")
// const result =

// grade >= 50
// ?`you are succesful with $(grade)`
// : `you are failed with $ (grade)`
// console.log(result);


// promt a bir sayi gireriz örnegin 50 den kücük ise  : sonraki durum gerceklesir ama 50 den büyük ise ? sonraki olay gerceklesir



const gender = "male"
const age = 20
const healty = true
const status = " teacher"

age >= 18 && gender === "male" && healty === true && status   !== "student"
? alert ("military service is requried")
: alert ("military service is not requried")