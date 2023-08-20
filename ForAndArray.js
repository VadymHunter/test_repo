// ============== Work with arr ============
console.log('******************** file two work with arr *******************')

const arr = ['Anna', 'Helen', 'Fox'];
arr.push('Richard'); // add with last
arr.push(123);
arr.push("Jane");
arr.pop();         // pop() remove last element
arr.shift();      // sdwig shift all element and remove first element
arr.unshift("Olga"); // shift all element end add first element
console.log(arr)
let arr2 = arr.slice(1, 3); // copy array from 1 to 3 = copy two elements index one and two
console.log(arr2)
arr.splice(1, 2, "some val"); //delete start 1 index and 2 element and add to this place
console.log(arr);
let arr3 = arr.concat(['Learn', 'js']);
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
    res.forEach(i => sum1 += i)
    console.log(sum1);
    res.forEach(i => console.log(i));
    //res.join(', '); // return from "res" string
}
funct1(1, 23, 4, 7);

const arr1 = [21, 33, 41, 64, 123, 443, 2];

arr1.forEach((iten, index) => {
    console.log(index + ', ' + iten + ', ')
})

// string
// number
// boolean
// undefind
// null
// Symbol
// bigInt
// object

//=============== Methods in arr =============

{
    console.log("Methods int array")
    const names = ["Roma", "Dima", "Misha", "Anton", "Roma"]
    const res = names.indexOf("Dima")
    console.log(res);
    console.log(names.lastIndexOf("Roma"))

    if (names.includes("Roma")) console.log("true")

    if (names.indexOf("Bob") >= 0) {
        console.log('its have!')
    } else console.log('its not have!')

    // task find words what has length 4
    let result = "";
    names.forEach(s => {
        if (s.length === 4) result += s + ' ';
    })
    // find first element what delitsa on 3
    names.findIndex((str, index) => {
        if (str.length % 3 === 0) return index;
    })

    console.log(result);

}

////////////// block two find element in array and coll beak////////////////
{
    const names = ["Roma", "Dima", "Misha", "Anton", "Roma"]
    const numbers = [127,52,354,296,489,880,12,23,122]
    const isOdd = (iten) => {
        return iten.length % 2 === 0;
    }
    console.log(names.find(isOdd))
    console.log(names.find((str,id)=> str.length % 5 === 0))

    //write method what find in number lost 6
    const  findLost6 =  (number)=>{
        return number % 10 === 6;
    }
    console.log(numbers.find(findLost6))
    console.log(numbers.findIndex(findLost6))

    //////////////////

    let res = numbers.every(findLost6) // return tru if all elements is tru
    console.log(res)
    res = numbers.some(isOdd) // return tru if one element is tru.

    // write method what check is number

    res = (iten)=>{
      return  typeof iten === 'number'
      // return  typeof iten === 'string'
      // return  typeof iten === 'symbol'
      // return  typeof iten === 'object'
      // return  typeof iten === 'boolean'
      // return  typeof iten === 'undefined'
      // return  typeof iten === 'bigint'
    }

}