//spread operator
const fruits = ["apple", "banana"];
const moreFruits = ["cheery", "berry"];

const allFruits = [...fruits, ...moreFruits];
const newFruits = [...fruits, "melon"];

console.log(allFruits);
console.log(newFruits);

// rest operator
function test(firstArgument, secondArgument, ...otherArgument) {
  console.log(firstArgument);//a
  console.log(otherArgument);//b
  console.log(otherArgument[0]);//c
  console.log(otherArgument[2]);//b
}

test("a", "b", "c", "a", "b", "c");

// arrow function
const add = (a, b) => {
  console.log("add ", a + b);
  return a + b;
};

add(3, 4);

//Normal function
function substract(a, b) {
  console.log("result ", a - b);
  return a - b;
}
substract(4, 3);
