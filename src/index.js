// var val1 = "var変数";
// console.log(val1);

// val1 = "変数を岩垣";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "変数を際宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言できない
// let val2 = "let変数を再宣言";

// const val4 = {
//   name: "じゅん",
//   age: 34
// };

// // console.log(val4);

// val4.name = "あやちゃん";
// console.log(val4);
// val4.sex = "female";

// // オブジェクトを定義するときはconst
// // constで定義したオブジェクトはプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("lion");
// console.log(val5);

// cocnstで定義した配列は要素の変更が可能

// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(func3(3,5));

// 分割代入
// const myProfile = {
//   name: "じゅん",
//   age: 34
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// // myProfile...myProfileと何度も使わないといけない
// // 分割代入はその手間を簡略化

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["jun", 34];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);
// 配列の分割代入は順番に代入されるので、配列要素の並び順に注意する。

// スプレッド構文...配列

// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピーや結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// 配列をコピーする際は＝でコピーしないほうがいい
// 参照元の内容も更新されてしまう。

// mapやfilterを使った配列の処理

const nameArr = ["滝澤", "福田", "磯旗"];

// for (let i=0; i<nameArr.length; i++) {
//   console.log(`${i+1}番目は${nameArr[i]}です`);
// }

// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です`));

// for (let i=0; i<nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// });

// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// filter関数
// const numArr =[1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "滝澤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }

// })
// console.log(newNameArr);

// const num = "1300";
// console.log(num.toLocaleString());

// const formatedNum = typeof num === 'number' ? num.toLocaleString() : "数値を入力してください。";
// console.log(formatedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です";
// }

// console.log(checkSum(50, 30));

// 左辺がfalseとなるときに右側を返す
// const num = '';
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
