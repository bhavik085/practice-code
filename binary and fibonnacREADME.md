let arr = [4,6,7,9,10,0,-1,0,1,2,3] ;

function binarysearch(arr, target, start, end) {
  // let start = 0;
  // let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] == target) {
    return mid;
  } else if (arr[mid] < target) {
    start = mid + 1;
    return binarysearch(arr, target, start, end);
  } else if (arr[mid] > target) {
    end = mid - 1;
    return binarysearch(arr, target, start, end);
  }
  return -1;
}

console.log(binarysearch([4, 6, 7, 9, 10, 0, -1, 0, , 2, 3], 10, 0, 9));

function factorial(n){
  if(n==0){
    return 1 ;
  }
  return n*factorial(n-1);
}
console.log(factorial(5))

function fibonnaci(number ){
  let n1 = 0 ;
  let n2 = 0 ;
  // let i = 0 ;
  if( n<= 1){
    return n ;
  }
  for( let i =0 ; i<number.length ; i++){
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
console.log(fibonnaci([0,1,2,3]))
let list = [0,1];
function fibonnac(n) {
  

  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }
  return  fibonnac(n-1) + fibonnac(n-2);
}
for (let i = 1 ; i<8; i++){
  console.log(fibonnac(i))
}  

let arr= [];
function fibonnaci(n){
  if (arr.length < 1){
    arr = [0,1]
    return fibonnaci(n)
  }
  else if(arr.length <= n){
    arr.push(arr[arr.length-1] + arr[arr.length - 2])
    return fibonnaci(n);
  }
  return arr;
}
console.log(fibonnaci(15));
