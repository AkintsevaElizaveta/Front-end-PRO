import Student from './student.js';

class Group{
    #students = []

    addStudent(student){
        if(Group.#validateIsStudent(student)){
            this.students.push(student);
        }
    }

    static #validateIsStudent(student) {
        return student instanceof Student;
    }

    getAverageMark(){
        let groupMarks = [];

        for (let i = 0; i < this.students.length; i++) {
            let marks = this.students[i].marks;
            groupMarks.push(...marks);
        }

        return groupMarks.reduce((a, b) => (a + b)) / groupMarks.length;
    }

    get students (){
        return this.#students;
    }
}

export default Group;