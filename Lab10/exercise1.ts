
class University {

     private name: string;
     private dept: string; 
     constructor (name: string, dept: string ){
          this.name = name;
          this.dept = dept;
     }

     graduation(year: number ){
          console.log(`Graduation ${this.name} ${this.dept} ${year} students`);
     }
}

const uni = new University ("MUM","Computer Science");
uni.graduation(2019);




