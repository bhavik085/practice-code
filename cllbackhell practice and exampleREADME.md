example 1 

function getcitylist(cb) {
  setTimeout(function () {
    cb([
      { name: 'kanpur', id: 1 },
      { name: 'rewari', id: 2 },
    ]);
  }, 3000);
}

console.log(getcitylist);

function ciypopulation(cb) {
  const arrOfPopulation = [
    {
      id: 1,
      population: 2000,
    },
    {
      id: 2,
      population: 4000,
    },
  ];
  console.log(arrOfPopulation);
  setTimeout(function () {
    cb(arrOfPopulation);
  }, 4000);
}
getcitylist(function (data) {
  console.log(data);
  let id = 0;
  let population = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].name == 'rewari') {
      id = data[i]['id'];
    }
  }
  console.log(id);
  ciypopulation(function (data2) {
    for (let i = 0; i < data2.length; i++) {
      if (data2[i].id == id) {
        population = data2[i].population;
      }
    }
    console.log(population);
  });
});

//



example two self


function aadhar(cb) {
  const arrofaadhar =
    [
      {
        id: 1,
        name: "shubham",
        adhar: "101"
      },
      {
        id: 2,
        name: "Ali",
        adhar: "102"
      },
      {
        id: 3,
        name: "sweta",
        adhar: "103"
      }
    ]
  // setTimeout(function() {
  cb(arrofaadhar);
  // }, 3000);
}


function vaccinated(AdharID, cb) {

  setTimeout(function() {
    let statusofaadhar = false;
    let status =
      [
        {
          adhar: "101",
