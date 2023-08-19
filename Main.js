


// lesson 3 time 30 m

let name = 'Vadym naum'
var age = 32

function  fun(name,age) {
    console.log(name+" " +age)
    return age+2
}
fun(name,age)

//============== rest ================
function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}

console.log(sum(1,2,43,5,7,2,3,7))

//=======================================================
function funRes(...names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i])
    }
}
funRes("Vadym",'Dima','Roma')

//============== rest end ===================

//============== functional выражения ==========

const sumTwoArguments = function (num1,num2) {
    return num1+num2;
}
var a = sumTwoArguments(12,4)
console.log(a)

//============== functional end ===============

//============== Two functions have one name Overider. without functional выражения ==========
console.log("============ Overider without functional выражения =============")
function sumArgs(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(sumArgs(1,2,3,4,5))
function sumArgs(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result+100;
}
// ====================== End ==================================
//============== Two functions have one name Overider. with functional выражения ==========

console.log("============ Overider with functional выражения =============")
var argsSum = function(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
}
console.log(argsSum(1,2,3,4,5))
var argsSum = function (...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result+100;
}

//================ Function with => =============

console.log('================ Function with => =============')

let greeting = (name = 'world')=> 'Hello '+name

console.log(greeting())

//================ End ==============

//=============== Object ============
console.log('======= created object user ===========')
const user = {
    name: 'Vadym',
    login: 'hun',
    getUserNameAndLogin: function () {
        return 'name = '+this.name+' login = '+this.login
    }
}

console.log(user.getUserNameAndLogin())

//============ prompt =================
console.log('======= prompt ==========')

// const halloMen = prompt('Hello', 'Hi');
// const nameMen = prompt('Men', 'World');
// // console.log(`halloMan + ', ' + nameMen + '!'`)
// // console.log(`${halloMen}, ${nameMen}!`)
// console.log(nameMen)


//============ End =======================

// ============== Work with arr ============
console.log('work with arr ========')

const arr = ['Anna','Helen','Fox'];
arr.push('Richard'); // add with last
arr.push(123);
arr.push("Jane");
arr.pop();         // pop() remove last element
arr.shift();      // sdwig shift all element and remove first element
arr.unshift("Olga"); // shift all element end add first element
console.log(arr)
let arr2 = arr.slice(1,3); // copy array from 1 to 3 = copy two elements index one and two
console.log(arr2)
arr.splice(1,2,"some val"); //delete start 1 index and 2 element and add to this place
console.log(arr);
let arr3 = arr.concat(['Learn','js']);
console.log(arr3);

// ======== work with type and for =======
const word = 'Hello';
const res = Array.from(word); // make array from word
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(arr instanceof Array);

// =========  arguments ============
const funct1 = function () {
    console.log(arguments);
    const res = Array.from(arguments);
    let sum1;
    res.forEach(i => sum1+= i)
    console.log(sum1);
    res.forEach(i=>console.log(i));
    //res.join(', '); // return from "res" string
}
funct1(1,23,4,7);

const arr1 = [21,33,41,64,123,443,2];

arr1.forEach((iten,index)=>{
    console.log(index + ', ' + iten + ', ' )
})

// string
// number
// boolean
// undefind
// null
// Symbol
// bigInt
// object
