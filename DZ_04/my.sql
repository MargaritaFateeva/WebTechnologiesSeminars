-- 2. Создать файл my.sql, в котором должна создаваться таблица с информацией об 
-- одногруппниках. В таблице должно быть четыре поля: id, name, age, address. Все 
-- поля в таблице обязательны для заполнения.
-- Необходимо добавить 5-10 одногруппников в данную таблицу.
-- Необходимо написать запрос на получение имен всех одногруппников (только имен, 
-- без всего остального), которые живут в Москве и их возраст находится в 
-- диапазоне [18, 30) лет. 
-- Примечание:
-- Квадратные скобки при указании диапазона, означают "включительно", а 
-- круглые "не включительно", то есть диапазон (7, 9] означает "от 7, 
-- где 7 не попадает в данный диапазон, до 9 включительно". Такой синтаксис 
-- нельзя использовать в sql, вам нужно найти решение, как такое условие можно 
-- записать в sql по-другому. Для проверок работы своего скрипта можете использовать 
-- свою базу данных, либо используйте сайт: https://onecompiler.com/mysql

-- https://onecompiler.com/mysql/3z67sskdc

CREATE TABLE students (
  studId INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER,
  address TEXT NOT NULL
);

-- insert
INSERT INTO students (name, age, address) VALUES ('Alex', 20, 'Новосибирск');
INSERT INTO students (name, age, address) VALUES ('Dave', 18, 'Москва' );
INSERT INTO students (name, age, address) VALUES ('Yana', 25, 'Владивосток');
INSERT INTO students (name, age, address) VALUES ('Igor', 30, 'Москва');
INSERT INTO students (name, age, address) VALUES ('Pavel', 45, 'Санкт-Петербург');
INSERT INTO students (name, age, address) VALUES ('Sergei', 33, 'Рязань');
INSERT INTO students (name, age, address) VALUES ('Kate', 23, 'Москва');
INSERT INTO students (name, age, address) VALUES ('A', 27, 'Сочи');


-- fetch 
SELECT 
name as "Имя"

FROM students 
WHERE 
  (address = 'Москва'  
  AND age >= 18
  AND age < 30)


ORDER BY name;