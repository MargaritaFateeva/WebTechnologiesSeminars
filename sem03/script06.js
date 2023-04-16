// Функция getMaxEvenElement принимает массив с целыми числами, необходимо 
// реализовать функцию так, чтобы она возвращала значение большего элемента 
// массива,  который записан в четном индексе включая 0.
// function getMaxEvenElement(arr) {
// }
// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

// function getMaxEvenElement(arr) {
//     let max = arr[0];
//     for (let i = 2; i < arr.length; i += 2) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//         }
//     return max;
//     }
//     console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
//     console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

//     function getMaxEvenElement(arr) {
// let max = arr[0];
// for (let i = 2; i < arr.length; i += 2) {
// if (arr[i] > max) {
// max = arr[i];
// }
// }
// return max;
// }
// const userInput = prompt("Введите числа через запятую : ").split(",").map(Number.parseFloat);
// console.log(getMaxEvenElement(userInput));
// // console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
// // console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31

function getMaxEvenElement(arr) {
    let max = arr[0];
    for (let i = 2; i < arr.length; i += 2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    }
    const userInput = prompt("Введите числа через запятую : ").split(",").map(Number.parseFloat);
    console.log(getMaxEvenElement(userInput));
    // console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); // 5
    // console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); // 31