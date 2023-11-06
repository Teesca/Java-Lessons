const courses= ['Computer Science','Software Engineering', 'DataBase', 'Computer Literacy']

let i = 0;
let len = courses.length;
let space = " ";

for(; i < len;)
{
    space += courses[i ]+''
    i++;
}

console.log(space); 'Computer Science Software Engineering DataBase Computer Literacy'