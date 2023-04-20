let arr = [{ name: 'arvind', age: 23 }, { name: 'kailash', age: 23 }];

function getData() {
  setTimeout(() => {
    let output = '';
    arr.forEach((data, index) => {
      output += ` ${data.name}`;
    });
    console.log(output);
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      arr.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject('error!');
      }
    }, 2000);
  });
}

createData({ name: 'sanjay', age: 28 })
  .then(() => {
    getData();
  })
  .catch((error) => {
    console.log('error caught!', error);
  });
