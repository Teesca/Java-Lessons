const courses= ['Computer Science','Software Engineering', 'DataBase', 'Computer Literacy']

let i = 0;
let len = courses.length;
let devops = " ";

for(; i < len;)
{
    devops += courses[i + '']+`\n`
    i++;
}

console.log(devops); 'Computer Science Software Engineering DataBase Computer Literacy'