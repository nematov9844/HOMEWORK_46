// 1. prompt da kiritilgan songacha bo'lgan juft va toq sonlar yig'indisini toping va ular o'rtasidagi farqni ham console ga chiqaring

// let number = +prompt("Sonlarni kiriting: ");
//  function getnumber(number) {
//     let res = 0;
//     for (let i = 1; i <= number; i++) {
//        if (number % i == 0) {
//            res += i;
//            console.log(res);
//        }else if (number % i!= 0) {
//            res += i;
//            console.log(res);
//        }
//     }
//     return res;
//     console.log(res);
// }
// getnumber(number);

// 2. shunday function yarating ki argument sifatida berilgan songacha bo'lgan sonlarning yig'indisi qaytarsin (return qilsin)

function getargument(number) {
  let res = 0;
  for (let i = 0; i <= number; i++) {
    res += i;
    console.log(res);
  }
  console.log(res);
}
// getargument(4);
// 3. array ni ichidagi sonlar yig'indisini topib beradigan algorithm yarating array sonlardan tashkil topsin
// 4. array ichidagi juft sonlar yig'indisini topadigan algorithm yarating

const getarray = (array) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    res += array[i];
    console.log(array[i]);
  }
  console.log(res);
};
// getarray(array);
const getarray2 = (array) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      res += array[i];
      console.log(array[i]);
    }
  }
  console.log(res);
};
// getarray2(array);

// 5. shunday function yaratinki agument sifatida berilgan son array ichida bor yoki yo'qligini aniqlab bersin


const getarray3 = (son) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (son == array[i]) {
      console.log(array[i], "bor");
    } else if (son != array[i]) {
      console.log("Yo'q");
    }
  }
  return res;
};
// getarray3(2);

// 6. shunday function yaratinki agument sifatida berilgan son array ichida bor bo'lsa array dan olib tashlab agar bo'lmasa array ning oxiridan qo'shib qo'ysin

const getarray4 = (son) => {
  let res = 0;
  for (let i = 0; i < array.length; i++) {
    if (son == array[i]) {
      res = array[i]
      array.splice(i, 1);

    } else if (son != array[i]) {
        array.push(son);
    }
  }
  console.log(res);
  console.log(array);
  return res;
};
// getarray4(5);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// 7. array ichidagi birinchi va oxirgi sonlar o'rtasidagi farqni toping farq har doim musbat son chiqishi kerak

let arrayFirst = array[0];
let arrayLast = array[array.length - 1];
let arrayRes = Math.abs(arrayFirst - arrayLast);
console.log(arrayRes);