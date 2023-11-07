const student = {
    //data property
    firstName: 'Thendo', 
    surname :'Madiba',
    age: 22,
    contact:"0714868803",

    // accessor property (getter)
    get getName() {
    
        return this.firstName; //dot notation with this for singular objects
       
    },
    get getDetails() {
    
        return [this.firstName, this.surname, this.age, this.contact]; //square braces to return multiple values 
       
    },
    //accessor property setter
        set changeName(newName){
            this.firstName=newName;
        }
    
}


console.log(student.firstName)
console.log(student.getName)

//call all the information of Thendo
console.log(student.getDetails)


//Assign a new name to first name
student.changeName="Ashanti";
console.log(student.firstName)