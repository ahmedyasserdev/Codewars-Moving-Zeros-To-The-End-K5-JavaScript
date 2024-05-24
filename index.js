
    // link of the problem

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

function moveZeros(arr) {
    // first solution
//      const arrWithZeros = []
//     const arrOfZeros = arr.filter((item) => item !== 0);
//       for (let i = 0 ; i < arr.length ; i++) {
//         if (arr[i] === 0) {
//           arrWithZeros.push(arr[i])
//         }
//       }


//   return  arrOfZeros.concat(arrWithZeros)


   // best solution
return [
  ...arr.filter((item) => item !== 0),
  ...arr.filter((item) => item === 0),
]
}