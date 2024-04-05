// ////create random number///
// // const arg = [];
// // for (let i = 0; i < 50; i++) {
// //   const num = Math.floor(Math.random() * 100 + 1);
// //   arg[i] = num;
// // }

// // ///sort arry in decending order///

// // arg.sort((a, b) => {
// //   b - a;
// // });
// // console.log(arg);
// // ///total of the array ////
// // const total = arg.reduce((acc, num) => acc + num, 0);
// // // console.log(total);

// // ///divide into 2 new array////

// const evenArg = arg.filter((item) => item % 2 === 0);
// const oddArg = arg.filter((item) => item % 2 !== 0);
// console.log(evenArg, oddArg);

// // ///remove duplicare item///
// // // const uniqArg = [...new Set(arg)];
// // const uniqArg = [];
// // for (let i = 0; i < arg.length; i++) {
// //   ///only uniq data
// //   if (!uniqArg.includes(arg[i])) {
// //     uniqArg.push(arg[i]);
// //   }
// // }
// // console.log(uniqArg);

// const uniqArg = [];
// for (let i = 0; uniqArg.length < 50; i++) {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (!uniqArg.includes(num)) {
//     uniqArg.push(num);
//   }
//   console.log(i);
// }
// console.log(uniqArg);

////// date challange////
const miliSecPerDay = 24 * 60 * 60 * 1000;
const dateExp = ({ exp, name }) => {
  const today = Date.now();
  const expTS = new Date(exp).getTime();
  const diffDay = Math.floor((expTS - today) / miliSecPerDay);
  if (diffDay < 1) {
    return `${name} expired ${Math.abs(diffDay)} days mate`;
  } else {
    return ` ${diffDay} days use it asap ${name}`;
  }
};
const foods = [
  {
    name: "momo",
    exp: "2024-3-29",
  },
  {
    name: "milk",
    exp: "2024-4-7",
  },
];
foods.map((food) => {
  const result = dateExp(food);
  console.log(result);
});
