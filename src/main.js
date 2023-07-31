// ((((((((((((while loop))))))))))))
// let i=0
// while (i<=10) {
//     i++
//     console.log(i)
// }
// do{
//     i++
//     console.log(i)
// }while(i<=10)

// const { random } = require("nanoid")

// ((((((((((((prompt,parseInt,number,string))))))))))))
// let name=prompt("enter name","enter name")
// let age=prompt("enter age","enter age")
// let ageInt=parseInt(age) //number only number
// let nameString=isNaN(name)?name:'is number'
// console.log(ageInt + nameString)

// ((((((((((((string=>url || url =>string))))))))))))
// escape('test val')
// unescape("//http")

// ((((((((((((confirm))))))))))))
// let confirm1=confirm("are you sure")

// ((((((((((((functions return final thing || single response ))))))))))))
// let a=( x, y)=>x+y
// do not make global function 
// console.log(a(2,3))
// ((((((((((((type of errors))))))))))))
//syntax,html,runtime=>input,debug

// ((((((((((((dom))))))))))))
//return value not modify
//length,charAt,indexof,substring,replace,/a/g,'',bold(),
// let str="iti minia branch"
// console.log(str.length)
// console.log(str.charAt(1))
// console.log(str.indexOf("a"))
// console.log(str.lastIndexOf("b"))
// console.log(str.substring(2,4))
// console.log(str.replace(/a/,'*'))
// console.log(str.replace(/a/g,'&'))
// console.log(str.link('http://www.google.com'))

// ((((((((((((dom Math))))))))))))
// Math.floor,ceil,round,pow,abs,pi,random

// ((((((((((((Date))))))))))))
// let date=new Date(year,month,day,hours0-23,minutes0-59,seconds0-59,milliseconds0-59)
// to,set,get =>Date,fullYear,month,seconds 
// let a=new Date()
// let b=a.getMinutes()
// console.log(a)
// console.log(b)

// ((((((((((((array))))))))))))
// let a=[1,2,3,4,5]
// console.log(a)
// let a=new Array()
// a=[1,2,3,4]
// let aa=new Array('1','2','3')

// ((((((((((((array methods))))))))))))
//join('|'),sort,reverse(not return),pop (change and delete),push,shift,unshift find, filter,reduce
// let a=[1,2,3,4]
// a.reverse() //with be reverse for ever
// console.log(a)
// ((((((((((((array key|value))))))))))))
// for in => index clg i 
// for of => value clg i =>for numbers
// foreach =>
// let a = []
// a['a'] = 1
// a['b'] = 2
// a['c'] = 3
// a['d'] = 4
// for (let index = 0; index < a.length; index++) {
//     // debugger;
//     const element = a[index];
//     console.log(element)

// }
// for (const i in a) {
//     console.log(`${i} => ${a[i]}`)

// }
// ((((((((((((array key|value))))))))))))

//((((((((((((1))))))))))))
let arrayOfTips = [
    "1, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "2, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "3, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "4, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "5, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "6, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "7, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "8, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "9, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis.",
    "10, ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis."
]
let show = arrayOfTips[Math.floor(Math.random() * arrayOfTips.length)];
// alert(show)
// console.log(arrayOfTips[Math.floor(Math.random()*10)])
//((((((((((((2))))))))))))
const date = new Date();
let showDate = () => {
    document.getElementById("date").innerHTML = date.toLocaleDateString()
}

//((((((((((((3))))))))))))

let submitEmail = () => {
    let emailInput = document.getElementById("email").value;
    // let email=emailInput.split('')

    let correct = emailInput.includes("@") && emailInput.startsWith("@") == false && emailInput.endsWith("@") == false ? emailInput : "invalid";
    console.log(correct)
    document.getElementById("emailShow").innerHTML = correct
}

