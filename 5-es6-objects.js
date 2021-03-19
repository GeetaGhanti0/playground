// Object property shorthand 

const firstName = 'Geeta';
const userAge = '35';


const user = {
    firstName,
    age:userAge,
    location: 'London'
}

console.log(user);

//object destructuring 
const product = {
    label: 'Red Notebook',
    price : 3,
    stock: 2001,
    salePrice: undefined,
    rating: 4.2
}

// Object Desctructing syntax
const {label:productLabel, stock, rating = 5, price, salePrice} = product
console.log(productLabel + "  " +stock + ' '+ price + ' ' + rating);


// const trnsaction = (type, myProduct) => {
//     const {} = myProduct;
// }

const transaction = (type, {label, stock = 0, price} = {}) => {
  console.log(type, label, stock, price)
}

transaction('Order', product)
transaction('Order')