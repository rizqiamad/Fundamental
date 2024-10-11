const fruits: string[] = ["banana", "apple", "jackfruit", "apple"];

const setFruits = new Set(fruits);

setFruits.add("apple");

console.log(setFruits.values());

setFruits.forEach((item) => {
  console.log(item);
});

setFruits.clear();

console.log(setFruits);
