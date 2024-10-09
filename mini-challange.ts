function sensor(str: string): string {
  let res: string = "";
  let strArr: string[] = [];
  strArr = str.split(" ");

  const wordSensor: string[] = ["anjing", "babi", "monyet", "makan", "saya"];
  
  let filteredArr = strArr.map((item) => {
    if (wordSensor.includes(item)) {
      let itemSensor = item.slice(1, item.length - 1);
      let star = "";
      for (let i = 0; i < itemSensor.length; i++) {
        star += "*";
      }
      item = item.slice(0, 1) + star + item.charAt(item.length - 1);
    }
    return item;
  });
  
  res = filteredArr.join(" ");
  return res;
}

console.log(sensor("saya suka makan anjing babi monyet anjing babi"));
