function sleep(second, param) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(param);
      }, second);
  })
}

async function test() {
  let result1 = await sleep(2000, 'req01');
  let result2 = await sleep(1000, 'req02' + result1);
  let result3 = await sleep(500, 'req03' + result2);
  console.log(result1);
}

function clg() {
  console.log(test());
  return test() && test2();
}

function test2() {
  return true;
}

console.log(clg());