//((((((((((((4))))))))))))
// && username.length>3
// && /\s/.test(username)==false 
// username.match(/[a-z]/gi).length>6
let emailCheck = () => {
    let username = prompt("enter your name", "enter your name")
    let email = prompt("enter your email", "enter your email")
    let correctUsername =
        /\w+/gi.test(username) == true
            || /(\w+){3,}\s(\w+){3,}/gi.test(username) == true
            || /(\w+){3,}\s(\w+){3,}\s(\w+){3,}/gi.test(username) == true
            &&
            /\W+|\d+/g.test(username) == false
            ? username : prompt("not valid name", "enter correct name")
    console.log(correctUsername)

    let correctEmail =
        /(\w+)@(\w+).eg$/.test(email) == true
            ? email : prompt("not valid email", "enter correct email")
    console.log(correctEmail)
    document.getElementById("fullname").innerHTML = correctUsername
    document.getElementById("emailPrompt").innerHTML = correctEmail
}

// regular expression 
// /[]/gi.test("sdfsdasdfas") =>true/false
// "sdfsadfsdf".match(/[]/gi) =>array
// /hu./.test("hum")=>any char after hu
// "sdsdsdfsdfs".match(/[aieou]/gi)
// "sdsdsdfsdfs".match(/[a-z0-9]/gi)
// "sdsdsdfsdfs".match(/[z+]/gi) //zz
// "sdsdsdfsdfs".match(/[z*]/gi) //zzzzzzzzzzzzzz
// "sdsdsdfsdfs".match(/[^0-9aeiou]/gi)

// let string="titanic"
// let regex=/t[a-z]*?n/ // all * starts with t continue a=>z if i match n break
// console.log(string.match(regex))

// let a="<h1>mostafa taha</h1>"
// let b=a.match(/<.*>/) //all inside tag
// let c=a.match(/<.*?>/) //first tag
// console.log(b)
// console.log(c)

// let a="mostafa taha"
// let b=/^mos/ //split mos at index 0
// let c=/^ta/
// let d=/ha?/ //end
// // console.log(a.match(b))
// // console.log(a.match(c)) //null at index 0
// console.log(a.match(d)) //match end 

// /\w/g =>[a-z][A-Z]
// /\W/g =>capital [@/\!#$%^&*()_+-~`?.,<>'":"]
// /\d/ [0-9]
// /\D/ not a number

// /^[a-zA-Z]{2,}\d*$ / =>start with char from a =>z and ends with min 2 numbers
// /\s/ space /\S/ not space
// console.log("tammmmer".match(/m{4}/)) //4 m

// console.log("favorite".match(/favou?rite/)) if u or not it will match

// console.log(/q(?=u)/.test("quest")) if the next after q is u
// console.log(/q(!=u)/.test("quest")) //if the next after q not u
// console.log(/q(!=[a-z])/.test("quest")) //    //if the next after q not a-z
// console.log(/(\w+)\s(\w+)/.test("mostafa m")) word space word
// console.log(/(\w+){3,}\s(\w+){3,}/.test("mostafa mss")) word min 3 space 1

// console.log(/(\w+){3,}\s(\w+){3,}\s(\w+){3,}/.test("mostafa mostafa mostafa")) // \s\1 must do not have {3,}

//replace 
// console.log("mo me".replace(/(\w+)\s(\w+)/,"!1 !2"))

// remove spaces by replace
// console.log("   sddf,sdsd   ".replace(/\W+|^\s+|\s+$/g,''))
// remove every W g

