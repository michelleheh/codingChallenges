function sort(arr) {
  if (arr.length < 2) return arr;
  // return arr.sort(function(a, b) { 
  //   return a > b;
  // });
  for ( var i = 0; i < arr.length - 1; i++ ) {
    if ( ( arr[i] > arr[i + 1] && i % 2 === 0 ) || arr[i] < arr[i + 1] ) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp
    } 
  }
  return arr;
};

// console.log(sort([])) //[]
// console.log(sort([1])) //[2]
// console.log(sort([2, 1])) //[1, 2]
// console.log(sort([3, 2, 1])) //[1, 2]
// console.log(sort([6, 5, 4, 7, 1])) //[1, 2]

function findMaxSum(arr) {
  var max = arr[0];
  var sum;
  for ( var i = 0; i < arr.length; i++ ) { //1
  // if ( arr[i] > max ) 
    sum = arr[i];// -1
    for ( var j = i; j < arr.length; j++ ) { // 0
      // if ( j + 1 > arr.length ) break;
      sum = sum + ( arr[j + 1] || 0 ); //0
      if ( sum > max ) max = sum; //1
      // console.log('max', max)
    }
  }
  return max;
}

console.log(findMaxSum([1])) // 1
console.log(findMaxSum([-1, 1])) // 1
console.log(findMaxSum([1, 1])) // 2
console.log(findMaxSum([-3, -2])) // -2
console.log(findMaxSum([1, 2, 3])) // 6
console.log(findMaxSum([-1, 2, 3])) // 5
console.log(findMaxSum([1, -2, 3])) // 3

