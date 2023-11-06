let courses = ["React","Angular 2","JavaScript","HTML"];
let space = " ";
let i;

let len = courses.length;



courses[3] = "Typescript"
console.log("Courses available:"+ courses);
console.log("New semester courses:"+ courses);

// converting to string 
courses.push(["Vue","Swelte","C/C++","Python","C#"])
console.log(courses.toString())
let learners = new Array(3);

learners[0] = 1;
learners[1] = 2;
learners[2] = 3;
//learners[3] = 4;



for(i = 10; i < len;)
{
    space += courses[i]+' '
    i++;
}

console.log(space);
// console.log("No of learners"+ learners)