// ((((((((((((6 array))))))))))))
let studentGrade = () => {
    let studentGradeArray = [60, 100, 10, 15, 85]
    let sortedStudentGradeArray = studentGradeArray.sort((a, b) => b - a)
    let largestStudentGrade = sortedStudentGradeArray.find(element => Math.max(element) <= 100)

    let lowestStudentGrade = sortedStudentGradeArray.filter((e) => e < 60)

    document.getElementById("sortedArray").innerHTML = `sorted array is ${sortedStudentGradeArray}`
    document.getElementById("largestGrade").innerHTML = `largest grade is ${largestStudentGrade}`
    document.getElementById("lowestGrade").innerHTML = `lowest grade is ${lowestStudentGrade}`
    console.log(studentGradeArray.sort((a, b) => b - a))
    console.log(largestStudentGrade)
    console.log(lowestStudentGrade)

}
// ((((((((((((7 array))))))))))))
let studentArray = [
    { name: "mostafa", grade: 100 },
    { name: "mohamed", grade: 90 },
    { name: "taha", grade: 80 },
    { name: "yousef", grade: 50 },
    { name: "meligy", grade: 30 },

]
//(((((((((((((((((((((((name)))))))))))))))))))))))
// let studentArrayName=studentArray.map(e=>e.name)
let studentData = () => {
    // ((((((((((((((((find))))))))))))))))
    let largestGrade = studentArray.find(e => e.grade >= 90)
    // ((((((((((((((((filter))))))))))))))))
    let lowestGrade = studentArray.filter(e => e.grade < 60)
    const getNamesLowest = lowestGrade.map(({ name }) => name);
    // ((((((((((((((((((((((largest))))))))))))))))))))))
    document.getElementById("bestStudent").innerHTML = `best student larger than 90 % ${largestGrade.name}`
    // document.getElementById("lowestStudent").innerHTML = `sub normal student lower than 60 % ${lowestGrade[0].name} and ${lowestGrade[1].name}`
    // ((((((((((((((((((((((((lowest))))))))))))))))))))))))
    document.getElementById("lowestStudent").innerHTML = `sub normal student lower than 60 % ${getNamesLowest}`
    // (((((((((((((((((((((((((((push)))))))))))))))))))))))))))
    studentArray.push({ name: "mo", grade: 20 })
    for (const key in studentArray) {
        document.getElementById("pushStudent").innerText = `push student mo to array => ${studentArray.map(e => e.name)
            }`
    }
    // ((((((((((((((((((((((((((((sort))))))))))))))))))))))))))))
    document.getElementById("sortStudent").innerText = studentArray.map(e => e.name).sort()
    // console.log(largestGrade)
    // console.log(lowestGrade)

}
// let pushStudentData=()=>{
//     // (((((((((((((((((((((((((((push)))))))))))))))))))))))))))
//     studentArray.push({ name: "mo", grade: 20 })
//     for (const key in studentArray) {
//         document.getElementById("pushStudent").innerText =studentArrayName
//     }
// }
let popStudentData = () => {
    // (((((((((((((((((((((((((((pop)))))))))))))))))))))))))))
    studentArray.pop()
    for (const key in studentArray) {
        document.getElementById("popStudent").innerText = ` pop student mo from array => ${studentArray.map(e => e.name)
            }`
    }
}
// (((((((((((((((((((((((((((bonus splice add)))))))))))))))))))))))))))
let addSpliceStudentData = () => {
    studentArray.splice(2, 0, { name: "add1", grade: 90 }, { name: "add2", grade: 70 })
    for (const key in studentArray) {
        document.getElementById("spliceAddStudent").innerText = ` splice student add1,add2 to array after second => ${studentArray.map(e => e.name)
            }`
    }
}
// (((((((((((((((((((((((((((bonus splice remove)))))))))))))))))))))))))))
let removeSpliceStudentData = () => {
    studentArray.splice(3, 1)
    for (const key in studentArray) {
        document.getElementById("spliceRemoveStudent").innerText = ` splice student remove array after third => ${studentArray.map(e => e.name)
            }`
    }
}
// (((((((((((((((((((birth day)))))))))))))))))))
try {
    function birthDayShow() {
        birthdayInput = prompt("enter your birthday", "enter your birthday")

        dd = birthdayInput.slice(0, 2)

        mm = birthdayInput.slice(3, 5)

        yyyy = birthdayInput.slice(6, 10)

        ddCorrect = typeof (Number(dd)) == "number" && dd.length == 2 && Number(dd) < 31 ? dd : "Nan"
        mmCorrect = typeof (Number(mm)) == "number" && mm.length == 2 && Number(mm) < 11 ? mm : "Nan"
        yyyyCorrect = typeof (Number(yyyy)) == "number" && yyyy.length == 4 && parseInt(yyyy) > 1900 ? yyyy : "Nan"

        // let mm = birthdayInput.slice(3, 5)
        // let yyyy = birthdayInput.slice(6, 10)
        // // var space=birthdayInput[2]=birthdayInput[2]="-"
        //     let birthdayCorrect =isNaN(birthdayInput.slice(0,2)) &&
        //     isNaN(birthdayInput.slice(3,5)) &&
        //     isNaN(birthdayInput.slice(6,10)) &&
        //     birthdayInput[2]!='-'&&
        //     birthdayInput[5]!='-'


        let birthdayCorrect = parseInt(birthdayInput) == parseInt(`${ddCorrect}-${mmCorrect}-${yyyyCorrect}`) && birthdayInput[2] == "-" && birthdayInput[5] == "-" ? birthdayInput :
            alert(`enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999`)
        console.log(typeof (`${ddCorrect}-${mmCorrect}-${yyyyCorrect}`))
        console.log(typeof (birthdayInput))
        console.log(parseInt(birthdayInput) == parseInt(`${ddCorrect}-${mmCorrect}-${yyyyCorrect}`))
        // console.log(birthdayInput.toLocaleDateString().replaceAll("/", "-"))
        // let birthdayCorrect =isValidDate(birthdayInput) ? birthdayInput : `
        // enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999
        // `
        document.getElementById("dateFormat").innerText = `your birthday  => ${birthdayCorrect}
        `
        // console.log(isValidDate(birthdayInput))
        // console.log(birthdayInput)
    }

}
catch (e) {
    console.log(e)
    alert(e)
}

