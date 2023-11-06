const student = {
    //data property
    firstName: 'Thendo', 
    // accessor property (getter)
    get getName() {
    
        return this.firstName;
    },
        set changeName(newName){
            this.firstName=newName;
        }
    
}
console.log(student.firstName)

student.changeName="Ashanti";
console.log(student.firstName)