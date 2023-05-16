let subjects = ['Python','C++','VB.Net', 'Javascript','Assembly']
console.log (subjects)
// to disaply the last element you use the following
console.log (subjects.at(-1))
// console.log(subjects.pop()) but wiht pop you are taking it out
//  let middle = Math.floor((subjects.length) / 2);
 console.log(subjects[middle]);

// but here is an easier way

// console.log(subjects[4])
// console.log(subjects[2]);

// but then again this is  using indexed
//but anyway, when working with a data set where there is an even amount of data
if (middle % 2 ==0){
    console.log(subjects[middle]);
}
else{
    console.log(subjects.slice()(middle-1), x +1 );
}
 //this is for when we have a large data type
function findElement (arr, index){
    return index<arr.Length ? arr [index]: 'index out of range'
}
console.log (findElement(subjects, 5))