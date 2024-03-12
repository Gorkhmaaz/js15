////Task 1
const person = {
    name: "John",
    age: 22,
    city: "Boston",
}

const {name,age} = person

console.log('Имя:',name)
console.log('Возраст:',age)

////Task 2
function printPersonInfo(person){
    const {name,age,city,job} = person
    console.log(name)
    console.log(age)
    console.log(city)
    console.log(job)
}
const person2 = {
    name: "Alice",
    age: 30,
    city: "New York",
    job:'engineer'
}
printPersonInfo(person2)

///Task 3
function getFullName(person){
    const {firstName,lastName} = person
    return firstName + ' ' + lastName

}
const person3 = {
    firstName: "Will",
    lastName: "Smith"
};
console.log(getFullName(person3))

///Task 4
const user = {
    name:'Vasya',
    address:{
        city:'Rostov',
        country:'Russia'
    }
}
const {city,country} = user.address
console.log('Город', city)
console.log('Страна', country)

///Task 5
function printAddress(user){
    const {city,country} = user.address
    console.log('Адрес пользователя:')
    console.log(city)
    console.log(country)

}
const user2 = {
    name: "Jummy",
    address: {
        city: "Chicago",
        country: "USA"
    }
}
printAddress(user2)

///Task 6
const product = {
    title: "Bananas",
    price: 200,
    category: "Fruit"
}
const {title,price} = product
console.log('Продукт:',title)
console.log('Цена:',price)

///Task 7
function applyDiscount(product, discountPercentage){
    const{name1,price} = product
    const discountAmount = (price * discountPercentage) / 100
    const discountPrice = price - discountAmount
    return {
        name1:name1,
        price:discountPrice,
        category:product2.category
    }
    
}
const product2 = {
    name1: "Carrot",
    price: 300,
    category: "Vegetables"
}
console.log(applyDiscount(product2,20))

///Task 8
const rectangle = {
    width:5,
    height:6
}
const {width : w , height: h} = rectangle
console.log('Ширина', w)
console.log('Высота', h)

///Task 9 
function calculateArea(rectangle){
    const {width,height} = rectangle
    return width * height

}
const rectangle2 = {
    width:5,
    height:8
}
console.log(calculateArea(rectangle2))

///Task 10
const stats = {
    max:10,
    min:1,
    average:5
}
const {max,min,average} = stats
console.log('Максимальное:', max)
console.log('Минимальное:', min)
console.log('Среднее:', average)


////////////////////////////////PART 2 //////////////////////////////////////////////////////////////////



