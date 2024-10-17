const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    for (const item of users) {
      let { name } = item;
      console.log(name);
    }
  } catch (err) {
    console.log(err);
  }
};

getData();
