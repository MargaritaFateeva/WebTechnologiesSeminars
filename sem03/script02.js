// Задача 2: Получить от пользователя два числа и вывести 
// в диалоговое окно сумму значений, которые ввел пользователь, 
// вывод должен выглядеть так 
// (пример): Результат сложения чисел 5 и 2 равен 7.

const firstNum=Number.parseFloat(prompt("Введите первое число: "));
const secondNum=Number.parseFloat(prompt("Введите второе число: "));
alert(`Результат сложения чисел ${firstNum} и ${secondNum} 
равен ${sum(firstNum,secondNum)}`);

function sum(a,b) {
    return a+b
}