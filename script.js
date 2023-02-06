// // Задание 1
// // Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// // 0 – это ноль
// // 1 – нечетное число
// // 2 – четное число
// // 3 – нечетное число
// // …
// // 10 – четное число

// for (let i = 0; i <= 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if(i%2 === 0) {
//         console.log(`${i} - четное число`);
//     } else {
//         console.log(`${i} - нечетное число`);
//     }
// }


// // Задание 2
// // Дан массив [1, 2, 3, 4, 5, 6, 7]
// // Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const arr = [1,2,3,4,5,6,7]

// console.log(arr);

// arr.splice(3,2);

// console.log(arr);


// // Задание 3
// // Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// // 1. Рассчитать сумму элементов этого массива
// // 2. Найти минимальное число
// // 3. Найти есть ли в этом массиве число 3

// const arr = [];
// arr.length = 5;

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = parseInt(Math.random()*10);
// }
// console.log(arr);

// let sumResult = 0;
// function sumMassiveElements(arg1) { // функция вычисления суммы элементов массива
//     for (let i = 0; i < arg1.length; i++) {
//         sumResult = sumResult + arg1[i]
//     }
//     return sumResult;
// }
// console.log(`Сумма элементов массива [${arr}] равна ${sumMassiveElements(arr)}`);

// function defineMinMassiveNumber(arg1) { // функция поиска минимального значения
//         let min = arg1[0];
//         for (let i = 1; i < arg1.length; i++) {
//             if (arg1[i] <= min) {
//                 min = arg1[i];
//             }
//         }
//         console.log(`Минимальное число в массиве [${arg1}] равно ${min}`);
// }

// defineMinMassiveNumber(arr);

// function findNumberInMassive(arg1) {  //функция поиска конкретного числа в массиве
//     let result;
//     for (let i = 0; i < arg1.length; i++) {
//         if(arg1[i] === 3){
//             result = arg1[i];
//             console.log(`Массив [${arg1}] имеет число 3`);
//         }
//     }
//     if (result !== 3) {
//             console.log(`Массив [${arg1}] не имеет число 3`);
//     }
// }

// findNumberInMassive(arr);


// // *Необязательное задание. *
// // Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// // x
// // xx
// // xxx
// // xxxx
// // xxxxx

// let x = "";
// for (let i = 0; i < 20; i++) {
//   x = x + "x";
//   console.log(x);
// }

