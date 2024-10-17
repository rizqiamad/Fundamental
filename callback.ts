function getData() {
  let name = "";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!name) {
        reject("Error");
      }
      resolve({ name });
    }, 3000);
  });
}

// const myFunc = async () => {
//   console.log("Task 1");
//   await getData()
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err))
//     .finally(() => console.log("finally done"));
//   console.log("Task 3");
// };

// myFunc()

const tryCatch = async () => {
    try {
        console.log('Task 1')
        const res = await getData()
        console.log(res)
        console.log('Task 3')
    } catch (error) {
        console.log(error)
    }
}

tryCatch();