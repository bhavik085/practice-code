function foo(num) {
  const promise = new Promise(function (resolve, rejected) {
    if (num % 2 === 0) {
      resolve('its an even');
    } else {
      rejected('its an odd');
    }
  });
  return promise;
}
foo(14)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
