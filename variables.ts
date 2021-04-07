//from parent
let apples; //... type is any 

//passed as props to child and initialized
apples = 5

// type is number 
let apple = 5;

//when to use a annotations 

//1. Function that return the 'any' type
const json = '{"x":10, "y":20}'
const coordinates: {x:number; y:number;} = JSON.parse(json)
console.log(coordinates);

//2. When we declare a variable on one line and init it later
let colors = ['red', 'green', 'blue']
let foundColor:boolean;

for(let i =0; i <colors.length; i++){
    if(colors[i] === 'green'){
        foundColor = true
    }
}
console.log(foundColor);


//3. Variables whose type cannot be inferred correctly 
let numbers = [-10,-1,12]
let numberAboutZero: (number|boolean) = false

for(let i=0; i<numbers.length; i++){
    if(numbers[i]>0){
        numberAboutZero = numbers[i]
    }
}
console.log(numberAboutZero);




