/*

function foo(a, b, ...args) {
  // rest operator   
  console.log(a, b, args);
  console.log(a, b, ...args);
  // spread operator 
  console.log([a, b, args]);
  console.log({ a, b, args });
}
foo(1, 2, 3, 8, 5, 69, 8, 7,)

// rest operatoor is always used at the last  of the function oit is not uused at first because it gives error and its not good 


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
function bar(a, ...arr1) {
  // console.log(a, arr);
  if (a == 0) {
    return a;
  }
  return bar(a - 1, arr1[2])
}
console.log(...arr)
console.log(bar(7, 8, 1, 2, 3));

// rest operator is variadic function and dont confuse

// arr.reduce method
function foo1(...args1) {
  return args1.reduce((acc, ele) => acc + ele)
}
console.log(foo1(1, 2, 3, 4, 5, 6, 7, 8, 9));


// tagged template literal
// in this tagged template literal you can use function with a template literal that why this is tagged template literal 
let brr = ["bhavik", "90kg", "230 kg"];

function taggedFunc(staticstring, ...dynamicstring) {
  console.log(staticstring, dynamicstring);
}
let str2 = taggedFunc`my name is ${brr[0]} and my weight is ${brr[1]} and my squat is ${[2]}`

console.log(str2)
console.log(brr[0]);   

// array sort method 
// array.prototype.sort()
// only applicable in array 

let bhavik = [1, 2, 3, 100, , 201, 89, 777, 99];
let rupesh = ["a", "b", "g", "t", "y"];
// array.prototype.sort() it sorts the alphabet self but in njumericaal value we have to apply some rule
bhavik.sort((a, b) => {
  return b - a;
})
console.log(bhavik);
console.log(rupesh.sort());


// example of sorting

let bhavik = [
  {
    _id: '6334123bd4f9a90e3d64358f',
    index: 0,
    guid: '28e8bb5e-861a-43e8-bf58-8871247bc995',
    isActive: false,
    balance: '$3,053.41',
    picture: 'http://placehold.it/32x32',
    age: 22,
    eyeColor: 'blue',
    name: 'Arlene Bates',
    gender: 'female',
    company: 'BESTO',
    email: 'arlenebates@besto.com',
    phone: '+1 (807) 581-2718',
    address: '544 Baycliff Terrace, Cornucopia, South Carolina, 814',
    about:
      'Culpa in elit cupidatat exercitation reprehenderit elit cillum irure ex nisi cupidatat in id quis. Adipisicing laboris reprehenderit culpa do id occaecat aute reprehenderit. Aute irure magna incididunt aliquip nisi sint incididunt non pariatur. Veniam adipisicing elit non enim laboris consequat. Labore sint qui consequat labore nostrud voluptate nulla adipisicing velit ut proident magna nostrud in. Labore laborum in duis velit dolore sunt voluptate mollit aliqua.\r\n',
    registered: '2017-09-24T02:12:34 -06:-30',
    latitude: -50.724064,
    longitude: 137.875445,
    tags: ['in', 'aliqua', 'adipisicing', 'enim', 'veniam', 'quis', 'velit'],
    friends: [
      {
        id: 0,
        name: 'Christine Tyson',
      },
      {
        id: 1,
        name: 'Robertson Kelley',
      },
      {
        id: 2,
        name: 'Priscilla Patel',
      },
    ],
    greeting: 'Hello, Arlene Bates! You have 7 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '6334123b70ce5e6d975d63ba',
    index: 1,
    guid: 'eacdf038-8d80-4de4-9c2b-3059c02a3ee0',
    isActive: true,
    balance: '$2,830.16',
    picture: 'http://placehold.it/32x32',
    age: 38,
    eyeColor: 'green',
    name: 'Beryl Noel',
    gender: 'female',
    company: 'GOGOL',
    email: 'berylnoel@gogol.com',
    phone: '+1 (915) 463-2697',
    address: '556 Delmonico Place, Gracey, West Virginia, 3212',
    about:
      'Sunt aliqua ipsum id velit mollit culpa laborum esse nostrud. Quis occaecat voluptate pariatur sunt labore fugiat. Est non aliqua incididunt pariatur consectetur officia elit. Consectetur sint aliqua eiusmod nostrud. Non esse sunt deserunt nostrud minim.\r\n',
    registered: '2022-02-16T02:50:57 -06:-30',
    latitude: -54.473186,
    longitude: -9.448635,
    tags: ['veniam', 'non', 'sint', 'do', 'duis', 'aliqua', 'pariatur'],
    friends: [
      {
        id: 0,
        name: 'Lorena Walter',
      },
      {
        id: 1,
        name: 'Baxter Frank',
      },
      {
        id: 2,
        name: 'Bailey Dean',
      },
    ],
    greeting: 'Hello, Beryl Noel! You have 5 unread messages.',
    favoriteFruit: 'banana',
  },
  {
    _id: '6334123bb1a8f5aa59bfb8c6',
    index: 2,
    guid: '95b0baef-bb4c-445f-96ad-88756f9cf0d0',
    isActive: true,
    balance: '$2,558.17',
    picture: 'http://placehold.it/32x32',
    age: 25,
    eyeColor: 'green',
    name: 'Camacho Weaver',
    gender: 'male',
    company: 'QOT',
    email: 'camachoweaver@qot.com',
    phone: '+1 (918) 488-3167',
    address: '560 Carlton Avenue, Lowell, Georgia, 251',
    about:
      'Officia elit do do sunt esse nulla. Esse Lorem mollit aute cupidatat. Elit eiusmod in nostrud anim nulla sunt. Aliqua commodo proident occaecat pariatur esse consectetur eu aute et quis laboris magna veniam qui. Veniam aliquip cillum enim officia nostrud qui ullamco anim commodo laborum magna cillum tempor.\r\n',
    registered: '2021-09-16T05:30:16 -06:-30',
    latitude: -51.027306,
    longitude: 25.656306,
    tags: [
      'reprehenderit',
      'culpa',
      'eiusmod',
      'anim',
      'veniam',
      'esse',
      'aliquip',
    ],
    friends: [
      {
        id: 0,
        name: 'Eve Walsh',
      },
      {
        id: 1,
        name: 'Levy Marquez',
      },
      {
        id: 2,
        name: 'Koch Valenzuela',
      },
    ],
    greeting: 'Hello, Camacho Weaver! You have 10 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '6334123bd5765650ce133932',
    index: 3,
    guid: 'c879c7bb-5d98-4b32-98c4-bebc32477abe',
    isActive: true,
    balance: '$1,411.40',
    picture: 'http://placehold.it/32x32',
    age: 22,
    eyeColor: 'green',
    name: 'Teri Cummings',
    gender: 'female',
    company: 'CODACT',
    email: 'tericummings@codact.com',
    phone: '+1 (874) 511-3895',
    address: '616 Celeste Court, Rodanthe, California, 6766',
    about:
      'Cupidatat nisi anim nisi excepteur consectetur sint nisi ullamco nulla qui commodo. Esse culpa laborum eu enim est voluptate in. Et magna consequat Lorem laboris nostrud commodo. Deserunt dolore mollit sunt do et excepteur elit consectetur commodo nostrud occaecat aute aliquip.\r\n',
    registered: '2021-06-20T10:50:33 -06:-30',
    latitude: 72.499556,
    longitude: 122.370955,
    tags: [
      'officia',
      'excepteur',
      'pariatur',
      'quis',
      'proident',
      'aliqua',
      'voluptate',
    ],
    friends: [
      {
        id: 0,
        name: 'Huffman Hughes',
      },
      {
        id: 1,
        name: 'Deanna Acosta',
      },
      {
        id: 2,
        name: 'Watts Chen',
      },
    ],
    greeting: 'Hello, Teri Cummings! You have 3 unread messages.',
    favoriteFruit: 'apple',
  },
  {
    _id: '6334123bde287c113e4f9e23',
    index: 4,
    guid: '5cfc3ca0-cf3e-40e1-af45-b9d3f7a72c3a',
    isActive: false,
    balance: '$2,098.85',
    picture: 'http://placehold.it/32x32',
    age: 29,
    eyeColor: 'brown',
    name: 'Sullivan Franks',
    gender: 'male',
    company: 'EXTRAWEAR',
    email: 'sullivanfranks@extrawear.com',
    phone: '+1 (852) 564-3105',
    address: '491 Howard Place, Greenwich, Colorado, 6726',
    about:
      'Exercitation officia cupidatat consectetur quis mollit non ad ullamco reprehenderit id veniam sit. Exercitation cillum qui occaecat do et. Minim nulla aute cupidatat fugiat adipisicing elit aute eu tempor aliqua irure sit. Adipisicing nulla nulla voluptate esse ad ea irure magna. Aute et velit in non tempor ad sint consequat commodo in aliqua. Esse et duis magna commodo id.\r\n',
    registered: '2016-02-04T12:04:33 -06:-30',
    latitude: 20.16802,
    longitude: -168.210613,
    tags: ['proident', 'fugiat', 'ullamco', 'ipsum', 'duis', 'duis', 'Lorem'],
    friends: [
      {
        id: 0,
        name: 'Davenport Beck',
      },
      {
        id: 1,
        name: 'Chris Bentley',
      },
      {
        id: 2,
        name: 'Kirk Small',
      },
    ],
    greeting: 'Hello, Sullivan Franks! You have 3 unread messages.',
    favoriteFruit: 'strawberry',
  },
  {
    _id: '6334123be36cc009ea5cba40',
    index: 5,
    guid: '7e47c56e-c18e-4fe7-8977-8fc58e6660e3',
    isActive: false,
    balance: '$2,061.58',
    picture: 'http://placehold.it/32x32',
    age: 34,
    eyeColor: 'blue',
    name: 'Carmella Clay',
    gender: 'female',
    company: 'XERONK',
    email: 'carmellaclay@xeronk.com',
    phone: '+1 (892) 410-3139',
    address: '510 Scott Avenue, Sidman, Indiana, 9411',
    about:
      'Cillum occaecat deserunt aliquip dolore exercitation occaecat consectetur elit. Exercitation est do aliqua irure ex. Dolore est consectetur excepteur do consectetur nulla velit ipsum officia dolor ipsum. Aliquip sint deserunt amet ipsum excepteur. Officia ullamco labore aute dolore fugiat commodo ex. Aliqua voluptate eu nulla quis ea aliqua fugiat enim in enim. Eiusmod ad id consectetur et qui non laboris cillum nisi duis dolore.\r\n',
    registered: '2014-04-01T12:41:07 -06:-30',
    latitude: -84.084351,
    longitude: 35.799233,
    tags: ['minim', 'anim', 'dolor', 'dolore', 'in', 'veniam', 'nostrud'],
    friends: [
      {
        id: 0,
        name: 'Petra Clark',
      },
      {
        id: 1,
        name: 'Nguyen Macdonald',
      },
      {
        id: 2,
        name: 'Blanca Vasquez',
      },
    ],
    greeting: 'Hello, Carmella Clay! You have 9 unread messages.',
    favoriteFruit: 'banana',
  },
];
setTimeout(() => {
  bhavik.sort((a, b) => {
    return b.age - a.age;
  });
  console.log(bhavik);
}, 8000);




// examples of closures

function fun() {
  let a = 10;
  var b = 12;
  const c = 88;
  return function closure() {
    return [a, b];
  }
}
console.log(fun()());
*/

// example2 

function fun() {
  let a = 10;
  var b = 12;
  const c = 88;

  function futo(){
    console.log(a, b);
    function inner() {
      console.log(c);
    }
    inner();
  }
  futo();
}
fun();
