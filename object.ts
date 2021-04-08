const profile = {
    name1: 'Adam',
    age: 20,
    coords: {
        lat: 0,
        lng:15
    },
    setAge(age:number):void{
        this.age = age;
    }
}

const {age, name1}: {age:number; name1:string} = profile //give an annotation 
const {coords: {lat,lng}}: {coords: {lat:number; lng:number}} = profile

console.log(`My name is ${name1}, My age is ${age} years old, lat is ${lat}`);
