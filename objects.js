let school = {
    name: "Secunda Secondary School",
    location: "Mpumalanga",
    estabilished: "1992",
    20: 1000,

displayInfo: function (){
    console.log(`Welcome to ${school.name} located at 
    ${school.location} which was estabilished on 
    ${school.estabilished} having rating of 
    ${school[20]} `); //for number or integers we strictly use square brackets
    // the $ is an indentifier
    //the ${} inside the backticks is called dynamic callback method
}
}

school.displayInfo()
console.log(school.name)
console.log(`${school.name}`)
