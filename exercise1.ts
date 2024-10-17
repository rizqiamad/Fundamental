function majority(nums: number[]): number {
  return nums.filter(
    (item, _idx, arr) => arr.filter((val) => val === item).length > arr.length / 2
  )[0];
}

//akan mengembalikan `undefined` jika tidak ada yang lebih dari setengah populasi
console.log(majority([1,4,4,4,3,3,3,3]))