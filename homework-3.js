// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное


function range(start, end) {
  for (let i = start; i <= end; i++) {
      if (i % 2) {
          console.log(i + ' This is odd number');
      } else {
          console.log(i + ' This is even number');
      }
  }
}

range(6, 60);




// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше


function compare(a, b) {
  if (a > b) {
      console.log(a + ' is greater than ' + b);
  } else if (b > a) {
      console.log(b + ' is greater than ' + a);
  }
}

compare(6, 5); 


// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

function threeNumbers (a, b, c) {
  if (a > b && a > c) {
      console.log(a);
  } else if (b > a && b > c) {
      console.log(b); 
  } else {
      console.log(c);
  }
}    

threeNumbers (-5, -6, -1); 

// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)

const myProfile = {
  name: 'Jack',
  surname: 'Smith',
  emailVerified: false,
  age: 20,
  gender: 'Male',
  city: 'London',
  zip: 13233,
  hasChildren: false,
  married: true
}


