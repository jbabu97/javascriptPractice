
// I tried to register a student with name, fathers name, mothers name. if some one fill up the conditions then he will succesfully register. And can check is he a resiter student or not.

const studentRegistration = {
    __proto__: {
        isStudent: false,
        register(name, fathersname, mothersname){
            this.name= name;
            this.fathersName = fathersname;
            this.mothersName = mothersname;
            console.log('Registration Succesfully.');
        },
        student(name, mothersname){
            if(this.name !== name || this.mothersName !== mothersname) return;
            
            this.isStudent = true;
                
            }
        }
};


studentRegistration.register('Abdul', 'Karim', 'Saleha');

studentRegistration.student('Abdul', 'Saleha');

if(studentRegistration.isStudent){
    console.log(`Welcome ${studentRegistration.name}`);
}else {
    console.log('You are not a student.');
}
console.log(studentRegistration);