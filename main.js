function add (){
    let a =10;
    let b = 20;
    console. log(a+b);
}
add();

const arrow = () => {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
arrow();
//object -> key pair value
//name lai key "shyam" lai value
let name = "ram";
let person = {
    name: "shyam",
    age: 20,
    marks:{
      math:89,
      nepali:70,
      english:80
    },
    subjects:{
      science:{
            physics:["physics","chemistry"]
      },
      math:['algebra', 'geometry'],
      english:['grammar', 'composition']
    }
};

for(let mark  in person.marks){
      console.log(`${mark} : ${person.marks[mark]}`);
}

console.log(person["marks"]["math"])

person.address = "kathmandu";
person.age = 25;
person["name"] = "hari";

console.log(person);

//dot notation
console.log(person.address);
//bracket notation
console.log(person["address"]);


let students = {
    name: "ram",
    class: "bhojpur",
    marks: {
        math: 90,
        english: 80,
        science: 70
    },
}
totalmarks=0;
for (let marks in students.marks) {
console.log(name + " scored " + students.marks[marks] + " in " + marks);

totalmarks+= students.marks[marks];
}
console.log("total marks: "+ totalmarks);
averagemarks = totalmarks / Object.keys(students.marks).length;
console.log("average marks: "+ averagemarks);

if (averagemarks >= 40) {
    console.log("pass");
} else {
    console.log("fail");
}

let student = {
    student1: {
        name: "Ram",
        class: "1",
        marks: {
            math: 95,
            science: 90,
            english: 85
        }
    },    
    student2: {
        name: "shyam",
        class: "1",
        marks: {
            math: 95,
            science: 90,
            english: 85
        }
    },
    student3: {
        name: "hari",
        class: "1",
        marks: {
            math: 95,
            science: 90,
            english: 85
        }
    }
}
for (let stud in student) {
    console.log(stud, student[stud]);
}

for (let stud in student) {
    console.log(stud, student[stud].marks);
}
let totalscore = 0;
let studentnumber = 0;
for (let stud in student) {
    for (let marks in student[stud].marks) {
        totalscore = student[stud].marks[marks] + totalscore;
        studentnumber++;
    }
    console.log("Student name: " + student[stud].name);
    console.log("Total score: " + totalscore);

    let average = totalscore / studentnumber;
    console.log("Average score: " + average);

    if (average >= 40) {
    console.log("You are passed");
    } else {
        console.log("Fail");
}
}

let classtotalmarks = 0;
let classstudentnumber = 0;
for (let stud in student) {
    for (let marks in student[stud].marks) {
        classtotalmarks = student[stud].marks[marks] + classtotalmarks;
        classstudentnumber++;
    }
}

let classaverage = classtotalmarks / classstudentnumber;
console.log("Class average score: " + classaverage);
console.log("Class total marks: " + classtotalmarks);

// day 3 
