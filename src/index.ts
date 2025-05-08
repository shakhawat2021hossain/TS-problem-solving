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

const o1 = getDayType(Day.Sunday)
const o2 = getDayType(Day.Monday)
console.log(o1, o2);
