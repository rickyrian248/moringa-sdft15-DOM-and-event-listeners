/**
 * The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, 
 * usually starting with 0 and 1. The sequence typically begins as follows: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. 
 * This sequence was introduced to Western mathematics by Leonardo of Pisa, also known as Fibonacci,in his 1202 book "Liber Abaci".
 */

/**
 * Write a function that returns an array of numbers that follow a fibonacci sequence.
 * 
 * Steps:
 * 1. Define function called fibonacci
 * 2. Declare an initial array with 0 and 1 as the first two elements
 * 3. Iterate through the initial array called initialSequence
 * 4. For each iteration, capture and sum up the two preceding values
 * 6. For each iteration Check if the sum value is less or equal to 34 then push it to the initialSequence array
 * 7. if the sum value is greater than 34, return the initialSequence array
 * 
 * e.g. outout: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */


function fibonacci(max){
  let initialSequence = [0, 1]
  for(let counter = 0; counter < initialSequence.length; counter++){
    const sum = initialSequence[initialSequence.length - 1] + initialSequence[initialSequence.length - 2]
    if(sum <= max){
      initialSequence.push(sum)
    }
  }
  return initialSequence
}
console.log(fibonacci(34))