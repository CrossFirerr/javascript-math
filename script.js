////create random number///
const arg = [];
for (let i = 0; i < 50; i++) {
  const num = Math.floor(Math.random() * 100 + 1);
  arg.push(num);
}

///sort arry in decending order///

arg.sort((a, b) => {
  b - a;
});
// console.log(arg);
///total of the array ////
const total = arg.reduce((acc, num) => acc + num, 0);
// console.log(total);

///divide into 2 new array////

const evenArg = arg.filter((item) => item % 2 === 0);
const oddArg = arg.filter((item) => item % 2 !== 0);
console.log(evenArg, oddArg);

///remove duplicare item///
// const uniqArg = [...new Set(arg)];
const uniqArg = [];
for (let i = 0; i < arg.length; i++) {
  ///only uniq data
  if (!uniqArg.includes(arg[i])) {
    uniqArg.push(arg[i]);
  }
}
console.log(uniqArg);
