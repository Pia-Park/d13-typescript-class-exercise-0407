const add = (a:number, b:number) => {
    return a + b+ '10'
}
//:number <- only type of number will be returned 



add(2,3)
console.log(add(2,3));

const logger = (message:string):void => {
    console.log(message);
    //return message + '!!!'<-not working
    
}

logger('Hello!!!!!');
//void can not return anything



const throwError = (message:string):void => {
    if(!message){
        throw new Error(message)
    }
}

// throwError('')



const todaysWeather = {
    date: new Date(),
    weather: 'rainy'
}
const logWeather = ({date, weather}:{date:Date, weather:string}):void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather)
