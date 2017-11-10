// Interface
interface IProduct {
    name: string;
    count: number;
    price?: number;
}

// Sort array by name
function sortByName(a: IProduct[]): IProduct[] {
    var result = a.slice(0);
    
    result.sort(function (x, y) {
        return x.name.localeCompare(y.name);
    });
    return result;
};

let product1: IProduct = { "name": "Jacket", count: 0, price:150 };
let product2: IProduct = { "name": "Book", "count": 5 };
let product3: IProduct = { "name": "DVD", "count": 2 };

var sortedProducts = sortByName([product1, product2, product3]);

// Print the sorted array.
for (var i = 0; i < sortedProducts.length; i++) {
    console.log(sortedProducts[i].name);
}