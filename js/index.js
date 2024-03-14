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


////////////////////////////////  PART 2 //////////////////////////////////////////////////////////////////
////Task 1
function swapValues([first, second]){
    return [second,first]
}
console.log(swapValues([3,55]))

////Task 2
const coordinate = [15,30]
const [x,y] = coordinate
console.log('x',x)
console.log('y',y)

////Task 3
function getDistance(pointA, pointB) {
    const [x1, y1] = pointA;
    const [x2, y2] = pointB;
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}
const pointA = [1, 2];
const pointB = [4, 6];
const distance = getDistance(pointA, pointB);
console.log("Расстояние между точками:", distance);

///Task 4
const grades = [12,11,8,9,10]
const [firstStudent,secondStudent,thirdStudent] = grades
console.log('first student', firstStudent)
console.log('second student', secondStudent)
console.log('third student', thirdStudent)


////Task 5
function getAverage(grades){
    const [first, ...args] = grades
    let sum = first
    for (const grade of args){
        sum += grade
    }
    const average = sum / grades.length
    return average
}
const grades1 = [12,10,8,6,11]
 const averagesGrade = getAverage(grades1)
console.log(averagesGrade)

///Task 6
const student = ['Vasya', 19, [12,11,10,9,10]]
const [name2,age2] = student
console.log('Name', name2)
console.log('age',age2)


///Task 7
function printStudentInfo(student){
    const [name3,age3,grades3] = student1
    console.log('name', name3)
    console.log('age', age3)
    console.log('grades',grades3)
}
const student1 =['Alex', 20, [11,10,11,12,10]]
printStudentInfo()

///Task 8
const colors = ['pink','blue','yellow','green','white']
const [firstColor,secondColor,thirdColor] = colors
console.log('first color',firstColor)
console.log('second color',secondColor)
console.log('third color',thirdColor)

///Task 9
function combineColors(colors1,colors2){
    return [...colors1, ...colors2]
}
const colors1 = ["White", "Yellow", "Blue"];
const colors2 = ["Pink", "Black", "Grey"];
const allColors = combineColors(colors1,colors2)
console.log('All colors',allColors)





