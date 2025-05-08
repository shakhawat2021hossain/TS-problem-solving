function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === undefined || toUpper) {
        return input.toUpperCase()
    }
    else {
        return input.toLowerCase()
    }
}



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filtered = items.filter(item => item.rating >= 4);
    return filtered
}


function concatenateArrays<T>(...arrays: T[][]): T[] {
    const concatenated = arrays.reduce((acc, curr) => [...acc, ...curr], [])
    return concatenated
}




class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }

    getModel() {
        console.log(`Model: ${this.model}`);
    }

}




function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2
}



interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    const expensive = products.reduce((acc, curr) => curr.price > acc.price ? curr : acc)
    return expensive
}


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    return day === Day.Sunday || day === Day.Saturday ? "Weekend" : "Weekday"
}



async function squareAsync(n: number): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject(new Error("Negative number not allowed"))
            }
            resolve(n * n)
        }, 1000)

    })
}

