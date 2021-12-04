alert("Please use console!")

var Students = []

Students[0]= {
    age: 23,
    groupname: 21
}
Students[1] = {
    age: 19,
    groupname: 11
}
Students[2] = {
    age: 17,
    groupname: 11
}
Students[3] = {    
    age: 15,
    groupname: 12
}
Students[4] = {    
    age: 21,
    groupname: 22
}
Students[5] = {    
    age: 19,
    groupname: 12
}
Students[6] = {    
    age: 31,
    groupname: 11
}
Students[7] = {    
    age: 24,
    groupname: 21
}
Students[8] = {    
    age: 41,
    groupname: 22
}
Students[9] = {    
    age: 25,
    groupname: 12
}
console.log(Students)

// var studentsGroup = Students.map(function(name) {
//     return name.groupname;    
// })
// console.log(studentsGroup)

function studentsGroup(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++){
        newArr[i] = arr[i].groupname;
    }
    return newArr
}
var group = studentsGroup(Students);
console.log(group)

// var sumAge = Students.reduce(function(sum, current) {
//     return sum + current.age
// }, 0)
// console.log(sumAge)

function sumAge(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum = sum + Number(arr[i].age)
    }    
    return sum;
}
console.log("Sum of students ages = " + sumAge(Students))

function checkAge(arr, group) {  // here we need also enter name of group as parameter
    var checkedArr = arr.filter(function(el) {
        if (el.groupname == group) return el
    })

    if (checkedArr.some(function(stud) {
        return stud.age < 18
    })){
        console.log("There is a minor student in " + group + " group!")
    }
}

checkAge(Students, 11);
checkAge(Students, 12);
checkAge(Students, 21);
checkAge(Students, 22);