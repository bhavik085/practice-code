calling Api using ajax

function callapi(cb) {
  $.ajax({
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
    success: function (result) {
      console.log(result);
      // cb(null, result);
    },
    error: function (err) {
      console.log(err);
      // cb(error, null);
    },
  });
}


errorfirst callback

function callapi(cb) {
  $.ajax({
    method: 'GET',
    url: 'https://fakestoreapi.com/products',
    success: function (result) {
      console.log(result);
      // cb(null, result);
    },
    error: function (err) {
      console.log(err);
      // cb(error, null);
    },
  });
}

callapi(function (err, data) {
  console.log(err , data);
  }
);



promise constructor in errorfirstcallback



function callapipromise(cb) {
  const promise = new Promise(function (resolved, rejected) {
    $.ajax({
      method: 'GET',
      url: 'https://fakestoreapi.com/products',
      success: function (result) {
        resolved(result);
      },
      error: function (err) {
        rejected(err);
      },
    });
  });
  return promise;
}
callapipromise()
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });




