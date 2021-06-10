/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

let count = 0;

while (count < students.length){
    console.log(students[count]);
    count = count + 1;
}


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];
grades.reverse();
console.log(grades);


// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
let posCount = 0;

while (posCount < 1){
posCount = posCount +1;



if(positiveNumbers[1] % 2 === 0){
  console.log(positiveNumbers[1])
} if(positiveNumbers[2] % 2 === 0){
  console.log(positiveNumbers[2])
} if(positiveNumbers[3] % 2 === 0){
  console.log(positiveNumbers[3])
} if(positiveNumbers[4] % 2 === 0){
  console.log(positiveNumbers[4])
} if(positiveNumbers[5] % 2 === 0){
  console.log(positiveNumbers[5])
} if(positiveNumbers[6] % 2 === 0){
  console.log(positiveNumbers[6])
} if(positiveNumbers[6] % 2 === 0){
  console.log(positiveNumbers[6])
} if(positiveNumbers[7] % 2 === 0){
  console.log(positiveNumbers[7])
}

}




// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
let bothCount = 0;

while (bothCount <1){
  bothCount = bothCount + 1;

  if(mixedSignNumbers[1] % 2 === 0){
    console.log(mixedSignNumbers[1])
  } if(mixedSignNumbers[2] % 2 === 0){
    console.log(mixedSignNumbers[2])
  } if(mixedSignNumbers[3] % 2 === 0){
    console.log(mixedSignNumbers[3])
  } if(mixedSignNumbers[4] % 2 === 0){
    console.log(mixedSignNumbers[4])
  } if(mixedSignNumbers[5] % 2 === 0){
    console.log(mixedSignNumbers[5])
  } if(mixedSignNumbers[6] % 2 === 0){
    console.log(mixedSignNumbers[6])
  } if(mixedSignNumbers[7] % 2 === 0){
    console.log(mixedSignNumbers[7])
  } if(mixedSignNumbers[0] % 2 === 0){
    console.log(mixedSignNumbers[0])
  }
}

// 

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.splice(0, 2)
symmetricalCapitals.splice(symmetricalCapitals.length-1, 1)
let capCount = 0;

while(capCount <1){
  capCount = capCount +1;
console.log(symmetricalCapitals[0]); 
console.log(symmetricalCapitals[1]); 
console.log(symmetricalCapitals[2]); 
console.log(symmetricalCapitals[3]); 
console.log(symmetricalCapitals[4]); 
console.log(symmetricalCapitals[5]); 
console.log(symmetricalCapitals[6]); 
console.log(symmetricalCapitals[7]); 
}



// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(0)
fibonacciNumbers.push(14, 15);
console.log(fibonacciNumbers)


// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
const studentNicknames = [
  'Tre-Whey Protein',
  'Sonny ol Pal',
  'Crystal Ball',
  'Ilyas the biased',
  'Greg the git',
 
];

let count1 = 0;

while (count1 < studentNicknames.length){
    console.log(studentNicknames[count1]);
    count1 = count1 + 1;
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
const challenge8 = []
challenge8.push(1,2,3);
challenge8.unshift(4,5);
console.log(challenge8)


// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
const studentsList = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];

let count2 = 3;


while (count2 <  10){
    console.log(studentsList[count2]);
    count2 = count2 + 1;
  
} 

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
let studentsCopy1 = [];

for (let i =3; i <-10; i++){
  studentsCopy1.push(studentsList[i]);
}

for (const student of studentsCopy1) {
  console.log(student);
}

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
const studentsCopy2 = students.slice(3, 10);

for (const student of studentsCopy2) {
  console.log(student);
}



// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
 dinosaurs.splice(4, 3);

 for (const dino of dinosaurs){
   console.log(dino);
 }


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
console.log(dinosaurs.join(' * '))

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
dinosaurs.reverse();
console.log(dinosaurs);

// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const allColors = primaries.concat(secondaries);

for (const color of allColors){
  console.log(color);
}