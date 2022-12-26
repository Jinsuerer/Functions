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

const n1 = +promt ("1.sayiyi giriniz:");
const n2 = +promt ("2.sayiyi giriniz:");
const n3 = +promt ("3.sayiyi giriniz:");

if (n1 >= n2 && n1 >= n3){
    console.log(`${n1} is biggest`);
}else if (n2 >= n1 && n2 >= n3){
    console.log(`${n2} is biggest`);
}else if (n3 >= n1 && n3 >= n2){
    console.log(`${n3} is biggest`);
}