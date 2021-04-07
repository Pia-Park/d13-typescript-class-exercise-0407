interface Reportable{

    summary(): string;
}
//can be type Reportable{}


const oldCivicCar = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string{
        return `Name: ${this.name}`
    }
}


const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40,
    summary(): string{
        return `My drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable):void => {

    console.log(item.summary());
       
}

printSummary(oldCivicCar)
printSummary(drink)