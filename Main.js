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