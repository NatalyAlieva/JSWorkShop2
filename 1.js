"use strict";

/*
Выполнить все задачи. Комментарии, в которых написаны задачи, не стирать, 
код с решением задачи пишем под комментарием.
*/

/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
console.log('Задание 1');
const elem = document.getElementById("super_link");
console.log(elem);
/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
console.log('Задание 2');
const elements = document.querySelectorAll(".card-link");
elements.forEach((element) => {
    element.textContent = "ссылка";
  });

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
console.log('Задание 3');
const el3 = document.querySelectorAll(".card-body .card-link");
console.log(el3);
/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
console.log('Задание 4');
const el4 = document.querySelector('[data-number="50"]');
console.log(el4);
/*
5. Выведите содержимое title страницы в консоль.
*/
console.log('Задание 5');
console.log(document.title);
/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/
console.log('Задание 6');
const el5 = document.querySelector(".card-title").parentNode;
console.log(el5);
/*
7. Создайте тег `p`, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/

const p = document.createElement("p");
p.textContent = "Привет";
document.querySelector(".card").prepend(p);
/*
8. Удалите тег h6 на странице.
*/

document.querySelector("h6").remove();