// function isValidDate(date) {
//     let temp = date.split('-');
//     let d = new Date(temp[0] + '-' + temp[2] + '-' + temp[1]);
//     return (d && (d.getDate() + 1) == temp[0] && d.getMonth() == Number(temp[2]) && d.getFullYear() == Number(temp[1]));
// }

// function formatDate(date) {
//     const today = new Date();
//     const yyyy = today.getFullYear();
//     let mm = today.getMonth() + 1; // Months start at 0!
//     let dd = today.getDate();

//     if (dd < 10) dd = '0' + dd;
//     if (mm < 10) mm = '0' + mm;
//     return date=dd + '-' + mm + '-' + yyyy;
// }
function editBirthDayShow() {
    editedDate = `${yyyyCorrect}-${mmCorrect}-${ddCorrect}`
    document.getElementById("editDateFormat").innerText = editedDate
}
// ((((((((((((((((((((((((((((start bonus 1 get day name))))))))))))))))))))))))))))
let getNameOfDay = () => {
    let inputDay = new Date()
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    // weekDays[0] = "Sunday";
    // weekDays[1] = "Monday";
    // weekDays[2] = "Tuesday";
    // weekDays[3] = "Wednesday";
    // weekDays[4] = "Thursday";
    // weekDays[5] = "Friday";
    // weekDays[6] = "Saturday";
    let dayName = weekDays[inputDay.getDay()];
    document.getElementById("nameOfDay").innerText = dayName
}
// ((((((((((((((((((((((((((((end bonus 1 get day name))))))))))))))))))))))))))))
// ((((((((((((((((((((((((((((start bonus 2 assign mobile))))))))))))))))))))))))))))
let assignMobile = () => {
    let mobileNumberInput = document.getElementById("assignMobileInput").value
    console.log(mobileNumberInput)
    let correctMobileNumber = /^00201[0-2]{1}\d{8}$/.test(mobileNumberInput) ? mobileNumberInput : "not valid number"
    document.getElementById("assignMobile").innerText = correctMobileNumber
}
// ((((((((((((((((((((((((((((end bonus 2 assign mobile))))))))))))))))))))))))))))





