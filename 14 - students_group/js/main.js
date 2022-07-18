import Student from './models/student.js';
import Group from './models/group.js';

const group = new Group();

group.addStudent(new Student('John', [10, 8]));
group.addStudent(new Student('Alex', [10, 9]));
group.addStudent(new Student('Bob', [6, 10,]));

console.log(group.students.length === 3);

group.addStudent({});
console.log(group.students.length === 3);

console.log(group.getAverageMark() === (10 + 8 + 10 + 9 + 6 + 10) / 6); // 8.83
