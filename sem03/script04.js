// <!-- Задача 4: вывести на экран в диалоговом окне текст с сообщением 
// “Вам хорошо живется?”и кнопками «ОК», «Отмена», для чего необходимо 
// использовать confirm.- При нажатии на кнопку “ОК” вывести в диалоговом 
// окне текст с сообщением “Тогда мы идем к вам!”.- При нажатии на кнопку 
// “Отмена” вывести в диалоговом окне текст с сообщением “Ну вы держитесь там!”. -->

const question=confirm("Вам хорошо живется?");
//console.log(question);
if (question==true) {
    alert("Тогда мы идем к вам!");
} else {
    alert("Ну вы держитесь там!");
}